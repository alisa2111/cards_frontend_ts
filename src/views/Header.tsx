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
    isDoctor?:boolean
    isPatient?:boolean
}
export default class Header extends React.Component<Props,any> {

    render(){
        const {onLogin , head , user , search , mainHeader , isAdmin, isDoctor, isPatient} = this.props;
        return(
            <div className="row">
                <div className="col-lg-12">
                    {isAdmin?<AdminHeader onLogin={onLogin} user={user} search={search}/> : null}
                    {isDoctor? <DoctorHeader onLogin={onLogin} user={user} search={search}/> : null }
                    {isPatient? <PatientHeader onLogin={onLogin} user={user} search={search}/> : null }
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
                    <button className="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Поиск</button>
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
            localStorage.removeItem("user");
            user.isSignedIn = false;
            onLogin(user);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-width">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">.</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to={`/staff`} className="nav-link">Персонал</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Пациенты
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={`/patients`} className="dropdown-item">Текущие пациенты</Link>
                            <Link to={`/patients/claim`} className="dropdown-item">Заявки</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Архив
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={`/archive/staff`} className="dropdown-item">Персонал</Link>
                            <Link to={`/archive/patients`} className="dropdown-item">Пациенты</Link>
                        </div>
                    </li>
                </ul>
            </div>

            {search?<Search/>:null}

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button type="button" className='btnLogOut' onClick={() => exit()}>Выйти</button>
                </li>
            </ul>

        </nav>
    )
};

const DoctorHeader = (props:any) => {
    const {onLogin , user , search} = props;
    function exit(){
        if (user) {
            localStorage.removeItem("user");
            user.isSignedIn = false;
            onLogin(user);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-width">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">.</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to={`/profile`} className="nav-link">Профиль</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={`/patients/base`} className="nav-link">База</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Мои пациенты
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={`/patients/my`} className="dropdown-item">Текущие пациенты</Link>
                            <Link to={`/patients/my/all`} className="dropdown-item">Все пациенты</Link>
                        </div>
                    </li>
                </ul>
            </div>

            {search?<Search/>:null}

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button type="button" className='btnLogOut' onClick={() => exit()}>Выйти</button>
                </li>
            </ul>

        </nav>
    )
};

const PatientHeader = (props:any) => {
    const {onLogin , user , search} = props;
    function exit(){
        if (user) {
            localStorage.removeItem("user");
            user.isSignedIn = false;
            onLogin(user);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-width">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">.</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to={`/PatientPage`} className="nav-link">Профиль</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={`/doctors/appointments`} className="nav-link">Мои записи</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Специалисты
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={`/doctors/my`} className="dropdown-item">Мои специалисты</Link>
                            <Link to={`/Doctors`} className="dropdown-item">Все специалисты</Link>
                        </div>
                    </li>
                </ul>
            </div>

            {search?<Search/>:null}

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button type="button" className='btnLogOut' onClick={() => exit()}>Выйти</button>
                </li>
            </ul>

        </nav>
    )
};