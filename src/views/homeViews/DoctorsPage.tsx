import * as React from "react";
import Header from "../common/Header";
import 'styles/DoctorsPage.css'
import DoctorsComponent from "../common/DoctorsComponent";
import {User} from "../../models/User";
import {Doctor} from "../../models/Doctor";
interface Props {
    isAdmin?:boolean
    isPatient?:boolean
    user?: User
    onLogin: (user: User) => void
    onDoctor: (doctor: Doctor) => void
}
export default class DoctorsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user , isAdmin, isPatient, onDoctor} = this.props;
        return(
            <div className="container-fluid">
                {isAdmin?
                    <Header onLogin={onLogin}  user={user} isAdmin={isAdmin} />:
                    isPatient?
                        <Header onLogin={onLogin}  user={user} isPatient={isPatient} />:
                            <Header onLogin={onLogin}  user={user} head='Наши специалисты' mainHeader={true}/>}
                <DoctorsComponent isAdmin = {isAdmin} isPatient={isPatient} onDoctor={onDoctor}/>
            </div>
        )
    }
}