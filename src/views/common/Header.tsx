import * as React from "react";
import {Link} from 'react-router-dom'
import {User} from "../../models/User";
import AuthDialog from "../homeViews/AuthDialog";
import config from '../../config';

interface Props{
    user?: User
    onLogin: (user: User) => void

    head?: string
    mainHeader?:boolean
    isAdmin?:boolean
    isDoctor?:boolean
    isPatient?:boolean
}
export default class Header extends React.Component<Props,any> {

    render(){
        const {onLogin , head , user ,  mainHeader , isAdmin, isDoctor, isPatient} = this.props;
        return(
            <div className="row">
                <div className="col-lg-12">
                    {isAdmin?<AdminHeader onLogin={onLogin} user={user}/> : null}
                    {isDoctor? <DoctorHeader onLogin={onLogin} user={user}/> : null }
                    {isPatient? <PatientHeader onLogin={onLogin} user={user}/> : null }
                    {mainHeader?<MainHeader onLogin={onLogin} user={user} head = {head}/> : null}
                </div>
            </div>
        )
    }
}

const MainHeader = (props:any) => {
    const {onLogin , user} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link to={`/`} className="navbar-brand">MedicalCards</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={config.links.DOCTORS}>
                                Наши специалисты
                            </Link>
                        </li>
                        <li className="nav-item">
                            <AuthDialog onLogin={onLogin}  user = {user}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

const AdminHeader = (props:any) => {
    const {onLogin , user} = props;
    function exit(){
        if (user) {
            localStorage.clear();
            user.isSignedIn = false;
            onLogin(user);
            location.href = config.FRONT_BASE_NAME
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand nav-link">MedicalCards</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item ">
                            <Link to={config.links.STAFF} className="nav-link">Персонал</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Пациенты
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={config.links.PATIENTS} className="dropdown-item">Текущие пациенты</Link>
                                <Link to={config.links.PATIENTS_CLAIM} className="dropdown-item">Заявки</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Архив
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={config.links.ARCHIVE_DOCTORS} className="dropdown-item">Персонал</Link>
                                <Link to={config.links.ARCHIVE_PATIENTS} className="dropdown-item">Пациенты</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button type="button" className='nav-link' onClick={() => exit()}>Выйти</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

const DoctorHeader = (props:any) => {
    const {onLogin , user} = props;
    function exit(){
        if (user) {
            localStorage.clear();
            user.isSignedIn = false;
            onLogin(user);
            location.href = config.FRONT_BASE_NAME
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand nav-link">MedicalCards</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item ">
                            <Link to={config.links.PROFILE} className="nav-link">Профиль</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={config.links.PATIENTS} className="nav-link">База</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Мои пациенты
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={config.links.APPOINTMENTS} className="dropdown-item">Записи</Link>
                                <Link to={config.links.MY_PATIENTS} className="dropdown-item">Текущие пациенты</Link>
                                <Link to={config.links.DOCTOR_CLAIMS_FROM_PATIENTS} className="dropdown-item">Заявки</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button type="button" className='nav-link' onClick={() => exit()}>Выйти</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

const PatientHeader = (props:any) => {
    const {onLogin , user} = props;
    function exit(){
        if (user) {
            localStorage.clear();
            user.isSignedIn = false;
            onLogin(user);
            location.href = config.FRONT_BASE_NAME
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand nav-link">MedicalCards</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item ">
                            <Link to={config.links.PATIENT_CARD} className="nav-link">Моя карточка</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={config.links.PATIENT_APPOINTMENTS} className="nav-link">Мои записи</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Специалисты
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={config.links.MY_DOCTORS} className="dropdown-item">Мои специалисты</Link>
                                <Link to={config.links.DOCTORS} className="dropdown-item">Все специалисты</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button type="button" className='nav-link' onClick={() => exit()}>Выйти</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};