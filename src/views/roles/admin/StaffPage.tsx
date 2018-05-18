import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import DoctorRegistration from "./DoctorRegistration";
import Header from "../../common/Header";
import DoctorsComponent from "../../common/DoctorsComponent";
import {Doctor} from "../../../models/Doctor";

interface Props{
    user: User
    onLogin: (user: User) => void
    onDoctor: (doctor: Doctor) => void
}
export default class StaffPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user, onDoctor} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} />
                <button
                    type="button"
                    className="btnSignUp margin-left-35percent"
                    data-toggle="modal"
                    data-target="#staffModal"
                >
                    Зарегистрировать нового сотрудника
                </button>
                <DoctorRegistration/>
                <DoctorsComponent isAdmin={true} onDoctor={onDoctor}/>
            </div>
        )
    }
}