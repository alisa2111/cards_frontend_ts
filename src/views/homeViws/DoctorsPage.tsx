import * as React from "react";
import Header from "../Header";
import '../../styles/DoctorsPage.css'
import DoctorsComponent from "../DoctorsComponent";
import {User} from "../../models/User";
interface Props {
    isAdmin:boolean
    user?: User
    onLogin: (user: User) => void
}
export default class DoctorsPage extends React.Component<Props,any> {
    render(){
        const {onLogin , user , isAdmin} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin}  user = {user} head = 'Наши специалисты' search = {true} links_before_auth={true}/>
                <DoctorsComponent isAdmin = {isAdmin}/>
            </div>
        )
    }
}