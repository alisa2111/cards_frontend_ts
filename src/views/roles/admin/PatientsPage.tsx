import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import PatientRegistration from "../../PatientRegistration";
import '../../../styles/Patients.css'
import {patients} from '../../../data/patients'
import {Patient} from "../../../models/Patient";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class PatientsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#patientModal">Зарегистрировать нового пациента</button>
                <PatientRegistration/>

                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
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
    const {surname, name , patronymic , email , phone , address} = props.patient;
    return (
        <tr>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
        </tr>

    )
};
