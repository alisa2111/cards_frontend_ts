import * as React from 'react';
import '../../styles/AdminPage.css'
import {User} from "../../models/User";
import Header from "../Header";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class PatientPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} links_after_auth={true}/>
                <h1>PatientPage!</h1>
            </div>
        )
    }
}