import {User} from "../models/User";
export interface AppState {
    user: User
}
const user: User = new User('', '');//only for getInitialState

export const getInitialState = (): AppState => {
    return {user}
};
