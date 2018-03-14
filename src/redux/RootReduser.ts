import {User} from "../models/User";
import {LOGIN_SET} from "./ActionTypes";
import {Action, handleActions, ReducerMap} from "redux-actions";
import {combineReducers, Reducer} from 'redux'
import {AppState, getInitialState} from "./AppState";

// UserReducer
type UserActionState = User//current state
type UserActionData = User//action
const initialUserState = getInitialState().user;

const UsersReducer = handleActions<UserActionState, UserActionData>({

    [LOGIN_SET]: (currentState: UserActionState, action: Action<User>): UserActionState => {
        const u = action.payload || initialUserState; //copy current state
        const newUser = new User(u.email, u.role);
        return newUser
    },

} as ReducerMap<UserActionState, UserActionData>, initialUserState);

// RootReducer
const rootReducer: Reducer<AppState> = combineReducers({
    user: UsersReducer
});

export default rootReducer