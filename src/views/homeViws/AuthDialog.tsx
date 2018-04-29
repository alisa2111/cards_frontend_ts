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

    componentWillMount(){
       const storageString = window.localStorage.getItem('user');
       console.log(storageString);
       if(storageString != null){
            const {email , role } = JSON.parse(storageString);
            const user = new User(email , role);
            user.isSignedIn = true;
            this.props.onLogin(user);
       }
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
      const {email , password} = this.state;

        // const user = new User("alisa", 'ADMIN');
        // user.isSignedIn = true;
        // this.props.onLogin(user);

        // fetch is working
        fetch(`http://localhost:8080/api/authorization`, {
            method: 'post',
            headers: {
                'Content-Type': `application/json`,
                'Accept': 'application/json'
            },
            body:
               JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res: any) => {
                return res.json();
            })
            .then((result:any) => {

                const user = new User(result.email, result.role);
                user.isSignedIn = true;
                let obj = JSON.stringify(user);
                localStorage.setItem("user", obj);

                this.props.onLogin(user);

            })
            .catch((err: any) => {
                console.log(err)
            });
    }
    render(){
        return(
            <div>
                <button className='nav-link' data-toggle="modal" data-target="#exampleModalCenter"> Войти</button>
                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Авторизация</h5>
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