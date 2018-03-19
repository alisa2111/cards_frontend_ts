import * as React from "react";
import {Link} from 'react-router-dom'
import AuthDialog from "./homeViws/AuthDialog";
import {User} from "../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
    head?: string
    search?:boolean
    mainHeader?:boolean
    isAdmin?:boolean
}
export default class Header extends React.Component<Props,any> {

    render(){
        const {onLogin , head , user , search , mainHeader , isAdmin} = this.props;
        return(
            <div className="row">
                <div className="col-lg-12">
                    {isAdmin?<AdminHeader onLogin={onLogin} user={user} search={search}/> : null}
                    {mainHeader?<MainHeader onLogin={onLogin} user={user} head = {head} search = {search}/> : null}
                </div>
            </div>

        )
    }
}
const Search = () => {
    return (
        <div>
            <div>
                <form className="form-inline">
                    <input className="form-control mr-lg-2 search" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
};
const MainHeader = (props:any) => {
    const {onLogin , user , head , search} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-width">
            <Link to={`/`} className="navbar-brand mb-0 h1">MedicalCards</Link>
            <div className="navbar-text">{head}</div>
            {search?<Search/>:null}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={`/Doctors`} className="nav-link border-right ">Наши специалисты</Link>
                </li>
                <li className="nav-item">
                    <AuthDialog onLogin={onLogin}  user = {user}/>
                </li>
            </ul>
        </nav>
    )
};
const AdminHeader = (props:any) => {
    const {onLogin , user , search} = props;

    function exit(){
        if (user) {
            user.isSignedIn = false;
            onLogin(user);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-width">
            <Link to={`/`} className="navbar-brand mb-0 h1">MedicalCards</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item " href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
            {search?<Search/>:null}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button type="button" className='btnSign' onClick={() => exit()}>Выйти</button>
                </li>
            </ul>
        </nav>
    )
};