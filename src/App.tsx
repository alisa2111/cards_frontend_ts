import * as React from 'react';
import AppRouter from './views/AppRouter';
import {Component} from "react";
import {User} from "./models/User";
import {AppState} from "./redux/AppState";
import {bindActionCreators} from "redux";
import {actionChangeLogin} from "./redux/AppAction";
import {connect} from "react-redux";
interface Props {
    user?: User
    changeLogin: Function
}
class App extends Component<Props , any> {
    handleLogin(user: User){
        const {changeLogin} = this.props;
        changeLogin(user)
    }
    render() {
        const {user} = this.props;
        return (
            <div className="App">
                <AppRouter
                    user={user}
                    onLogin={(user: User) => this.handleLogin(user)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLogin: bindActionCreators(user => actionChangeLogin(user), dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any)