import * as React from "react";

export const CardView = (props:any) => {
    const {lastname, firstname, secondname, specialty, id} = props.data;
    const {myDoctor, refreshDoctorsArchive} = props;
    let requestForImage = "http://localhost:8080/api/image/" + id;
    return(
        //col-lg-4
        <div className="col-sm-4">
            <div className="card border border-dark" >
                {props.isAdmin? <AdminButtons doctor={props.data} refreshDoctorsArchive={refreshDoctorsArchive}/> : null}
                {props.isArchive? <ArchiveButtons doctor={props.data} refreshDoctorsArchive={refreshDoctorsArchive}/> : null}
                {props.isPatient? <PatientButtons myDoctor={myDoctor}/> : null}
                <img className="card-img-top border border-dark" src={requestForImage} alt='qwerty'/>
                <div className="card-body">
                    <p className="card-text">{lastname} {firstname} {secondname},<br/> {specialty}</p>
                </div>

            </div>
        </div>
    )
};

const AdminButtons = (props: any) => {
    const {id} = props.doctor;
    const {refreshDoctorsArchive} = props;

    function addToArchive() {
        fetch(`http://localhost:8080/api/archive/doctors/add`, {
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
                console.log(err)
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
            <button type="button" className="btn btn-secondary btn-admin">Редактировать</button>
        </div>
    )
};

const ArchiveButtons = (props: any) => {
    const {id} = props.doctor;
    const {refreshDoctorsArchive} = props;

    function restoreDoctor(){
        fetch(`http://localhost:8080/api/archive/doctors/restore`, {
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
                console.log(err)
            });
    }

    function deleteDoctor(){
        fetch(`http://localhost:8080/api/archive/doctors/delete`, {
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
                console.log(err)
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
    const {myDoctor} = props;
    return (
        myDoctor?
            <button type="button" className="btn btn-default">Записаться</button>:
            <button type="button" className="btn btn-default">Добавить</button>
    )
};
