import * as React from 'react';
import {Patient} from "../../../models/Patient";
import Header from "../../common/Header";
import {User} from "../../../models/User";
import DoctorsComments from "../../common/DoctorsComments";
import ImageComponentWithUpload from "../../common/ImageComponentWithUpload";

interface Props {
    patient: Patient;
    onPatient: (patient: Patient) => void
    user: User
    onLogin: (user: User) => void
    isDoctor?: boolean;
    isPatient?: boolean;
    isAdmin?: boolean;
}

export default class PatientCard extends React.Component<Props, any> {

    componentWillUnmount(){
        localStorage.removeItem("patient");
    }

    render() {
        const {onLogin, user, patient, isPatient, isDoctor, isAdmin} = this.props;
        localStorage.setItem("patient", JSON.stringify(patient));
        return (
            <div className="container">
                {isAdmin ? <Header onLogin={onLogin} user={user} isAdmin={true}/> : null}
                {isDoctor ? <Header onLogin={onLogin} user={user} isDoctor={true}/> : null}
                {isPatient ? <Header onLogin={onLogin} user={user} isPatient={true}/> : null}
                <div className="row">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h1 className="panel-title">{patient.surname + " " + patient.name + " " + patient.patronymic}</h1>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                        <ImageComponentWithUpload
                                            accountId={String(patient.id)}
                                            isPatient={isPatient}
                                            isAdmin={isAdmin}
                                        />
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
                                            <td>{patient.phoneNumber}</td>
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
                    <DoctorsComments user={user} onLogin={onLogin} patientId={String(patient.id)} />
                </div>
            </div>
        )
    }
}