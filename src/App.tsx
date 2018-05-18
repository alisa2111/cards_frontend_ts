import * as React from 'react';
import AppRouter from './views/common/AppRouter';
import {Component} from "react";
import {User} from "./models/User";
import {AppState} from "./redux/AppState";
import {bindActionCreators} from "redux";
import {actionChangeDoctor, actionChangeLogin, actionChangePatient} from "./redux/AppAction";
import {connect} from "react-redux";
import {Patient} from "./models/Patient";
import {Doctor} from "./models/Doctor";
interface Props {
    user?: User
    patient: Patient
    doctor: Doctor
    changeDoctor: Function
    changeLogin: Function
    changePatient: Function
}
class App extends Component<Props , any> {

    handleLogin(user: User){
        const {changeLogin} = this.props;
        changeLogin(user);
    }

    handlePatient(patient: Patient){
        const {changePatient} = this.props;
        changePatient(patient);
    }

    handleDoctor(doctor: Doctor){
        const {changeDoctor} = this.props;
        changeDoctor(doctor);
    }

    render() {
        const {user, patient, doctor} = this.props;
        return (
            <div className="App">
                <AppRouter
                    user={user}
                    patient={patient}
                    doctor={doctor}
                    onLogin={(user: User) => this.handleLogin(user)}
                    onPatient={(patient: Patient) => this.handlePatient(patient)}
                    onDoctor={(doctor: Doctor) => this.handleDoctor(doctor)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        user: state.user,
        patient: state.patient,
        doctor: state.doctor,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLogin: bindActionCreators(user => actionChangeLogin(user), dispatch),
        changePatient: bindActionCreators(patient => actionChangePatient(patient), dispatch),
        changeDoctor: bindActionCreators(doctor => actionChangeDoctor(doctor), dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any)