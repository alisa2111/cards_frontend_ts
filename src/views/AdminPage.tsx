import * as React from 'react';
import '../styles/AdminPage.css'
import {Link} from "react-router-dom";
export default class Admin extends React.Component<any,any> {

    render(){
        return(
            <div className="container-fluid">
                <h1>AdminPage!</h1>
                <Link to={`/Admin/AdminTest`} className="nav-link border-right ">AdminTest</Link>
                <Link to={`/Admin/TestAdmin`} className="nav-link border-right ">TestAdmin</Link>
            </div>
        )
    }
}