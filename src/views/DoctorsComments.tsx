import * as React from "react";
import {User} from "../models/User";
import Header from "./Header";
import "../styles/Comments.css";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class DoctorsComments extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container">
                <Header onLogin={onLogin}  user={user} isAdmin={true}/>


                <div className="comments">
                    <div className="comment-wrap">
                        <div className="photo">
                            <div className="avatar"></div>
                        </div>
                        <div className="comment-block">
                            <form action="">
                                <textarea  placeholder="Начните вводить..."></textarea>
                            </form>
                        </div>
                        <button type="button" className="btn btn-success btn-textarea">Добавить</button>
                    </div>

                    <div className="comment-wrap">
                        <div className="comment-block">
                            <p>ФАМИЛИЯ ИМЯ ОТЧЕСТВО ВРАЧА</p>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
                                sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
                            <div className="bottom-comment">
                                <div className="comment-date">Aug 24, 2014</div>
                            </div>
                        </div>
                    </div>

                    <div className="comment-wrap">
                        <div className="comment-block">
                            <p>ФАМИЛИЯ ИМЯ ОТЧЕСТВО ВРАЧА</p>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam.</p>
                            <div className="bottom-comment">
                                <div className="comment-date">Aug 23, 2014</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


