import {LOGIN_SET} from "./ActionTypes";
import {User} from "../models/User";
export function actionChangeLogin(user: User): any {
    return {
        type: LOGIN_SET,
        payload: user
    }
}