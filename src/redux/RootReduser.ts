import {User} from "../models/User";
import {DOCTOR_SET, LOGIN_SET, PATIENT_SET} from "./ActionTypes";
import {Action, handleActions, ReducerMap} from "redux-actions";
import {combineReducers, Reducer} from 'redux'
import {AppState, getInitialState} from "./AppState";
import {Patient} from "../models/Patient";
import {Doctor} from "../models/Doctor";

// UserReducer
type UserActionState = User//current state
type UserActionData = User//action
const initialUserState = getInitialState().user;

const UsersReducer = handleActions<UserActionState, UserActionData>({

    [LOGIN_SET]: (currentState: UserActionState, action: Action<User>): UserActionState => {
        const u = action.payload || initialUserState; //copy current state
        const newUser = new User(u.id, u.email, u.role);
        newUser.isSignedIn = u.isSignedIn;
        return newUser
    },

} as ReducerMap<UserActionState, UserActionData>, initialUserState);


//PatientReducer
type PatientActionState = Patient//current state
type PatientActionData = Patient//action
const initialPatientState = getInitialState().patient;

const PatientReducer = handleActions<PatientActionState, PatientActionData>({

    [PATIENT_SET]: (currentState: PatientActionState, action: Action<Patient>): PatientActionState => {
        const p = action.payload || initialPatientState; //copy current state
        return new Patient(p.id, p.surname, p.name, p.patronymic, p.gender, p.email, p.phoneNumber, p.address, p.password, p.birthday);
    },

} as ReducerMap<PatientActionState, PatientActionData>, initialPatientState);


//Doctor Reducer
type DoctorActionState = Doctor//current state
type DoctorActionData = Doctor//action
const initialDoctorState = getInitialState().doctor;

const DoctorReducer = handleActions<DoctorActionState, DoctorActionData>({

    [DOCTOR_SET]: (currentState: DoctorActionState, action: Action<Doctor>): DoctorActionState => {
        const d = action.payload || initialDoctorState; //copy current state
        return new Doctor(d.id, d.surname, d.name, d.patronymic, d.email, d.password, d.department, d.specialty, d.practise_date);
    },

} as ReducerMap<DoctorActionState, DoctorActionData>, initialDoctorState);


// RootReducer
const rootReducer: Reducer<AppState> = combineReducers({
    user: UsersReducer,
    patient: PatientReducer,
    doctor: DoctorReducer
});

export default rootReducer