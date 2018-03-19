import * as React from "react";
import '../styles/Registration.css'
export default class PatientRegistration extends React.Component<any,any> {
    render() {
        return (
            <div className="modal fade" id="patientModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Регистрация пациента</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Фамилия"/>
                                        <input type="text" className="form-control" placeholder="Имя"/>
                                        <input type="text" className="form-control" placeholder="Отчество"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">E-mail</label>
                                    <input type="text" className="form-control" id="e-mail"/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Пароль</label>
                                    <input type="password" className="form-control" id="pas"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary">Зарегистрировать</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
