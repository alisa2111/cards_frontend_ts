import {User} from "../models/User";
import {Patient} from "../models/Patient";

export interface AppState {
    user: User
    patient: Patient
}

const user: User = new User('', '', '');//only for getInitialState
const patient: Patient = getPatient();

export const getInitialState = (): AppState => {
    return {user, patient}
};

function getPatient(): Patient {
    let patient = localStorage.getItem("patient");
    if (patient != null) {
        return JSON.parse(patient);
    } else {
        return new Patient(0, '', '', '', '', '', '', '', '', '');
    }
}
