import * as React from 'react';
import HomePage from './views/HomePage';
import DoctorsPage from './views/Doctors/DoctorsPage';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DoctorPage from "./views/Doctors/DoctorPage";
import {User} from "./models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppRouter extends React.Component<Props,any> {

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' render={() => <HomePage onLogin={this.props.onLogin}  user = {this.props.user}/>}/>
                    <Route exact={true} path='/Doctors' render={() => <DoctorsPage onLogin={this.props.onLogin}  user = {this.props.user}/>}/>
                    <Route exact={true} path='/DoctorPage' render={() => <DoctorPage/>}/>
                    <Route exact={true} path='*' render={() => <h1>404 not found</h1>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}