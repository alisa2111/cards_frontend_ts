import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import DoctorRegistration from "./DoctorRegistration";
import Header from "../../Header";
import DoctorsComponent from "../../DoctorsComponent";

interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class StaffPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} />
                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#staffModal">Зарегистрировать нового сотрудника</button>
                <DoctorRegistration/>
                <DoctorsComponent isAdmin={true}/>
            </div>
        )
    }
}