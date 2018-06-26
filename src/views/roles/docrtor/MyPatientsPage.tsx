import * as React from 'react';
import 'styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../common/Header";
import 'styles/Patients.css'
import {Patient} from "../../../models/Patient";
import {Link} from "react-router-dom";
import config from "../../../config";
interface Props{
    user: User
    onLogin: (user: User) => void
    onPatient: (patient: Patient) => void
}
export default class MyPatientsPage extends React.Component<Props,any> {
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
        const {id} = this.props.user;
        fetch(config.urls.DOCTOR_GET_ALL_PATIENTS, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then((result:any)=>{
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
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

    render(){
        const {onLogin , user, onPatient} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u} onPatient={onPatient}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isDoctor={true} />
                <div className="center name-of-page"><h2>Текущие пациенты</h2></div>
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
                        <th scope="col">Г.Р.</th>
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
    const {id, surname, name , patronymic , gender,  email , phoneNumber , address, birthday} = props.patient;
    const {onPatient} = props;
    let requestForImage = config.urls.IMAGE + id;
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
        </tr>
    )
};
