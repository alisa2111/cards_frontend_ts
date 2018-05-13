import * as React from 'react';
import {User} from "../../../models/User";
import Header from "../../common/Header";
import {Employee} from "../../../models/Employee";
import {img_doctor} from "../../../data/doctor";
import {CardView} from "../../common/CardView";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class MyDoctorsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            employees: []
        };
    }

    refreshDoctors = (result: any) => {
        const employees = result.map((e: any) => new Employee(
            e.id,
            e.lastName,
            e.firstName,
            e.secondName,
            e.email,
            e.password,
            e.department,
            e.specialty,
            e.firstPractiseDate
        ));
        this.setState({employees})
    };

    componentWillMount() {
        fetch(`http://localhost:8080/api/doctors/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshDoctors)
            .catch((err: any) => {
                console.log(err)
            })
    }

    groupBy(arr: any, key: any) {
        return arr.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    render() {
        const {onLogin, user} = this.props;
        const {employees} = this.state;
        const groupedCards = this.groupBy(employees, 'department');  //groped by department
        const groups = Object.keys(groupedCards).map((department, index) => {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='header border border-dark' key={index}>{department + " отделение"}</div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {groupedCards[department].map((employee: object) => {
                            return (
                                <CardView
                                    data={employee}
                                    refreshDoctorsArchive={this.refreshDoctors}
                                    image={img_doctor}
                                    isPatient={true}
                                    myDoctor={true}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        });
        return (
            <div>
                <Header onLogin={onLogin} user={user} isPatient={true}/>
                {groups}
            </div>
        )
    }
}

