import * as React from 'react';
import HomePage from './homeViws/HomePage';
import DoctorsPage from './homeViws/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {User} from "../models/User";
import DoctorPage from './roles/docrtor/DoctorPage';
import PatientPage from './roles/patient/PatientPage';
import PatientsPage from "./roles/admin/PatientsPage";
import StaffPage from "./roles/admin/StaffPage";
import PatientCard from "./roles/admin/PatientCard";
import ClaimsPage from "./roles/admin/ClaimsPage";
import DoctorsArchive from "./roles/admin/archive/DoctorsArchive";
import PatientsArchive from "./roles/admin/archive/PatientsArchive";
import MyPatientsPage from "./roles/docrtor/MyPatientsPage";
import AppointmentsPage from "./roles/patient/AppointmentsPage";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppRouter extends React.Component<Props> {
    render(){
        const {onLogin , user} = this.props;
        if( user && user.isSignedIn && user.role==='DOCTOR' ) {
           return(
               <BrowserRouter>
                   <Switch>
                       <div>
                           <Redirect exact={true} to='/patients/my'/>
                           <Route exact={true} path='/patients/my' render={() => <MyPatientsPage onLogin={onLogin} user={user}/>}/>
                           <Route exact={true} path='/patients/my/all' render={() => <MyPatientsPage onLogin={onLogin} user={user}/>}/>
                           <Route exact={true} path='/patients/base' render={() =>  <MyPatientsPage onLogin={onLogin} user={user}/>}/>
                           <Route exact={true} path='/' render={() => <DoctorPage onLogin={onLogin} user = {user}/>}/>
                       </div>
                   </Switch>
               </BrowserRouter>
           )
        }

        if( user &&  user.isSignedIn && user.role==='PATIENT' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Redirect exact={true} to='/PatientPage'/>
                            <Route exact={true} path='/PatientPage' render={() => <PatientPage onLogin={onLogin}/>}/>
                            <Route exact={true} path='/Doctors' render={() => <DoctorsPage onLogin={onLogin} user={user} isPatient={true}/>}/>
                            <Route exact={true} path='/doctors/my' render={() => <DoctorsPage onLogin={onLogin} user={user} isPatient={true} myDoctor={true}/>}/>
                            <Route exact={true} path='/doctors/appointments' render={() => <AppointmentsPage onLogin={onLogin} user={user}/>}/>
                        </div>
                    </Switch>
                </BrowserRouter>
            )
        }

        if( user &&  user.isSignedIn && user.role==='ADMIN' ) {
            return (
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Redirect exact={true}  to='/staff'/>
                            <Route exact={true} path='/staff' render={() => <StaffPage onLogin={onLogin} user={user}/>}/>
                            <Route exact={true} path='/patients' render={() => <PatientsPage onLogin={onLogin} user={user}/>}/>
                            <Route exact={true} path='/patients/claim' render={() => <ClaimsPage onLogin={onLogin} user={user}/>}/>
                            <Route exact={true} path='/patientCard' render={() => <PatientCard/>}/>
                            <Route exact={true} path='/archive/staff' render={() => <DoctorsArchive onLogin={onLogin} user={user}/>}/>
                            <Route exact={true} path='/archive/patients' render={() => <PatientsArchive onLogin={onLogin} user={user}/>}/>
                        </div>
                    </Switch>
                </BrowserRouter>
            )
        }

        else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/Doctors' render={()=><DoctorsPage onLogin={onLogin} user={user} isAdmin={false}/>}/>
                        <Route exact={true} path='*' render={() =>  <HomePage onLogin={onLogin} user={user}/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
    }
}