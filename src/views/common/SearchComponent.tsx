import * as React from "react";
import config from '../../config';

interface Props {
    isDoctor?:boolean;
    isDoctorArchive?:boolean;
    isPatient?:boolean;
    isPatientArchive?:boolean;
    isRecords?:boolean;
    title?: string;
    placeholder?: string;
    refreshState?: any;
}

export default class SearchComponent extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: ''
        };
    }

    searchDoctors() {
        const {input} = this.state;
        const {refreshState} = this.props;
        fetch(`${config.urls.SEARCH_IN_DOCTORS}?match=${input}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshState)
            .catch((err: any) => {
                console.log(err)
            })
    };

    searchDoctorsArchive() {
        const {input} = this.state;
        const {refreshState} = this.props;
        fetch(`${config.urls.SEARCH_IN_ARCHIVE_DOCTORS}?match=${input}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshState)
            .catch((err: any) => {
                console.log(err)
            })
    };

    searchPatients(){
        const {input} = this.state;
        const {refreshState} = this.props;
        fetch(`${config.urls.SEARCH_IN_PATIENTS}?match=${input}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshState)
            .catch((err: any) => {
                console.log(err)
            })
    };

    searchPatientsArchive(){
        const {input} = this.state;
        const {refreshState} = this.props;
        fetch(`${config.urls.SEARCH_IN_ARCHIVE_PATIENTS}?match=${input}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshState)
            .catch((err: any) => {
                console.log(err)
            })
    };

    searchRecords() {
        const {input} = this.state;
        const {refreshState} = this.props;
        let patient = localStorage.getItem("patient");
        if (patient != null) {
            patient = JSON.parse(patient).id;
        }
        fetch(config.urls.SEARCH_IN_PATIENT_HISTORY, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/x-www-form-urlencoded"
            },
            body: "patientId=" + patient + "&match=" + input
        })
            .then((res: any) => {
                return res.json();
            })
            .then(refreshState)
            .catch((err: any) => {
                console.log(err)
            })
    };

    setStateInput(event: any) {
        this.setState({input: event.target.value});
    }

    render() {
        const {title, placeholder,
            isDoctor = false, isDoctorArchive = false,
            isPatient = false, isPatientArchive = false, isRecords = false} = this.props;
        return (
            <div className="search-div center">
                <input className="center"
                       type="text"
                       placeholder={placeholder}
                       title={title}
                       onChange={(event) => {
                           this.setStateInput(event)
                       }}
                />
                <button type="button"
                        className="btn btn-primary center"
                        onClick={() => {
                            if (isDoctor) {
                                this.searchDoctors();
                            } else if (isDoctorArchive) {
                                this.searchDoctorsArchive();
                            } else if (isPatient) {
                                this.searchPatients();
                            } else if (isPatientArchive) {
                                this.searchPatientsArchive();
                            } else if (isRecords) {
                                this.searchRecords()
                            }
                        }}
                >Поиск
                </button>
            </div>
        );
    }
}