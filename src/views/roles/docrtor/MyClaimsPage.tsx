import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../common/Header";
import '../../../styles/Patients.css'
import {Patient} from "../../../models/Patient";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class MyClaimsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patients:[]
        };
    }

    refreshClaims = (result: any) => {
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
        const {id} = this.props.user;
        fetch(`http://localhost:8080/api/doctor/getAllPatientForAccept`, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
    }

    render(){
        const {onLogin , user} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isDoctor={true} />
                MY CLAIMS PAGE
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Фото</th>
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
    let requestForImage = "http://localhost:8080/api/image/" + id;
    return (
        <tr onClick={()=>{window.location.href = '/patientCard'}}>
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
        </tr>
    )
};
