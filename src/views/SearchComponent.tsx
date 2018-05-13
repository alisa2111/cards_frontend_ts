import * as React from "react";

interface Props {
    isDoctor?:boolean;
    isDoctorArchive?:boolean;
    isPatient?:boolean;
    isPatientArchive?:boolean;
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
        fetch(`http://localhost:8080/api/doctors/search?match=${input}`, {
            method: 'get',
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
        fetch(`http://localhost:8080/api/archive/doctors/search?match=${input}`, {
            method: 'get',
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
        fetch(`http://localhost:8080/api/patients/search?match=${input}`, {
            method: 'get',
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
        fetch(`http://localhost:8080/api/archive/patients/search?match=${input}`, {
            method: 'get',
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

    setStateInput(event: any) {
        this.setState({input: event.target.value});
    }

    render() {
        const {title, placeholder,
            isDoctor = false, isDoctorArchive = false,
            isPatient = false, isPatientArchive = false} = this.props;
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
                            }
                        }}
                >Поиск
                </button>
            </div>
        );
    }
}