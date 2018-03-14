import * as React from 'react';
import HomePage from './views/HomePage';
import DoctorsPage from './views/Doctors/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DoctorPage from "./views/DoctorPage";
import {User} from "./models/User";
import PatientPage from "./views/PatientPage";
import AdminPage from "./views/AdminPage";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppRouter extends React.Component<Props> {

    render(){
        const {user} = this.props;
        if( user && user.role==='doctor' ) {
           return(
               <BrowserRouter>
                   <Switch>
                       <Redirect exact={true}  from='/Doctors' to='/DoctorPage'/>
                       <Redirect exact={true}  from='/' to='/DoctorPage'/>
                       <Route exact={true} path='/DoctorPage' render={() => <DoctorPage/>}/>
                   </Switch>
               </BrowserRouter>
           )
        }
        if( user && user.role==='patient' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <Redirect exact={true}  from='/Doctors' to='/PatientPage'/>
                        <Redirect exact={true}  from='/' to='/PatientPage'/>
                        <Route exact={true} path='/PatientPage' render={() => <PatientPage/>}/>
                        <Route exact={true} path='*' render={() => <PatientPage/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
        if( user && user.role==='admin' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <Redirect exact={true}  from='/Doctors' to='/AdminPage'/>
                        <Redirect exact={true}  from='/' to='/AdminPage'/>
                        <Route exact={true} path='/AdminPage' render={() => <AdminPage/>}/>
                        <Route exact={true} path='*' render={() => <AdminPage/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
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