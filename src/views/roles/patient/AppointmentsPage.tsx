import * as React from 'react';
import {User} from "../../../models/User";
import Header from "../../Header";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppointmentsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user={user} isPatient={true} />
                ЗАПИСИ К ВРАЧУ
            </div>
        )
    }
}
