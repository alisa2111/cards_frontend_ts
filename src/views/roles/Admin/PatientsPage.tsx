import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import PatientRegistration from "../../PatientRegistration";

interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class PatientsPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#patientModal">Зарегистрировать нового пациента</button>
                <PatientRegistration/>
            </div>
        )
    }
}