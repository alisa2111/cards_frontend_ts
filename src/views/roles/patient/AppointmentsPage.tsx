import * as React from 'react';
import {User} from "../../../models/User";
import Header from "../../common/Header";
import {Appointment} from "../../../models/Appointment";
import config from "../../../config";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class AppointmentsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            appointments:[]
        };
    }

    componentWillMount(){
        let patientStr = localStorage.getItem("signedInPatient");
        let patientId = -1;
        if (patientStr != null) {
            patientId = JSON.parse(patientStr).id;
        }
        fetch(config.urls.PATIENT_GET_APPOINTMENTS, {
            method: 'post',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: "patientId=" + patientId
        })
            .then((res: any) => {
                return res.json();
            })
            .then((result:any)=>{
                const appointments = result.map((r: any) => new Appointment(
                    r.lastName,
                    r.firstName,
                    r.secondName,
                    r.date,
                    r.time ));
                this.setState({appointments})
        })
            .catch((err: any) => {
                console.log(err)
            })
    }

    render(){
        const {onLogin , user} = this.props;
        const {appointments} = this.state;
        const allAppointmentsView =  appointments.map((ap: Appointment) =>
            <AppointmentRow appointment={ap}/>
        );
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user = {user} isPatient={true} />
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">ФИО врача</th>
                        <th scope="col">Дата записи</th>
                        <th scope="col">Время записи</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allAppointmentsView}
                    </tbody>
                </table>
            </div>
        )
    }
}

const AppointmentRow = (props: any) => {
    const {surname, firstname, lastname, date, time} = props.appointment;

    return (
        <tr>
            <td>{`${surname} ${firstname} ${lastname}`}</td>
            <td>{date}</td>
            <td>{time}</td>
        </tr>
    )
};