import * as React from "react";
import {User} from "../../models/User";
import {DoctorComment} from "../../models/DoctorComment";
import "../../styles/Comments.css";
import {Doctor} from "../../models/Doctor";

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

    postRecord(){
        const {input} = this.state;
        const {patientId} = this.props;
        let doctorString = localStorage.getItem("signedInDoc");
        let doctor: Doctor;
        let doctorId;
        if (doctorString != null) {
            let d = JSON.parse(doctorString);
            doctor = new Doctor(d.id, d.surname, d.firstName, d.secondName, d.email, "", d.department, d.specialty, d.firstPractiseDate);
            doctorId = doctor.id;
        }
        let d = new Date();
        //dd.MM.yyyy HH:mm
        let date = d.getDay() + '.' + d.getMonth() + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
        console.log("date -> " + date);
        fetch(`http://localhost:8080/api/patients/history/add`, {
            method: 'post',
            headers: {
                'Content-Type': `application/json`,
                'Accept': 'application/json'
            },
            body:
                JSON.stringify({
                    doctorId: doctorId,
                    patientId: patientId,
                    info: input,
                    date: date
                })
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshComments)
            .catch((err: any) => {
                console.log(err)
            })
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
        console.log(comments);
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
                                <textarea
                                    onChange={(ev) => {
                                        this.setState({input: ev.target.value});
                                    }}
                                    placeholder="Начните вводить..."/>
                        </div>
                        <button type="button"
                                className="btn btn-success btn-textarea"
                                onClick={() => {
                                    this.postRecord();
                                }}
                        >Добавить запись
                        </button>
                    </div> : null}
                    {groups}
                </div>
            </div>
        )
    }
}


