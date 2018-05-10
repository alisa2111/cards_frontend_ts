import * as React from 'react';
import AppRouter from './views/AppRouter';
import {Component} from "react";
import {User} from "./models/User";
import {AppState} from "./redux/AppState";
import {bindActionCreators} from "redux";
import {actionChangeLogin, actionChangePatient} from "./redux/AppAction";
import {connect} from "react-redux";
import {Patient} from "./models/Patient";
interface Props {
    user?: User
    patient?: Patient
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

    render() {
        const {user, patient} = this.props;
        return (
            <div className="App">
                <AppRouter
                    user={user}
                    patient={patient}
                    onLogin={(user: User) => this.handleLogin(user)}
                    onPatient={(patient: Patient) => this.handlePatient(patient)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        user: state.user,
        patient: state.patient
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLogin: bindActionCreators(user => actionChangeLogin(user), dispatch),
        changePatient: bindActionCreators(patient => actionChangePatient(patient), dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any)