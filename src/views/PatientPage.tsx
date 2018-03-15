import * as React from 'react';
import '../styles/AdminPage.css'
import Header from "./Header";
import {User} from "../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class PatientPage extends React.Component<Props,any> {
    render(){
        const {onLogin} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} search_flag={false} links_before_auth={false} links_after_auth={true}/>
                <h1>PatientPage!</h1>
            </div>
        )
    }
}