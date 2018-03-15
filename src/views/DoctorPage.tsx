import * as React from 'react';
import '../styles/AdminPage.css'
import {Link} from "react-router-dom";
import Header from "./Header";
import {User} from "../models/User";
interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class Doctor extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} links_after_auth={true}/>
                <h1>DoctorPage!</h1>
                <Link to={`/Doctor/DoctorTest`} className="nav-link border-right ">DoctorTest</Link>
                <Link to={`/Doctor/TestDoctor`} className="nav-link border-right ">TestDoctor</Link>
            </div>
        )
    }
}