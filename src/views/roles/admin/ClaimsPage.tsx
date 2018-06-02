import * as React from 'react';
import 'styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../common/Header";
import 'styles/Patients.css'
import {Patient} from "../../../models/Patient";
import config from "../../../config";
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
        fetch(config.urls.ADMIN_GET_ALL_CLAIMS, {
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
                <Header onLogin={onLogin} user = {user} isAdmin={true} />
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
    const {surname, name , patronymic , gender,  email , phoneNumber , address, birthday , password, id} = props.patient;
    const {refreshClaims} = props;
    function addPatient() {
        fetch(config.urls.ADMIN_ACCEPT_CLAIM, {
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
                    phoneNumber: phoneNumber,
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

    function declineClaim() {
        fetch(config.urls.ADMIN_CANCEL_CLAIM, {
            method: 'post',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                'Accept': 'application/json'
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshClaims)
            .catch((err: any) => {
                console.log(err)
            });
    }

    return (
        <tr>
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
                        onClick={()=>{addPatient()}}
                    >
                        Принять
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary claim-btn"
                        onClick={()=>{declineClaim()}}
                    >
                        Отклонить
                    </button>
                </div>
            </td>
        </tr>
    )
};
