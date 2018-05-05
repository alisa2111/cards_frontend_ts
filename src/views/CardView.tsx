import * as React from "react";

export const CardView = (props:any) => {
    const {lastname, firstname, secondname, specialty} = props.data;
    const {image, myDoctor, refreshDoctors} = props;

    return(
        //col-lg-4
        <div className="col-sm-4">
            <div className="card border border-dark" >
                {props.isAdmin? <AdminButtons doctor={props.data} refreshDoctors={refreshDoctors}/> : null}
                {props.isArchive? <ArchiveButtons/> : null}
                {props.isPatient? <PatientButtons myDoctor={myDoctor}/> : null}
                <img className="card-img-top border border-dark" src={image} alt='qwerty'/>
                <div className="card-body">
                    <p className="card-text">{lastname} {firstname} {secondname},<br/> {specialty}</p>
                </div>

            </div>
        </div>
    )
};

const AdminButtons = (props: any) => {
    const {id} = props.doctor;
    const {refreshDoctors} = props;

    function addToArchive() {
        fetch(`http://localhost:8080/api/patients/...`, {
            method: 'post',
            headers: {
                'Content-Type': `application/json`,
                'Accept': 'application/json'
            },
            body:
                JSON.stringify({
                    id: id
                })
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshDoctors)
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

const ArchiveButtons = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary btn-admin">Восстановить</button>
            <button type="button" className="btn btn-secondary btn-admin">Удалить</button>
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
