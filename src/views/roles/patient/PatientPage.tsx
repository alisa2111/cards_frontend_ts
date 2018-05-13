import * as React from 'react';
import {User} from "../../../models/User";
import Header from "../../Header";
import {Patient} from "../../../models/Patient";

interface Props{
    user?: User
    onLogin: (user: User) => void
    // onPatient: (patient: Patient) => void
}
export default class PatientPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patient:Patient
        };
    }
    componentWillMount(){
        fetch(`http://localhost:8080/api/patients/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then((r:any) => {
                // const patient = new Patient(
                //     r.id,
                //     r.lastName,
                //     r.firstName,
                //     r.secondName,
                //     r.email,
                //     r.sex,
                //     r.password,
                //     r.address,
                //     r.phoneNumber,
                //     r.birthday
                // );

                // this.props.onPatient(patient);
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin} user={user} isPatient={true}/>
                {/*<PatientCard patient={} onPatient={onPatient} user={user} onLogin={onLogin}/>*/}
            </div>
        )
    }
}