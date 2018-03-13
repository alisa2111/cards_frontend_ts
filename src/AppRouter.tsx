import * as React from 'react';
import HomePage from './views/HomePage';
import DoctorsPage from './views/Doctors/DoctorsPage';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
export default class AppRouter extends React.Component<any,any> {

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' render={() => <HomePage/>}/>
                    <Route exact={true} path='/Doctors' render={() => <DoctorsPage/>}/>
                    <Route exact={true} path='*' render={() => <h1>404 not found</h1>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}