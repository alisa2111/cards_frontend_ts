import * as React from "react";
import '../styles/Registration.css'
import {Doctor} from "../models/Doctor";
export default class DoctorRegistration extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            surname: '',
            name:'',
            patronymic:'',
            email:'',
            password:'',
            department:'',
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
        const {surname, name, patronymic, email, password, department, practise_date , specialty} = this.state;
        let doctor = new Doctor(surname, name , patronymic, email, password, department, specialty ,  practise_date);
        console.log(doctor)
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
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Отдел"
                                        id="department"
                                        onKeyUp={(e) => this.setDepartment(e)}/>
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
                                <div className="form-group">
                                    <label  className="col-form-label">DOWNLOAD PHOTO</label>
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
