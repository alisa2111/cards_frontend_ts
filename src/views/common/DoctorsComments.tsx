import * as React from "react";
import {User} from "../../models/User";
import {DoctorComment} from "../../models/DoctorComment";
import "../../styles/Comments.css";

interface Props{
    user: User
    onLogin: (user: User) => void
    patientId: string
}
export default class DoctorsComments extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: '',
            comments:[]
        };
    }

    refreshComments = (result: any) => {
        const comments = result.map((e: any) => new DoctorComment(
            e.fios,
            e.date,
            e.info
        ));
        this.setState({comments})
    };

    componentWillMount(){
        const {patientId} = this.props;
        fetch(`http://localhost:8080/api/patients/history/getHistory`, {
            method: 'post',
            headers: {
                'Content-type':'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: "id=" + patientId
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshComments)
            .catch((err: any) => {
                console.log(err)
            })
    }

    render(){
        const {user} = this.props;
        const {comments} = this.state;
        const sortedComments = comments.sort(function(a:DoctorComment,b:DoctorComment){
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });
        console.log(sortedComments);
        const groups = sortedComments.map((data : DoctorComment) => {
            const {fios, date, info} = data;
            return(
                <div className="comment-wrap">
                    <div className="comment-block">
                        <p><b>{fios}</b></p>
                        <p className="comment-text"><i>{info}</i></p>
                        <div className="bottom-comment">
                            <div className="comment-date">{date}</div>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="container big-wrapper-comments">
                <div className="comments">
                    {user.role === "DOCTOR" ? <div className="comment-wrap">
                        <div className="comment-block">
                            <form action="">
                                <textarea placeholder="Начните вводить..."></textarea>
                            </form>
                        </div>
                        <button type="button" className="btn btn-success btn-textarea">Добавить</button>
                    </div> : null}
                    {groups}
                </div>
            </div>
        )
    }
}


