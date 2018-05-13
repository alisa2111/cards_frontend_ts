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
export default class MyPatientsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patients:[]
        };
    }

    refreshPatients = (result: any) => {
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
        fetch(`http://localhost:8080/api/patients/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshPatients)
            .catch((err: any) => {
                console.log(err)
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
    const {surname, name , patronymic , gender,  email , phone , address, birthday} = props.patient;
    return (
        <tr onClick={()=>{window.location.href = '/patientCard'}}>
            <td>{surname}</td>
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
