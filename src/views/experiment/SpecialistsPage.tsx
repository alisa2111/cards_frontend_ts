import {User} from "../../models/User";
import {Doctor} from "../../models/Doctor";
import * as React from "react";
import config from "../../config";
import {CardView} from "../common/CardView";
import Header from "../common/Header";
import SearchComponent from "../common/SearchComponent";

interface Props{
    user: User
    onLogin: (user: User) => void
    onDoctor: (doctor: Doctor) => void

    isDoctorsForPatient?: boolean
    isDoctorsInArchive?: boolean
    isMyDoctor?: boolean
}

export default class SpecialistsPage extends React.Component<Props,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            doctors: []
        };
    }

    groupBy(arr: any, key: any) {
        return arr.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

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

    getDoctorsForPatient(){
        const {id} = this.props.user;
        fetch(config.urls.PATIENT_GET_DOCTORS, {
            method: 'post',
            headers: {
                'Content-Type': `application/x-www-form-urlencoded`
            },
            body: "id=" + id
        })
            .then((res: any) => {
                return res.json();
            })
            .then(this.refreshDoctors)
            .catch((err: any) => {
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            })
    }

    getDoctorsForArchive(){
        fetch(config.urls.GET_ALL_DOCTORS_FROM_ARCHIVE, {
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
                console.log(err);
                alert("Извините. Сервер недоступен в данный момент.");
            })
    }

    componentWillMount() {
        const {isDoctorsForPatient, isDoctorsInArchive} = this.props;
        isDoctorsForPatient ? this.getDoctorsForPatient():null;
        isDoctorsInArchive ? this.getDoctorsForArchive():null;
    }

    render() {
        const {onLogin, user, onDoctor, isDoctorsForPatient = false, isDoctorsInArchive = false, isMyDoctor = false} = this.props;
        const {doctors} = this.state;
        const groupedCards = this.groupBy(doctors, 'department');  //groped by department
        const groups = Object.keys(groupedCards).map((department, index) => (
            <div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='header border border-dark' key={index}>{department + " отделение"}</div>
                    </div>
                </div>
                <div className='card-deck'>
                    {groupedCards[department].map((doctor: object) => (
                        <CardView
                            data={doctor}
                            onDoctor={onDoctor}
                            refreshDoctors={this.refreshDoctors}
                            isPatient={isDoctorsForPatient}
                            myDoctor={isMyDoctor}
                            isArchive={isDoctorsInArchive}
                        />
                    ))}
                </div>
            </div>
        ));

        return (
            <div className="container-fluid">
                <Header onLogin={onLogin} user={user} isAdmin={isDoctorsInArchive}  isPatient={isDoctorsForPatient} />

                {/*if isDoctorsInArchive = true react will render SearchComponent*/}
                {isDoctorsInArchive &&
                    <SearchComponent refreshState={this.refreshDoctors}
                                     placeholder="Поиск по врачам"
                                     title="Поиск по фамилии, имени, отчеству, отделу и специальности"
                                     isDoctorArchive={true}
                    />
                }
                {groups}
            </div>
        );
    }
}