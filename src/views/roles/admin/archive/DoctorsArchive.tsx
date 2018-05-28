import * as React from 'react';
import {User} from "../../../../models/User";
import Header from "../../../common/Header";
import {CardView} from "../../../common/CardView";
import {img_doctor} from "../../../../data/doctor";
import SearchComponent from "../../../common/SearchComponent";
import {Doctor} from "../../../../models/Doctor";
import config from "../../../../../config";


interface Props{
    user: User
    onLogin: (user: User) => void
    onDoctor: (doctor: Doctor) => void
}
export default class DoctorsArchive extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            doctors: []
        };
    }

    refreshDoctorsArchive = (result: any) => {
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

    componentWillMount() {
        fetch(config.urls.GET_ALL_DOCTORS_FROM_ARCHIVE, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshDoctorsArchive)
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
        const {onLogin, user, onDoctor} = this.props;
        const {doctors} = this.state;
        const groupedCards = this.groupBy(doctors, 'department');  //groped by department
        const groups = Object.keys(groupedCards).map((department, index) => {
            return (
                <div>
                    <Header onLogin={onLogin} user={user} isAdmin={true} />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='header border border-dark' key={index}>{department}</div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {groupedCards[department].map((doctor: object) => {
                            return (
                                <CardView
                                    data={doctor}
                                    onDoctor={onDoctor}
                                    refreshDoctorsArchive={this.refreshDoctorsArchive}
                                    isArchive={true}
                                    image={img_doctor}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        });
        return (
            <div>
                <Header onLogin={onLogin} user={user} isAdmin={true} />
                <SearchComponent refreshState={this.refreshDoctorsArchive}
                                 placeholder="Поиск по врачам"
                                 title="Поиск по фамилии, имени, отчеству, отделу и специальности"
                                 isDoctorArchive={true}
                />
                {groups}
            </div>
        )
    }
}