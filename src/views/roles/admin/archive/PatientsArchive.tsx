import {User} from "../../../../models/User";
import {Patient} from "../../../../models/Patient";
import Header from "../../../common/Header";
import * as React from "react";
import SearchComponent from "../../../common/SearchComponent";
import {Link} from "react-router-dom";
import config from "../../../../config";

interface Props{
    user: User
    onLogin: (user: User) => void
    onPatient: (patient: Patient) => void
}
export default class PatientsArchive extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patients:[]
        };
    }

    refreshPatientsArchive = (result: any) => {
        const patients = result.map((r: any) => new Patient(
            r.id,
            r.lastName,
            r.firstName,
            r.secondName,
            r.email,
            r.sex,
            r.password,
            r.address,
            r.phoneNumber,
            r.birthday));
        this.setState({patients})
    };


    componentWillMount(){
        fetch(config.urls.GET_ALL_PATIENTS_FROM_ARCHIVE, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshPatientsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            })
    }

    render(){
        const {onLogin , user, onPatient} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u} refreshPatientsArchive={this.refreshPatientsArchive} onPatient={onPatient}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true}/>
                <SearchComponent title="Поиск по имени, фамилии, отчеству и адресу"
                                 placeholder="Поиск по пациентам в архиве"
                                 refreshState={this.refreshPatientsArchive}
                                 isPatientArchive={true}
                />
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <td scope="col">Фото</td>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Пол</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Г.Р.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allPatientsView}
                    </tbody>
                </table>
            </div>
        )
    }
}
const PatientRow = (props: any) => {
    const {id, surname, name , patronymic , gender,  email , phoneNumber , address, birthday} = props.patient;
    const {refreshPatientsArchive, onPatient}=props;
    let requestForImage = config.urls.IMAGE + id;

    function restorePatient(){
        fetch(config.urls.RESTORE_PATIENTS_FROM_ARCHIVE, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshPatientsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    function deletePatient(){
        fetch(config.urls.DELETE_PATIENT_FROM_ARCHIVE, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshPatientsArchive)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    return (
        <tr>
            <td>
                <Link to={config.links.PATIENT_CARD}>
                    <img
                        onClick={() => {
                            const patient = new Patient(id,surname, name, patronymic, email, gender, "", address , phoneNumber, birthday);
                            onPatient(patient);
                        }}
                        className="border border-dark"
                        src={requestForImage}
                        alt='qwerty' height="125px" width="125px"
                    />
                </Link>
            </td>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{address}</td>
            <td>{birthday}</td>
            <td>
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-secondary claim-btn"
                        onClick={()=>{restorePatient()}}
                    >
                        Восстановить
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary claim-btn"
                        onClick={()=>{deletePatient()}}
                    >
                        Удалить
                    </button>
                </div>
            </td>
        </tr>
    )
};
