import * as React from 'react';
import HomePage from './HomePage';
import DoctorsPage from './Doctors/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {User} from "../models/User";
import AdminTest from "./testViews/AdminTest";
import TestAdmin from "./testViews/TestAdmin";
import DoctorTest from "./testViews/DoctorTest";
import TestDoctor from "./testViews/TestDoctor";
import DoctorPage from './DoctorPage';
import PatientPage from './PatientPage';
import AdminPage from './AdminPage';

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppRouter extends React.Component<Props> {
    render(){
        const {onLogin , user} = this.props;
        if( user && user.role==='Doctor' ) {
           return(
               <BrowserRouter>
                   <Switch>
                       <div>
                           <Redirect exact={true} to='/DoctorPage'/>
                           <Route exact={true} path='/DoctorPage' render={() => <DoctorPage onLogin={onLogin}/>}/>
                           <Route exact={true} path='/Doctor/DoctorTest' render={() => <DoctorTest/>}/>
                           <Route exact={true} path='/Doctor/TestDoctor' render={() => <TestDoctor/>}/>
                           <Route exact={true} path='/' render={() => <DoctorPage onLogin={onLogin}/>}/>
                       </div>
                   </Switch>
               </BrowserRouter>
           )
        }

        if( user && user.role==='Patient' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Redirect exact={true} to='/PatientPage'/>
                            <Route exact={true} path='/PatientPage' render={() => <PatientPage onLogin={onLogin}/>}/>
                            <Route exact={true} path='/' render={() => <PatientPage onLogin={onLogin}/>}/>
                        </div>
                    </Switch>
                </BrowserRouter>
            )
        }

        if( user && user.role==='Admin' ) {
            return (
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Redirect exact={true}  to='/AdminPage'/>
                            <Route exact={true} path='/AdminPage' render={() => <AdminPage onLogin={onLogin}/>}/>
                            <Route exact={true} path='/Admin/AdminTest' render={() => <AdminTest/>}/>
                            <Route exact={true} path='/Admin/TestAdmin' render={() => <TestAdmin/>}/>
                            <Route exact={true} path='/' render={() => <AdminPage onLogin={onLogin}/>}/>
                        </div>
                    </Switch>
                </BrowserRouter>
            )
        }

        else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/' render={() => <HomePage onLogin={onLogin} user={user}/>}/>
                        <Route exact={true} path='/Doctors' render={() => <DoctorsPage onLogin={onLogin} user={user}/>}/>
                        <Route exact={true} path='*' render={() =>  <HomePage onLogin={onLogin} user={user}/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
    }
}