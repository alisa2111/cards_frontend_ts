import * as React from 'react';
import {User} from "../../../../models/User";
import DoctorsComponent from "../../../DoctorsComponent";
import Header from "../../../Header";


interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class DoctorsArchive extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isAdmin={true} search={true}/>
                <DoctorsComponent isArchive={true}/>
            </div>
        )
    }
}