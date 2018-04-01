import * as React from "react";
import '../../styles/Registration.css'
export default class Registration extends React.Component<any,any> {
    render() {
        return (
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Регистрация</h5>
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
                                    <input type="text" className="form-control" placeholder="Email" id="e-mail"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" >Пол</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option value="1">Женский</option>
                                        <option value="2">Мужской</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="password" className="form-control"  id="pas" placeholder="Пароль"/>
                                        <input type="password" className="form-control"  id="r_pas" placeholder="Повторите пароль"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="address" placeholder="Адрес"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" id="phone" placeholder="Номер телефона"/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Год рождения</label>
                                    <input type="date" className="form-control" id="year"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
