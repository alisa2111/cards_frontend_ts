import * as React from 'react';
import 'styles/AdminPage.css'
import 'styles/Patients.css'
import {Link} from "react-router-dom";
import {User} from "../../models/User";
import {Patient} from "../../models/Patient";
import SearchComponent from "./SearchComponent";
import Header from "./Header";
import config from "../../config";
interface Props{
    isDoctor?:boolean
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
        fetch(config.urls.GET_ALL_PATIENTS, {
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
        const {isDoctor, onLogin , user , onPatient} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow
                patient={u}
                refreshPatients={this.refreshPatients}
                onPatient={onPatient}
                isDoctor={isDoctor}
            />
        );
        return(
            <div className="container-fluid">
                {
                    isDoctor?
                        <Header onLogin={onLogin} user={user} isDoctor={true}/>:
                        <Header onLogin={onLogin} user={user} isAdmin={true} />
                }
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
    const {surname, name , patronymic , gender,  email , phoneNumber , address, birthday, id} = props.patient;
    const {refreshPatients, onPatient, isDoctor} = props;
    let requestForImage = config.urls.IMAGE + id;

    function addToArchive() {
        fetch(config.urls.MOVE_PATIENT_TO_ARCHIVE, {
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
                <Link to={config.links.PATIENT_CARD}>
                    <img
                        onClick={() => {
                            const patient = new Patient(id,surname, name, patronymic, email, gender, "", address , phoneNumber, birthday);
                            onPatient(patient);
                        }}
                        className="border border-dark"
                        src={requestForImage}
                        alt='qwerty' height="125px" width="125px"
                    />
                </Link>
            </td>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{address}</td>
            <td>{birthday}</td>
                {
                isDoctor ?
                    null :
                    <td>
                        <button
                            type="button"
                            className="btn btn-secondary claim-btn"
                            onClick={()=>{addToArchive()}}
                        >
                            В архив
                        </button>
                    </td>
                }
        </tr>
    )
};
