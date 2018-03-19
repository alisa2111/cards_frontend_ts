import * as React from 'react';
import '../../../styles/AdminPage.css'
import {User} from "../../../models/User";
import Header from "../../Header";
import PatientRegistration from "../../PatientRegistration";
import '../../../styles/Patients.css'

interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class PatientsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <button type="button" className="btnSignUp" data-toggle="modal" data-target="#patientModal">Зарегистрировать нового пациента</button>
                <PatientRegistration/>

                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Адрес</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th scope="row">1</th>
                            <td>Почтовая</td>
                            <td>Алиса</td>
                            <td>Геннадьевна</td>
                            <td>qwerty@mail.ru</td>
                            <td>+375298546719</td>
                            <td>авнцйгвайцвцй 54</td>
                        </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Чегаев</td>
                        <td>Сергей</td>
                        <td>Васильевич</td>
                        <td>ytrewq@mail.ru</td>
                        <td>+375298546719</td>
                        <td>оргууу 55</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Лепешко</td>
                        <td>Александр</td>
                        <td>Ктотович</td>
                        <td>jrhgw@mail.ru</td>
                        <td>+375298546719</td>
                        <td>шщцп 64</td>
                    </tr>
                    </tbody>
                </table>



            </div>
        )
    }
}