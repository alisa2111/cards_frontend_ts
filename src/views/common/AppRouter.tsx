import * as React from 'react';
import HomePage from '../homeViews/HomePage';
import DoctorsPage from '../homeViews/DoctorsPage';
import {Redirect, Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {User} from "../../models/User";
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
import {Doctor} from "../../models/Doctor";
import DoctorProfile from "./DoctorProfile";
import DoctorAppointmentsPage from "../roles/docrtor/DoctorAppointmentsPage";

interface Props{
    user?: User
    patient: Patient
    doctor: Doctor
    onLogin: (user: User) => void
    onPatient: (patient: Patient) => void
    onDoctor: (doctor: Doctor) => void
}
export default class AppRouter extends React.Component<Props> {
    render(){
        const {onLogin , user, patient, onPatient, doctor, onDoctor} = this.props;
        if( user && user.isSignedIn && user.role==='DOCTOR' ) {
           return(
               <BrowserRouter>
                   <Switch>
                       <Route exact={true} path='/appointments'
                              render={() => <DoctorAppointmentsPage onLogin={onLogin} user={user}/>}/>
                       <Route exact={true} path='/patientCard' render={() =>
                           <PatientCard
                               user={user}
                               onLogin={onLogin}
                               patient={patient}
                               onPatient={onPatient}
                               isDoctor={user.role === 'DOCTOR'}
                               isAdmin={user.role === 'ADMIN'}
                               isPatient={user.role === 'PATIENT'}
                           />}/>

                       <Route exact={true} path='/profile' render={() =>
                           <DoctorProfile
                               user={user}
                               onLogin={onLogin}
                               doctor={doctor}
                               onDoctor={onDoctor}
                               isDoctor={user.role === 'DOCTOR'}
                               isAdmin={user.role === 'ADMIN'}
                               isPatient={user.role === 'PATIENT'}
                               self={true}
                           />}/>
                       <Route exact={true} path='/patients/my'
                              render={() => <MyPatientsPage onLogin={onLogin} user={user} onPatient={onPatient}/>}/>
                       <Route exact={true} path='/patients/my/claims'
                              render={() => <MyClaimsPage onLogin={onLogin} user={user}/>}/>
                       <Route exact={true} path='/patients' render={() =>
                           <PatientsPage
                               onLogin={onLogin}
                               onPatient={onPatient}
                               user={user}
                               isDoctor={true}
                           />
                       }/>
                       <Redirect to='/patients/my'/>
                   </Switch>
               </BrowserRouter>
           )
        }

        if( user &&  user.isSignedIn && user.role==='PATIENT' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/patientCard' render={() =>
                            <PatientCard
                                user={user}
                                onLogin={onLogin}
                                patient={patient}
                                onPatient={onPatient}
                                isPatient={user.role === 'PATIENT'}
                            />}/>

                        <Route exact={true} path='/profile' render={() =>
                            <DoctorProfile
                                user={user}
                                onLogin={onLogin}
                                doctor={doctor}
                                onDoctor={onDoctor}
                                isDoctor={user.role === 'DOCTOR'}
                                isAdmin={user.role === 'ADMIN'}
                                isPatient={user.role === 'PATIENT'}
                            />}/>
                        <Route exact={true} path='/doctors'
                               render={() => <DoctorsPage onLogin={onLogin} user={user} isPatient={true} onDoctor={onDoctor}/>}/>
                        <Route exact={true} path='/doctors/my'
                               render={() => <MyDoctorsPage onLogin={onLogin} user={user} onDoctor={onDoctor}/>}/>
                        <Route exact={true} path='/doctors/appointments'
                               render={() => <AppointmentsPage onLogin={onLogin} user={user}/>}/>
                        <Redirect exact={true} to='/doctors'/>
                    </Switch>
                </BrowserRouter>
            )
        }

        if( user &&  user.isSignedIn && user.role==='ADMIN' ) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/profile' render={() =>
                            <DoctorProfile
                                user={user}
                                onLogin={onLogin}
                                doctor={doctor}
                                onDoctor={onDoctor}
                                isDoctor={user.role === 'DOCTOR'}
                                isAdmin={user.role === 'ADMIN'}
                                isPatient={user.role === 'PATIENT'}
                            />}/>
                        <Route exact={true} path='/staff' render={() => <StaffPage onDoctor={onDoctor} onLogin={onLogin} user={user}/>}/>
                        <Route exact={true} path='/patients' render={() =>
                            <PatientsPage
                                onLogin={onLogin}
                                onPatient={onPatient}
                                user={user}/>}/>
                        <Route exact={true} path='/patients/claim'
                               render={() => <ClaimsPage onLogin={onLogin} user={user}/>}/>
                        <Route exact={true} path='/patientCard' render={() =>
                            <PatientCard
                                user={user}
                                onLogin={onLogin}
                                patient={patient}
                                onPatient={onPatient}
                                isDoctor={user.role === 'DOCTOR'}
                                isAdmin={user.role === 'ADMIN'}
                                isPatient={user.role === 'PATIENT'}
                            />}/>
                        <Route exact={true} path='/archive/staff'
                               render={() => <DoctorsArchive onLogin={onLogin} user={user} onDoctor={onDoctor}/>}/>
                        <Route exact={true} path='/archive/patients'
                               render={() => <PatientsArchive onLogin={onLogin} user={user} onPatient={onPatient}/>}/>
                        <Route exact={true} path='/profile' render={() =>
                            <DoctorProfile
                                user={user}
                                onLogin={onLogin}
                                doctor={doctor}
                                onDoctor={onDoctor}
                                isDoctor={user.role === 'DOCTOR'}
                                isAdmin={user.role === 'ADMIN'}
                                isPatient={user.role === 'PATIENT'}
                            />}/>
                        <Redirect exact={true} to='/staff'/>
                    </Switch>
                </BrowserRouter>
            )
        }

        else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/doctors' render={()=><DoctorsPage onDoctor={onDoctor} onLogin={onLogin} user={user} isAdmin={false}/>}/>
                        <Route exact={true} path='*' render={() =>  <HomePage onLogin={onLogin} user={user}/>}/>
                    </Switch>
                </BrowserRouter>
            )
        }
    }
}