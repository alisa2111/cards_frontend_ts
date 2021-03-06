import * as React from "react";
import {Link} from "react-router-dom";
import {Doctor} from "../../models/Doctor";
import AppointmentView from "../roles/patient/AppointmentView";
import config from "../../config";

export const CardView = (props:any) => {
    const {surname, name, patronymic, specialty, id, email, department, practise_date} = props.data;
    const {myDoctor, onDoctor, refreshDoctors} = props;
    let requestForImage = config.urls.IMAGE + id;
    return(
        //col-lg-4
        <div className="col-sm-4">
            <div className="card border border-dark" >
                {props.isAdmin? <AdminButtons doctor={props.data} refreshDoctorsArchive={refreshDoctors}/> : null}
                {props.isArchive? <ArchiveButtons doctor={props.data} refreshDoctorsArchive={refreshDoctors}/> : null}
                {props.isPatient? <PatientButtons myDoctor={myDoctor} doctorId={id} refreshDoctors={refreshDoctors}/> : null}
                {localStorage.getItem("user") === null ?
                    <img
                        className="card-img-top border border-dark"
                        src={requestForImage}
                        alt='qwerty'/> :

                    <Link to={'/profile'}>
                        <img
                            onClick={() => {
                                const doctor = new Doctor(id,name, surname, patronymic, email, "", department, specialty , practise_date);
                                onDoctor(doctor);
                            }}
                            className="card-img-top border border-dark"
                            src={requestForImage}
                            alt='qwerty'/>
                    </Link>
                }

                <div className="card-body">
                    <p className="card-text">{surname} {name} {patronymic},<br/> {specialty}</p>
                </div>

            </div>
        </div>
    )
};

const AdminButtons = (props: any) => {
    const {id} = props.doctor;
    const {refreshDoctorsArchive} = props;

    function addToArchive() {
        fetch(config.urls.MOVE_DOCTOR_TO_ARCHIVE, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshDoctorsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button"
                className="btn btn-secondary btn-admin"
                onClick={()=>{addToArchive()}}
            >
                В архив
            </button>
        </div>
    )
};

const ArchiveButtons = (props: any) => {
    const {id} = props.doctor;
    const {refreshDoctorsArchive} = props;

    function restoreDoctor(){
        fetch(config.urls.RESTORE_DOCTOR_FROM_ARCHIVE, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshDoctorsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    function deleteDoctor(){
        fetch(config.urls.DELETE_DOCTOR_FROM_ARCHIVE, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshDoctorsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button"
                className="btn btn-secondary btn-admin"
                onClick={()=>{restoreDoctor()}}
            >Восстановить</button>
            <button
                type="button"
                className="btn btn-secondary btn-admin"
                onClick={()=>{deleteDoctor()}}
            >Удалить</button>
        </div>
    )
};

const PatientButtons = (props:any) => {
    const {myDoctor, doctorId, refreshDoctors} = props;
    let patientStr = localStorage.getItem("signedInPatient");
    let patientId = -1;
    if (patientStr != null) {
        patientId = JSON.parse(patientStr).id;
    }

    function addDoctor() {
        fetch(config.urls.PATIENT_ADD_DOCTOR, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "patientId=" + patientId + "&doctorId=" + doctorId
        })
            .then((res: any) => {
                return res.json();
            })
            .then((res: any) => {
                if (res.status === "Success") {
                    alert("Вы отправили заявку.")
                } else {
                    alert("Извините, что-то пошло не так. Попробуйте позже.")
                }
            })
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    function deleteDoctor() {
        fetch(config.urls.PATIENT_DELETE_DOCTOR, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "patientId=" + patientId + "&doctorId=" + doctorId
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshDoctors)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    return (
        myDoctor?
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary btn-width-50percent"
                    data-toggle="modal"
                    data-target={`#${doctorId}`}
                    data-whatever="@mdo"
                >
                    Записаться
                </button>
                <AppointmentView doctorId={doctorId} patientId={patientId}/>
                <button
                    type="button"
                    className="btn btn-danger btn-width-50percent"
                    onClick={() => {
                            deleteDoctor()
                        }}
                >Отказаться
                </button>
            </div> :
            <button type="button"
                    className="btn btn-default"
                    onClick={() => {
                        addDoctor()
                    }}
            >Добавить</button>
    )
};
