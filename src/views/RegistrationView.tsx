import * as React from "react";
import '../styles/Registration.css'
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
                                    <label  className="col-form-label">E-mail</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="e-mail"/>
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option value="1">@gmail.com</option>
                                                <option value="2">@mail.ru</option>
                                                <option value="3">@bk.ru</option>
                                            </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Пароль</label>
                                    <input type="password" className="form-control" id="pas"/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Повторите пароль</label>
                                    <input type="password" className="form-control" id="pas"/>
                                </div>
                                <div className="form-group">
                                    <label  className="col-form-label">Адрес</label>
                                    <input type="text" className="form-control" id="address"/>
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
