import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import '../../../styles/Patients.css'
import {claims} from '../../../data/patients'
import {Patient} from "../../../models/Patient";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class ClaimsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        const allPatientsView =  claims.map((u: Patient) =>
            <PatientRow patient={u}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Пол</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Год рождения</th>
                        <th scope="col">Ответ</th>
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
    const {surname, name , patronymic , gender,  email , phone , address, birthday} = props.patient;
    return (
        <tr>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{birthday}</td>
            <td>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary claim-btn">Принять</button>
                    <button type="button" className="btn btn-secondary claim-btn">Отклонить</button>
                </div>
            </td>
        </tr>
    )
};
