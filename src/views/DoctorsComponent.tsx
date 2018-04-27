import * as React from "react";
import {CardView} from "./CardView";
import {Employee} from "../models/Employee";
import {img_doctor} from "../data/doctor";

interface Props {
    isAdmin:boolean;
}
export default class DoctorsComponent extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            employees:[]
        };
    }

    componentWillMount(){
        fetch(`http://localhost:8080/api/doctors/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then((result: any) => {
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
            })
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
        const {isAdmin} = this.props;
        const {employees} = this.state;
        const groupedCards = this.groupBy(employees, 'department');  //groped by department
        const groups = Object.keys(groupedCards).map((department,index) => {
            return(
                <div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className= 'header border border-dark' key={index}>{department}</div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {groupedCards[department].map((employee:object)=> {
                            return <CardView data={employee} isAdmin={isAdmin} image = {img_doctor}/>
                        })}
                    </div>
                </div>
            )
        });
        return(
            <div>
                {groups}
            </div>
        )
    }
}