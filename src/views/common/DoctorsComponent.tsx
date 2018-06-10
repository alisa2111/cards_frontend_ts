import * as React from "react";
import {CardView} from "./CardView";
import {img_doctor} from "../../data/doctor";
import SearchComponent from "./SearchComponent";
import {Doctor} from "../../models/Doctor";
import config from "../../config";

interface Props {
    isAdmin?:boolean;
    isPatient?:boolean;
    isArchive?:boolean;
    onDoctor: (doctor: Doctor) => void
}
export default class DoctorsComponent extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: '',
            doctors:[]
        };
    }

    refreshDoctors = (result: any) => {
        const doctors = result.map((e: any) => new Doctor(
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
        this.setState({doctors})
    };


    componentWillMount(){
        fetch(config.urls.GET_ALL_DOCTORS, {
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
        const {isAdmin, isArchive, isPatient, onDoctor} = this.props;
        const {doctors} = this.state;
        const groupedCards = this.groupBy(doctors, 'department');  //groped by department
        const groups = Object.keys(groupedCards).map((department,index) => {
            return(
                <div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='header border border-dark' key={index}>{department}</div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {groupedCards[department].map((doctor:object)=> {
                            return (
                                <CardView
                                    data={doctor}
                                    onDoctor={onDoctor}
                                    isAdmin={isAdmin}
                                    isArchive={isArchive}
                                    isPatient={isPatient}
                                    refreshDoctors={this.refreshDoctors}
                                    image={img_doctor}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        });
        return(
            <div>
                <SearchComponent refreshState={this.refreshDoctors}
                                 placeholder="Поиск по врачам"
                                 title="Поиск по фамилии, имени, отчеству, отделу и специальности"
                                 isDoctor={true}
                />
                {groups}
            </div>
        )
    }
}