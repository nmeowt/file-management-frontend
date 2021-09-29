import consts from "../consts";
import { api_call } from "../utils/helper";

export default class Auth {
    login(data) {
        return api_call(
            "POST",
            consts.API_LOGIN_USER,
            {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data
        );
    }
}
