import * as React from 'react';
import {Patient} from "../../../models/Patient";
import Header from "../../Header";
import {User} from "../../../models/User";
import {img_doctor} from "../../../data/doctor.js";

interface Props {
    patient?: Patient;
    user: User
    onLogin: (user: User) => void
}

export default class PatientCard extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            patients:[]
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
            .then((result:any) => {
                const patients = result.map((r: any) => new Patient(
                    r.id,
                    r.lastName,
                    r.firstName,
                    r.secondName,
                    r.email,
                    r.sex,
                    r.password,
                    r.address,
                    r.phoneNumber,
                    r.birthday));
                this.setState({patients})
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
    render() {
        const {onLogin, user} = this.props;

        return (
            <div className="container">
                <Header onLogin={onLogin} user={user} isAdmin={true} search={true}/>
                <div className="row">

                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Пациент</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 "><img alt="User Pic" src={img_doctor}
                                                                         className="img-circle img-responsive"/></div>
                                <div className=" col-md-6 col-lg-6 ">
                                    <table className="table table-user-information">
                                        <tbody>
                                        <tr>
                                            <td>Department:</td>
                                            <td>Programming</td>
                                        </tr>
                                        <tr>
                                            <td>Hire date:</td>
                                            <td>06/23/2013</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>01/24/1988</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}