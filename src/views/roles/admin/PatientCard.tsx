import * as React from 'react';
import {Patient} from "../../../models/Patient";
import Header from "../../Header";
import {User} from "../../../models/User";
import {avatar} from "../../../data/doctor.js";
import DoctorsComments from "../../DoctorsComments";

interface Props {
    patient: Patient;
    onPatient: (patient: Patient) => void
    user: User
    onLogin: (user: User) => void
}

export default class PatientCard extends React.Component<Props, any> {

    render() {
        const {onLogin, user, patient} = this.props;
        return (
            <div className="container">
                <Header onLogin={onLogin} user={user} isAdmin={true} search={true}/>
                <div className="row">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h1 className="panel-title">{patient.surname + " " + patient.name + " " + patient.patronymic}</h1>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 ">
                                    <img alt="User Pic" src={avatar} className="img-circle  avatar"/></div>
                                <div className=" col-md-6 col-lg-6 ">
                                    <table className="table table-user-information">
                                        <tbody>
                                        <tr>
                                            <th>Пол:</th>
                                            <td>{patient.gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Дата рождения:</th>
                                            <td>{patient.birthday}</td>
                                        </tr>
                                        <tr>
                                            <th>Адрес:</th>
                                            <td>{patient.address}</td>
                                        </tr>
                                        <tr>
                                            <th>Номер телефона:</th>
                                            <td>{patient.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{patient.email}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DoctorsComments user={user} onLogin={onLogin}/>
                </div>
            </div>
        )
    }
}