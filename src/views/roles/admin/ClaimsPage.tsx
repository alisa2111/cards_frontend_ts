import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import '../../../styles/Patients.css'
import {Patient} from "../../../models/Patient";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class ClaimsPage extends React.Component<Props,any> {
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
        r.sex,
        r.email,
        r.password,
        r.address,
        r.phoneNumber,
        r.birthday));
    this.setState({patients})
};

    componentWillMount(){
        fetch(`http://localhost:8080/api/patients/claim/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshClaims)
            .catch((err: any) => {
            console.log(err)
        })
    }

    render(){
        const {onLogin , user} = this.props;
        const {patients} = this.state;
        const allPatientsView =  patients.map((u: Patient) =>
            <PatientRow patient={u} refreshClaims={this.refreshClaims}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Пол</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Год рождения</th>
                        <th scope="col">Ответ</th>
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
    const {surname, name , patronymic , gender,  email , phone , address, birthday , password, id} = props.patient;
    const {refreshClaims} = props;
    function addPatient() {
        fetch(`http://localhost:8080/api/patients/add`, {
            method: 'post',
            headers: {
                'Content-Type': `application/json`,
                'Accept': 'application/json'
            },
            body:
                JSON.stringify({
                    lastName: surname,
                    secondName: patronymic,
                    firstName: name,
                    email: email,
                    password: password,
                    sex: gender,
                    birthday: birthday,
                    phoneNumber: phone,
                    address: address,
                    id: id
                })
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshClaims)
            .catch((err: any) => {
                console.log(err)
            });
    }

    function deletePatient() {
        let patient = new Patient(id, surname, name , patronymic, gender,  email , phone , address, "123",  birthday);
        console.log(patient)
        // fetch(`http://localhost:8080/MedicalCardsServer/api/...`, {
        //     method: 'post',
        // })
        //     .then((res: any) => {
        //         return res.json();
        //     })
        //     .catch((err: any) => {
        //         console.log(err)
        //     });
    }

    return (
        <tr>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{patronymic}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{birthday}</td>
            <td>
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-secondary claim-btn"
                        onClick={()=>{addPatient()}}
                    >
                        Принять
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary claim-btn"
                        onClick={()=>{deletePatient()}}
                    >
                        Отклонить
                    </button>
                </div>
            </td>
        </tr>
    )
};
