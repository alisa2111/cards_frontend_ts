import * as React from 'react';
import '../styles/AdminPage.css'
import {User} from "../models/User";
import Header from "./Header";
import DoctorsComponent from "./Doctors/DoctorsComponent";

interface Props{
    user: User
    onLogin: (user: User) => void
}
export default class AdminPage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} links_after_auth={true} search={true}/>
                <div className="row">
                    <div className="col-2 menu">
                        <h1 className='header-menu'>Меню</h1>
                        <div className="list-group" id="myList" role="tablist">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#staff" role="tab">Персонал</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
                        </div>
                    </div>

                    <div className="col-10">
                        <div className="tab-content" >
                            <div className="tab-pane active " id="staff" role="tabpanel" ><DoctorsComponent isAdmin={true}/> </div>
                            <div className="tab-pane" id="profile" role="tabpanel">...</div>
                            <div className="tab-pane" id="messages" role="tabpanel">...</div>
                            <div className="tab-pane" id="settings" role="tabpanel">...</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}