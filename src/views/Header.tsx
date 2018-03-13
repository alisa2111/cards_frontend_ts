import * as React from "react";
import {Link} from 'react-router-dom'
import AuthDialog from "./AuthDialog";
export default class Header extends React.Component<any,any> {
    search(flag:string) {
        if(flag==='true')
            return (
                <div>
                    <form className="form-inline">
                        <input className="form-control mr-lg-2 search" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
                    </form>
                </div>
            );
        else
            return null
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-dark nav-width">
                        <Link to={`/`} className="navbar-brand mb-0 h1">MedicalCards</Link>
                        <div className="navbar-text">{this.props.head}</div>
                        {this.search(this.props.flag)}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={`/Doctors`} className="nav-link border-right ">Наши специалисты</Link>
                            </li>
                            <li className="nav-item">
                                <AuthDialog/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        )
    }
}