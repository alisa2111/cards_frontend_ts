import * as React from 'react';
import '../styles/AdminPage.css'
import {Link} from "react-router-dom";
export default class Doctor extends React.Component<any,any> {
    render(){
        return(
            <div className="container-fluid">
                <h1>DoctorPage!</h1>
                <Link to={`/Doctor/DoctorTest`} className="nav-link border-right ">DoctorTest</Link>
                <Link to={`/Doctor/TestDoctor`} className="nav-link border-right ">TestDoctor</Link>
            </div>
        )
    }
}