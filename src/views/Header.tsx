import * as React from "react";
import {Link} from 'react-router-dom'
import AuthDialog from "./homeViws/AuthDialog";
import {User} from "../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
    head?: string
    search?:boolean
    links_before_auth?:boolean
    links_after_auth?:boolean
}
export default class Header extends React.Component<Props,any> {

    render(){
        const {onLogin , head , user , search , links_after_auth , links_before_auth} = this.props;
        return(
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-dark nav-width">
                        <Link to={`/`} className="navbar-brand mb-0 h1">MedicalCards</Link>
                        <div className="navbar-text">{head}</div>
                        {search?<Search/>:null}
                        {links_before_auth? <LinksBefore onLogin = {onLogin} user = {user}/>:null}
                        {links_after_auth? <LinksAfter onLogin = {onLogin} user = {user}/>:null}
                    </nav>
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

const LinksBefore = (props:any) => {
    const {onLogin , user} = props;
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to={`/Doctors`} className="nav-link border-right ">Наши специалисты</Link>
            </li>
            <li className="nav-item">
                <AuthDialog onLogin={onLogin}  user = {user}/>
            </li>
        </ul>
    )
};

const LinksAfter = (props:any) => {
    const {onLogin , user} = props;
    function exit(){
        if (user) {
            user.isSignedIn = false;
            onLogin(user);
        }
    }
    return (
        <ul className="navbar-nav ml-auto">
            <li>
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle btnSign" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Регистрация
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Персонал</a>
                        <a className="dropdown-item" href="#">Пользователь</a>
                    </div>
                </div>

            </li>
            <li className="nav-item">
                <button type="button" className='btnSign' onClick={() => exit()}>Выйти</button>
            </li>
        </ul>
    )
};