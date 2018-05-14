import * as React from 'react';
import HomePage from '../homeViews/HomePage';
import DoctorsPage from '../homeViews/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {User} from "../../models/User";
import DoctorPage from '../roles/docrtor/DoctorPage';
import PatientPage from '../roles/patient/PatientPage';
import PatientsPage from "./PatientsPage";
import StaffPage from "../roles/admin/StaffPage";
import PatientCard from "../roles/admin/PatientCard";
import ClaimsPage from "../roles/admin/ClaimsPage";
import DoctorsArchive from "../roles/admin/archive/DoctorsArchive";
import PatientsArchive from "../roles/admin/archive/PatientsArchive";
import MyPatientsPage from "../roles/docrtor/MyPatientsPage";
import AppointmentsPage from "../roles/patient/AppointmentsPage";
import {Patient} from "../../models/Patient";
import MyDoctorsPage from "../roles/patient/MyDoctorsPage";
import MyClaimsPage from "../roles/docrtor/MyClaimsPage";

interface Props{
    user?: User
    patient: Patient
    onLogin: (user: User) => void
    onPatient: (patient: Patient) => void
}
export default class AppRouter extends React.Component<Props> {
    render(){
        const {onLogin , user, patient, onPatient} = this.props;
        if( user && user.isSignedIn && user.role==='DOCTOR' ) {
           return(
               <BrowserRouter>
                   <Switch>
                       <div>
                           <Redirect exact={true} to='/patients/my'/>
                           <Route exact={true} path='/patients/my' render={() => <MyPatientsPage onLogin={onLogin} user={user}/>}/>
                           <Route exact={true} path='/patients/my/claims' render={() => <MyClaimsPage onLogin={onLogin} user={user}/>}/>
                           <Route exact={true} path='/patients' render={() =>
                               <PatientsPage
                                   onLogin={onLogin}
                                   onPatient={onPatient}
                                   user={user}
                                   isDoctor={true}
                               />
                           }/>
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
                            <Route exact={true} path='/doctors/my' render={() => <MyDoctorsPage onLogin={onLogin} user={user}/>}/>
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
                            <Route exact={true} path='/patients' render={() =>
                                <PatientsPage
                                    onLogin={onLogin}
                                    onPatient={onPatient}
                                    user={user}/>}/>
                            <Route exact={true} path='/patients/claim' render={() => <ClaimsPage onLogin={onLogin} user={user}/>}/>
                            <Route exact={true} path='/patientCard' render={() =>
                                <PatientCard
                                    user={user}
                                    onLogin={onLogin}
                                    patient={patient}
                                    onPatient={onPatient}
                                    isDoctor={user.role==='DOCTOR'}
                                    isAdmin={user.role==='ADMIN'}
                                    isPatient={user.role==='PATIENT'}
                                />}/>
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