import * as React from "react";
import '../styles/HomePage.css'
import '../styles/AuthDialog.css'
export default class AuthDialog extends React.Component<any,any> {
    render(){
        return(
            <div>
                <button type="button" className='btnSignIn' data-toggle="modal" data-target="#exampleModalCenter"> Войти</button>
                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Авторизация</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="login-page">
                                    <input type="text" placeholder="username"/>
                                    <input type="password" placeholder="password"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary " data-dismiss="modal">Закрыть</button>
                                <button type="button" className="btn btn-primary ">Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}