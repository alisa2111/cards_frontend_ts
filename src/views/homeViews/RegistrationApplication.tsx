import * as React from "react";
import 'styles/Registration.css'
import config from "../../config";
export default class Registration extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            surname: '',
            name:'',
            patronymic:'',
            email:'',
            gender:'Женский',
            password:'',
            address:'',
            phoneNumber:'',
            birthday:''
        };
    }

    setSurname(e: any) {
        this.setState({
            surname: e.target.value
        })
    }

    setName(e: any) {
        this.setState({
            name: e.target.value
        })
    }

    setPatronymic(e: any) {
        this.setState({
            patronymic: e.target.value
        })
    }

    setEmail(e: any) {
        this.setState({
            email: e.target.value
        })
    }

    setGender(e: any) {
        this.setState({
            gender: e.target.value
        })
    }

    setPassword(e: any) {
        this.setState({
            password: e.target.value
        })
    }

    setAddress(e: any) {
        this.setState({
            address: e.target.value
        })
    }

    setPhoneNumber(e: any) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    setBirthday(e: any) {
        this.setState({
            birthday: e.target.value
        })
    }

    sendClaim() {
        const {surname, name, patronymic, email, gender, password, address, phoneNumber, birthday} = this.state;
        let birthday_ =  birthday.replace('-','.');
        birthday_ =  birthday_.replace('-','.');
        fetch(config.urls.PATIENT_REGISTRATION, {
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
                    sex: gender,
                    password: password,
                    address: address,
                    phoneNumber: phoneNumber,
                    birthday: birthday_
                })
        })
            .then((res: any) => {
                location.reload();
            })
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            });
    }

    render() {
        return (
            <div className="modal fade" id="modal-claim" role="dialog" aria-labelledby="modal-claimLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-claimLabel">Регистрация</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Фамилия"
                                            onKeyUp={(e) => this.setSurname(e)}/>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Имя"
                                            onKeyUp={(e) => this.setName(e)}/>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Отчество"
                                            onKeyUp={(e) => this.setPatronymic(e)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email" id="e-mail"
                                        onKeyUp={(e) => this.setEmail(e)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" >Пол</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01" onChange={(e)=>{this.setGender(e)}}>
                                        <option value="Женский">Женский</option>
                                        <option value="Мужской">Мужской</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="pas" placeholder="Пароль"
                                            onKeyUp={(e) => this.setPassword(e)}/>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="r_pas"
                                            placeholder="Повторите пароль"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address" placeholder="Адрес"
                                        onKeyUp={(e) => this.setAddress(e)}/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Номер телефона"
                                        onKeyUp={(e) => this.setPhoneNumber(e)}/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Год рождения</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="year" onKeyUp={(e) => this.setBirthday(e)}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                id="btn-close-claim"
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Закрыть
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => this.sendClaim()}
                            >
                                Отправить </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
