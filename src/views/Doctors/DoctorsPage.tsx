import * as React from "react";
import Header from "../Header";
import '../../styles/DoctorsPage.css'
import DoctorsComponent from "./DoctorsComponent";

export default class DoctorsPage extends React.Component<any,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin}  user = {user} head = 'Наши специалисты' search = {true} links_before_auth={true}/>
                <DoctorsComponent/>
            </div>
        )
    }
}