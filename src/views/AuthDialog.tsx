import * as React from "react";
import '../styles/HomePage.css'
import '../styles/AuthDialog.css'
import {User} from "../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AuthDialog extends React.Component<Props,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            role:''
        };
    }

    setEmail(e: any) {
        this.setState({
            email: e.target.value
        })
    }

    login() {
        const {onLogin } = this.props;
        let {email} = this.state;
        const user = new User(email, 'Admin');
        user.isSignedIn = true;
        onLogin(user);
    }

    render(){
        return(
            <div>
                <button type="button" className='btnSign' data-toggle="modal" data-target="#exampleModalCenter"> Войти</button>
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
                                    <input type="text" placeholder="username" onKeyUp={(e) => this.setEmail(e)}/>
                                    <input type="password" placeholder="password"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary " data-dismiss="modal">Закрыть</button>
                                <button type="button" className="btn btn-primary " onClick={()=>this.login()}>Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}