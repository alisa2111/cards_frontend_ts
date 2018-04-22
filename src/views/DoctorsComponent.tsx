import * as React from "react";
import {employees} from "../data/doctor";
import {CardView} from "./CardView";
import {Patient} from "../models/Patient";
import {Employee} from "../models/Employee";
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

 /*   componentWillMount(){
        fetch(`http://localhost:8080/api/patients/claim/all`, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then((result: any) => {
                const employees = result.map((r: any) => new Employee(
                    r.department,
                    r.image,
                    r.text));
                this.setState({employees})
            })
            .catch((err: any) => {
                console.log(err)
            })
    }*/




    groupBy(arr: any, key: any) {
        return arr.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    render() {
        const {isAdmin} = this.props;
        const groupedCards = this.groupBy(employees , 'department');  //groped by department
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
                            return <CardView data={employee} isAdmin={isAdmin}/>
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