import {User} from "../models/User";
import {LOGIN_SET, PATIENT_SET} from "./ActionTypes";
import {Action, handleActions, ReducerMap} from "redux-actions";
import {combineReducers, Reducer} from 'redux'
import {AppState, getInitialState} from "./AppState";
import {Patient} from "../models/Patient";

// UserReducer
type UserActionState = User//current state
type UserActionData = User//action
const initialUserState = getInitialState().user;

const UsersReducer = handleActions<UserActionState, UserActionData>({

    [LOGIN_SET]: (currentState: UserActionState, action: Action<User>): UserActionState => {
        const u = action.payload || initialUserState; //copy current state
        const newUser = new User(u.email, u.role);
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
        return new Patient(p.id, p.surname, p.name, p.patronymic, p.gender, p.email, p.phone, p.address, p.password, p.birthday);
    },

} as ReducerMap<PatientActionState, PatientActionData>, initialPatientState);

// RootReducer
const rootReducer: Reducer<AppState> = combineReducers({
    user: UsersReducer,
    patient: PatientReducer
});

export default rootReducer