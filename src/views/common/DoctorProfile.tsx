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
    self?: boolean;
}

export default class DoctorProfile extends React.Component<Props, any> {

    componentWillUnmount(){
        localStorage.removeItem("doctor");
    }

    render() {
        const {onLogin, user, isPatient, isDoctor, isAdmin, self} = this.props;
        let doctor = this.props.doctor;
        if (self) {
            let docStr = localStorage.getItem("signedInDoc");
            if (docStr != null) {
                doctor = JSON.parse(docStr)
            }
        }
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
                                    self={self}
                                />
                                <div className=" col-md-6 col-lg-6 ">
                                    <table className="table table-user-information">
                                        <tbody>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{doctor.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Отдел:</th>
                                            <td>{doctor.department}</td>
                                        </tr>
                                        <tr>
                                            <th>Специализация:</th>
                                            <td>{doctor.specialty}</td>
                                        </tr>
                                        <tr>
                                            <th>Практикует с:</th>
                                            <td>{doctor.practise_date}</td>
                                        </tr>
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