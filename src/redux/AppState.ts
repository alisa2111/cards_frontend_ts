import {User} from "../models/User";
import {Patient} from "../models/Patient";
export interface AppState {
    user: User
    patient: Patient
}
const user: User = new User('', '', '');//only for getInitialState
const patient: Patient = new Patient(0,'','','','','','','','','');

export const getInitialState = (): AppState => {
    return {user, patient}
};
