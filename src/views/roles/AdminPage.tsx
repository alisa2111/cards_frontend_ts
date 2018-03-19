import * as React from 'react';
import '../../styles/AdminPage.css'
import {User} from "../../models/User";
import Header from "../Header";
import DoctorsComponent from "../DoctorsComponent";
import DoctorRegistration from "../DoctorRegistration";
import PatientRegistration from "../PatientRegistration";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class AdminPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <div className="row">

                    <div className="col-2 menu">
                        <h1 className='header-menu'>Меню</h1>
                        <div className="list-group" id="myList" role="tablist">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#staff" role="tab">Персонал</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#patients" role="tab">Пациенты</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#archive-staff" role="tab">Архив персонала</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#archive-patients" role="tab">Архив пациентов</a>
                        </div>
                    </div>

                    <div className="col-10">
                        <div className="tab-content" >
                            <div className="tab-pane active " id="staff" role="tabpanel">
                                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#staffModal">Зарегистрировать нового сотрудника</button>
                                <DoctorRegistration/>
                                <DoctorsComponent isAdmin={true}/>
                            </div>

                            <div className="tab-pane" id="patients" role="tabpanel">
                                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#patientModal">Зарегистрировать нового пациента</button>
                                <PatientRegistration/>
                            </div>
                            <div className="tab-pane" id="archive-staff" role="tabpanel">Архив персонала</div>
                            <div className="tab-pane" id="archive-patients" role="tabpanel">Архив пациентов</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}