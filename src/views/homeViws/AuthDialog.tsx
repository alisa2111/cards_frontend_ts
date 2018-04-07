import * as React from "react";
import '../../styles/HomePage.css'
import '../../styles/AuthDialog.css'
import {User} from "../../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AuthDialog extends React.Component<Props,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            password:'',
            role:''
        };
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

    login() {
        const {email} = this.state;
        const user = new User(email, 'admin');
        user.isSignedIn = true;
        this.props.onLogin(user);
        // fetch is working
        // fetch(`http://localhost:8080/MedicalCardsServer/api/hello?login=${email}&password=${password}`, {
        //     method: 'post',
        // })
        //     .then((res: any) => {
        //         return res.json();
        //     })
        //     .then((result:any) => {
        //         const user = new User(result.email, result.role);
        //         user.isSignedIn = true;
        //         this.props.onLogin(user);
        //
        //     })
        //     .catch((err: any) => {
        //         console.log(err)
        //     });
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
                                    <input type="text" placeholder="E-mail" onKeyUp={(e) => this.setEmail(e)}/>
                                    <input type="password" placeholder="Password" onKeyUp={(e) => this.setPassword(e)}/>
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