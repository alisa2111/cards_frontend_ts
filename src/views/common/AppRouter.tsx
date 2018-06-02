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
import PatientsArchive from "../roles/admin/archive/PatientsArchive";
import MyPatientsPage from "../roles/docrtor/MyPatientsPage";
import AppointmentsPage from "../roles/patient/AppointmentsPage";
import {Patient} from "../../models/Patient";
import MyClaimsPage from "../roles/docrtor/MyClaimsPage";
import {Doctor} from "../../models/Doctor";
import DoctorProfile from "./DoctorProfile";
import DoctorAppointmentsPage from "../roles/docrtor/DoctorAppointmentsPage";
import config from "../../config";
import SpecialistsPage from "../experiment/SpecialistsPage";

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
                       <Route exact={true} path={config.links.APPOINTMENTS}
                              render={() =>
                                  <DoctorAppointmentsPage
                                      onLogin={onLogin}
                                      user={user}
                                  />}
                       />
                       <Route exact={true} path={config.links.PATIENT_CARD}
                              render={() =>
                                  <PatientCard
                                      user={user}
                                      onLogin={onLogin}
                                      patient={patient}
                                      onPatient={onPatient}
                                      isDoctor={user.role === 'DOCTOR'}
                                      isAdmin={user.role === 'ADMIN'}
                                      isPatient={user.role === 'PATIENT'}
                                  />}
                       />
                       <Route exact={true} path={config.links.PROFILE}
                              render={() =>
                                  <DoctorProfile
                                      user={user}
                                      onLogin={onLogin}
                                      doctor={doctor}
                                      onDoctor={onDoctor}
                                      isDoctor={user.role === 'DOCTOR'}
                                      isAdmin={user.role === 'ADMIN'}
                                      isPatient={user.role === 'PATIENT'}
                                      self={true}
                                  />}
                       />
                       <Route exact={true} path={config.links.MY_PATIENTS}
                              render={() =>
                                  <MyPatientsPage
                                      onLogin={onLogin}
                                      user={user}
                                      onPatient={onPatient}
                                  />}
                       />
                       <Route exact={true} path={config.links.DOCTOR_CLAIMS_FROM_PATIENTS}
                              render={() =>
                                  <MyClaimsPage
                                      onLogin={onLogin}
                                      user={user}
                                  />}
                       />
                       <Route exact={true} path={config.links.PATIENTS}
                              render={() =>
                                  <PatientsPage
                                       onLogin={onLogin}
                                       onPatient={onPatient}
                                       user={user}
                                       isDoctor={true}
                                  />
                       }/>
                       <Redirect to={config.links.MY_PATIENTS}/>
                   </Switch>
               </BrowserRouter>
           )
        }

        if( user &&  user.isSignedIn && user.role==='PATIENT' ) {
            return(
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path={config.links.PATIENT_CARD}
                               render={() =>
                                   <PatientCard
                                       user={user}
                                       onLogin={onLogin}
                                       patient={patient}
                                       onPatient={onPatient}
                                       isPatient={user.role === 'PATIENT'}
                                   />}
                        />
                        <Route exact={true} path={config.links.PROFILE}
                               render={() =>
                                   <DoctorProfile
                                       user={user}
                                       onLogin={onLogin}
                                       doctor={doctor}
                                       onDoctor={onDoctor}
                                       isDoctor={user.role === 'DOCTOR'}
                                       isAdmin={user.role === 'ADMIN'}
                                       isPatient={user.role === 'PATIENT'}
                                   />}
                        />
                        <Route exact={true} path={config.links.DOCTORS}
                               render={() =>
                                   <SpecialistsPage
                                       onLogin={onLogin}
                                       user={user}
                                       onDoctor={onDoctor}
                                       isDoctorsForPatient={true}
                                   />}
                        />
                        <Route exact={true} path={config.links.MY_DOCTORS}
                               render={() =>
                                   <SpecialistsPage
                                       onLogin={onLogin}
                                       user={user}
                                       onDoctor={onDoctor}
                                       isDoctorsForPatient={true}
                                       isMyDoctor={true}
                                   />}
                        />
                        <Route exact={true} path={config.links.PATIENT_APPOINTMENTS}
                               render={() =>
                                   <AppointmentsPage
                                       onLogin={onLogin}
                                       user={user}
                                   />}
                        />
                        <Redirect exact={true} to={config.links.DOCTORS}/>
                    </Switch>
                </BrowserRouter>
            )
        }

        if( user &&  user.isSignedIn && user.role==='ADMIN' ) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path={config.links.PROFILE}
                               render={() =>
                                   <DoctorProfile
                                       user={user}
                                       onLogin={onLogin}
                                       doctor={doctor}
                                       onDoctor={onDoctor}
                                       isDoctor={user.role === 'DOCTOR'}
                                       isAdmin={user.role === 'ADMIN'}
                                       isPatient={user.role === 'PATIENT'}
                                   />}
                        />
                        <Route exact={true} path={config.links.STAFF}
                               render={() =>
                                   <StaffPage
                                       onDoctor={onDoctor}
                                       onLogin={onLogin}
                                       user={user}
                                   />}
                        />
                        <Route exact={true} path={config.links.PATIENTS}
                               render={() =>
                                   <PatientsPage
                                       onLogin={onLogin}
                                       onPatient={onPatient}
                                       user={user}
                                   />}
                        />
                        <Route exact={true} path={config.links.CLAIMS}
                               render={() =>
                                   <ClaimsPage
                                       onLogin={onLogin}
                                       user={user}
                                   />}
                        />
                        <Route exact={true} path={config.links.PATIENT_CARD}
                               render={() =>
                                   <PatientCard
                                       user={user}
                                       onLogin={onLogin}
                                       patient={patient}
                                       onPatient={onPatient}
                                       isDoctor={user.role === 'DOCTOR'}
                                       isAdmin={user.role === 'ADMIN'}
                                       isPatient={user.role === 'PATIENT'}
                                   />}
                        />
                        <Route exact={true} path={config.links.ARCHIVE_DOCTORS}
                               render={() =>
                                   <SpecialistsPage
                                       onLogin={onLogin}
                                       user={user}
                                       onDoctor={onDoctor}
                                       isDoctorsInArchive={true}
                                   />}
                        />
                        <Route exact={true} path={config.links.ARCHIVE_PATIENTS}
                               render={() =>
                                   <PatientsArchive
                                       onLogin={onLogin}
                                       user={user}
                                       onPatient={onPatient}
                                   />}
                        />
                        <Route exact={true} path={config.links.PROFILE}
                               render={() =>
                                   <DoctorProfile
                                       user={user}
                                       onLogin={onLogin}
                                       doctor={doctor}
                                       onDoctor={onDoctor}
                                       isDoctor={user.role === 'DOCTOR'}
                                       isAdmin={user.role === 'ADMIN'}
                                       isPatient={user.role === 'PATIENT'}
                                   />}
                        />
                        <Redirect exact={true} to={config.links.STAFF}/>
                    </Switch>
                </BrowserRouter>
            )
        }

        else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path={config.links.DOCTORS}
                               render={()=>
                                   <DoctorsPage
                                       onDoctor={onDoctor}
                                       onLogin={onLogin}
                                       user={user}
                                       isAdmin={false}
                                   />}
                        />
                        <Route exact={true} path='*'
                               render={() =>
                                   <HomePage
                                       onLogin={onLogin}
                                       user={user}
                                   />}
                        />
                    </Switch>
                </BrowserRouter>
            )
        }
    }
}