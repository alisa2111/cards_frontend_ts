import * as React from 'react';
import '../styles/AdminPage.css'
import {Link} from "react-router-dom";
import {User} from "../models/User";
import Header from "./Header";
interface Props{
    onLogin: (user: User) => void
}
export default class AdminPage extends React.Component<Props,any> {

    render(){
        const {onLogin} = this.props;
        return(
            <div className="container-fluid">
                <h1>AdminPage!</h1>
                <Header onLogin={onLogin} search_flag={false} links_before_auth={false} links_after_auth={true}/>
                <Link to={`/Admin/AdminTest`} className="nav-link border-right ">AdminTest</Link>
                <Link to={`/Admin/TestAdmin`} className="nav-link border-right ">TestAdmin</Link>
            </div>
        )
    }
}