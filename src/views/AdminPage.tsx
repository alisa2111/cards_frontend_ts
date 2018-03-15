import * as React from 'react';
import '../styles/AdminPage.css'
import {Link} from "react-router-dom";
import {User} from "../models/User";
import Header from "./Header";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class AdminPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} links_after_auth={true}/>
                <h1>AdminPage!</h1>
                <Link to={`/Admin/AdminTest`} className="nav-link border-right ">AdminTest</Link>
                <Link to={`/Admin/TestAdmin`} className="nav-link border-right ">TestAdmin</Link>
            </div>
        )
    }
}