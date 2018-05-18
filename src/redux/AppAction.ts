import {DOCTOR_SET, LOGIN_SET, PATIENT_SET} from "./ActionTypes";
import {User} from "../models/User";
import {Patient} from "../models/Patient";
import {Doctor} from "../models/Doctor";
export function actionChangeLogin(user: User): any {
    return {
        type: LOGIN_SET,
        payload: user
    }
}

export function actionChangePatient(patient: Patient): any {
    return {
        type: PATIENT_SET,
        payload: patient
    }
}

export function actionChangeDoctor(doctor: Doctor): any {
    return {
        type: DOCTOR_SET,
        payload: doctor
    }
}
