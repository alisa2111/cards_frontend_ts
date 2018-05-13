import {User} from "../../../../models/User";
import {Patient} from "../../../../models/Patient";
import Header from "../../../Header";
import * as React from "react";
import SearchComponent from "../../../SearchComponent";

interface Props{
    user: User
    onLogin: (user: User) => void
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
        fetch(`http://localhost:8080/api/archive/patients/all`, {
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
                console.log(err)
            })
    }

    render(){
        const {onLogin , user} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u} refreshPatientsArchive={this.refreshPatientsArchive}/>
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
    const {id, surname, name , patronymic , gender,  email , phone , address, birthday} = props.patient;
    const {refreshPatientsArchive}=props;
    let requestForImage = "http://localhost:8080/api/image/" + id;

    function restorePatient(){
        fetch(`http://localhost:8080/api/archive/patients/restore`, {
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
                console.log(err)
            });
    }

    function deletePatient(){
        fetch(`http://localhost:8080/api/archive/patients/delete`, {
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
                console.log(err)
            });
    }

    return (
        <tr>
            <td>
                <img onClick={()=>{window.location.href = '/patientCard'}}
                 className="border border-dark" src={requestForImage}
                 alt='qwerty' height="125px" width="125px"/>
            </td>
            <td onClick={()=>{window.location.href = '/patientCard'}}>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phone}</td>
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
