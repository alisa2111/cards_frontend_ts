import {User} from "../models/User";
import {Patient} from "../models/Patient";
import {Doctor} from "../models/Doctor";

export interface AppState {
    user: User
    patient: Patient
    doctor: Doctor
}

const user: User = new User('', '', '');//only for getInitialState
const patient: Patient = getPatient();
const doctor: Doctor = getDoctor();

export const getInitialState = (): AppState => {
    return {user, patient, doctor}
};

function getPatient(): Patient {
    let patient = localStorage.getItem("patient");
    if (patient != null) {
        return JSON.parse(patient);
    } else {
        return new Patient(0, '', '', '', '', '', '', '', '', '');
    }
}

function getDoctor(): Doctor {
    let doctor = localStorage.getItem("doctor");
    if (doctor != null) {
        return JSON.parse(doctor);
    } else {
        return new Doctor(0, '', '', '', '', '', '', '', '');
    }
}
