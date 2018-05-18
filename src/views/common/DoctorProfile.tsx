import * as React from 'react';
import {Doctor} from "../../models/Doctor";
import {User} from "../../models/User";
import Header from "./Header";
import ImageComponentWithUpload from "./ImageComponentWithUpload";

interface Props {
    doctor: Doctor;
    onDoctor: (doctor: Doctor) => void
    user: User
    onLogin: (user: User) => void
    isDoctor?: boolean;
    isPatient?: boolean;
    isAdmin?: boolean;
}

export default class DoctorProfile extends React.Component<Props, any> {

    componentWillUnmount(){
        localStorage.removeItem("patient");
    }

    render() {
        const {onLogin, user, doctor, isPatient, isDoctor, isAdmin} = this.props;
        console.log(doctor)
        localStorage.setItem("doctor", JSON.stringify(doctor));
        return (
            <div className="container">
                {isAdmin ? <Header onLogin={onLogin} user={user} isAdmin={true}/> : null}
                {isDoctor ? <Header onLogin={onLogin} user={user} isDoctor={true}/> : null}
                {isPatient ? <Header onLogin={onLogin} user={user} isPatient={true}/> : null}
                <div className="row">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h1 className="panel-title">{doctor.surname + " " + doctor.name + " " + doctor.patronymic}</h1>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <ImageComponentWithUpload
                                    accountId={String(doctor.id)}
                                    isPatient={isPatient}
                                    isAdmin={isAdmin}
                                    isDoctor={isDoctor}
                                />
                                <div className=" col-md-6 col-lg-6 ">
                                    <table className="table table-user-information">
                                        <tbody>
                                        {/*<tr>*/}
                                            {/*<th>Пол:</th>*/}
                                            {/*<td>{patient.gender}</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<th>Дата рождения:</th>*/}
                                            {/*<td>{patient.birthday}</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<th>Адрес:</th>*/}
                                            {/*<td>{patient.address}</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<th>Номер телефона:</th>*/}
                                            {/*<td>{patient.phoneNumber}</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                            {/*<th>Email:</th>*/}
                                            {/*<td>{patient.email}</td>*/}
                                        {/*</tr>*/}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}