import * as React from 'react';
import HomePage from '../views/HomePage';
import DoctorsPage from '../views/Doctors/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {User} from "../models/User";
import Doctor from "../views/DoctorPage";
import Patient from "../views/PatientPage";
import Admin from "../views/AdminPage";
import AdminTest from "../views/testViews/AdminTest";
import TestAdmin from "../views/testViews/TestAdmin";
import DoctorTest from "../views/testViews/DoctorTest";
import TestDoctor from "../views/testViews/TestDoctor";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppRouter extends React.Component<Props> {
    render(){
        console.log(window.location);
        // let uri = window.location.toString();
        // if (uri.indexOf("/") > 1) {
        //     let clean_uri = uri.substring(0, uri.indexOf("/"));
        //     window.history.replaceState({}, document.title, clean_uri);
        // }
        const {user} = this.props;
        if( user && user.role ) {
            return (
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Redirect exact={true}  to={user.role}/>
                            <Route exact={true} path='/Doctor' render={() => <Doctor/>}/>
                            <Route exact={true} path='/Patient' render={() => <Patient/>}/>
                            <Route exact={true} path='/Admin' render={() => <Admin/>}/>
                            <Route exact={true} path='/Admin/AdminTest' render={() => <AdminTest/>}/>
                            <Route exact={true} path='/Admin/TestAdmin' render={() => <TestAdmin/>}/>
                            <Route exact={true} path='/Doctor/DoctorTest' render={() => <DoctorTest/>}/>
                            <Route exact={true} path='/Doctor/TestDoctor' render={() => <TestDoctor/>}/>
                        </div>
                    </Switch>
                </BrowserRouter>
            );
        }
        //    return(
        //        <BrowserRouter>
        //            <Switch>
        //                <Redirect exact={true}  from='/Doctors' to='/DoctorPage'/>
        //                <Redirect exact={true}  from='/' to='/DoctorPage'/>
        //                <Route exact={true} path='/DoctorPage' render={() => <DoctorPage/>}/>
        //            </Switch>
        //        </BrowserRouter>
        //    )
        // }
        // if( user && user.role==='patient' ) {
        //     return(
        //         <BrowserRouter>
        //             <Switch>
        //                 <Redirect exact={true}  from='/Doctors' to='/PatientPage'/>
        //                 <Redirect exact={true}  from='/' to='/PatientPage'/>
        //                 <Route exact={true} path='/PatientPage' render={() => <PatientPage/>}/>
        //                 <Route exact={true} path='*' render={() => <PatientPage/>}/>
        //             </Switch>
        //         </BrowserRouter>
        //     )
        // }
        // if( user && user.role==='admin' ) {
        //     return(
        //         <BrowserRouter>
        //             <Switch>
        //                 <Redirect exact={true}  from='/Doctors' to='/AdminPage'/>
        //                 <Redirect exact={true}  from='/' to='/AdminPage'/>
        //                 <Route exact={true} path='/AdminPage' render={() => <AdminPage/>}/>
        //                 <Route exact={true} path='*' render={() => <AdminPage/>}/>
        //             </Switch>
        //         </BrowserRouter>
        //     )

        else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/' render={() => <HomePage onLogin={this.props.onLogin} user={this.props.user}/>}/>
                        <Route exact={true} path='/Doctors' render={() => <DoctorsPage onLogin={this.props.onLogin} user={this.props.user}/>}/>
                        <Route exact={true} path='*' render={() =>  <HomePage onLogin={this.props.onLogin} user={this.props.user}/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
    }
}