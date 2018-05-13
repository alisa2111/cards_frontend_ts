import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import '../../../styles/Patients.css'
import {Patient} from "../../../models/Patient";
import {Link} from "react-router-dom";
import SearchComponent from "../../SearchComponent";
interface Props{
    user: User
    onLogin: (user: User) => void
    onPatient: (patient: Patient) => void
}
export default class PatientsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patients:[]
        };
    }

    refreshPatients = (result: any) => {
        const patients = result.map((r: any) => new Patient(
            r.id,
            r.lastName,
            r.firstName,
            r.secondName,
            r.email,
            r.sex,
            r.password,
            r.address,
            r.phoneNumber,
            r.birthday));
        this.setState({patients})
    };

    componentWillMount(){
        fetch(`http://localhost:8080/api/patients/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshPatients)
            .catch((err: any) => {
                console.log(err)
            })
    }

    render(){
        const {onLogin , user , onPatient} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u} refreshPatients={this.refreshPatients} onPatient={onPatient}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user={user} isAdmin={true} />
                <SearchComponent title="Поиск по имени, фамилии, отчеству и адресу"
                                 placeholder="Поиск по пациентам"
                                 refreshState={this.refreshPatients}
                                 isPatient={true}
                />
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Фото</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Пол</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Год рождения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allPatientsView}
                    </tbody>
                </table>
            </div>
        )
    }
}
const PatientRow = (props: any) => {
    const {surname, name , patronymic , gender,  email , phone , address, birthday, id} = props.patient;
    const {refreshPatients, onPatient} = props;
    let requestForImage = "http://localhost:8080/api/image/" + id;

    function addToArchive() {
        fetch(`http://localhost:8080/api/archive/patients/add`, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshPatients)
            .catch((err: any) => {
                console.log(err)
            });
    }

    return (
        <tr>
            <td>
                <Link to={"/patientCard"}>
                    <img
                        onClick={() => {
                            const patient = new Patient(id,surname, name, patronymic, email, gender, "", address , phone, birthday);
                            onPatient(patient);
                        }}
                        className="border border-dark"
                        src={requestForImage}
                        alt='qwerty' height="125px" width="125px"
                    />
                </Link>
            </td>
            <td onClick={()=>{
                const patient = new Patient(id,surname, name, patronymic, email, gender, "", address , phone, birthday);
                onPatient(patient);
            }}>
                <Link to={"/patientCard"}>{surname}</Link>
            </td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{birthday}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary claim-btn"
                    onClick={()=>{addToArchive()}}
                >
                    В архив
                </button>
            </td>
        </tr>
    )
};
