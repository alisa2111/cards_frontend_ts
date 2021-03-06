import * as React from "react";
import 'styles/Registration.css'
import config from "../../../config";
export default class DoctorRegistration extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            surname: '',
            name:'',
            patronymic:'',
            email:'',
            password:'',
            department:'Эндокринология',
            specialty:'',
            practise_date:''
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

    setPassword(e: any) {
        this.setState({
            password: e.target.value
        })
    }

    setDepartment(e: any) {
        this.setState({
            department: e.target.value
        })
    }

    setSpecialty(e: any) {
        this.setState({
            specialty: e.target.value
        })
    }

    setPractiseDate(e: any) {
        this.setState({
            practise_date: e.target.value
        })
    }

        addDoctor() {
            const {surname, name, patronymic, email, password, department , specialty, practise_date} = this.state;
            let practise_date_ =  practise_date.replace('-','.');
            practise_date_ =  practise_date_.replace('-','.');
              fetch(config.urls.ADMIN_REGISTR_NEW_DOCTOR, {
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
                department: department,
                firstPractiseDate: practise_date_,
                specialty: specialty
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
            <div className="modal fade" id="staffModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Регистрация персонала</h5>
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
                                        placeholder="E-mail"
                                        id="e-mail"
                                        onKeyUp={(e) => this.setEmail(e)}/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Пароль"
                                        id="pas"
                                        onKeyUp={(e) => this.setPassword(e)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" >Отдел</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => this.setDepartment(e)}>
                                        <option value="Эндокринология">Эндокринология</option>
                                        <option value="Хирургия">Хирургия</option>
                                        <option value="Дерматология">Дерматология</option>
                                        <option value="Онкодерматология">Онкодерматология</option>
                                        <option value="УЗИ-диагностика">УЗИ-диагностика</option>
                                        <option value="Педиатрия">Педиатрия</option>
                                        <option value="Кардиология">Кардиология</option>
                                        <option value="Оториноларингология">Оториноларингология</option>
                                        <option value="Неврология">Неврология</option>
                                        <option value="Стоматология">Стоматология</option>
                                        <option value="Психотерапия">Психотерапия</option>
                                        <option value="Аллергология">Аллергология</option>
                                        <option value="Терапия">Терапия</option>
                                        <option value="Лабораторная диагностика">Лабораторная диагностика</option>
                                        <option value="Функциональная диагностика">Функциональная диагностика</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Специализация"
                                        id="specialty"
                                        onKeyUp={(e) => this.setSpecialty(e)}/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Врачебная практика с</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="year"
                                        onKeyUp={(e) => this.setPractiseDate(e)}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.addDoctor()}>
                                Зарегистрировать</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
