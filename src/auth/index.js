import consts from "../consts";
import { api_call } from "../utils/helper";

export const Auth = {
    login(data, setError, setIsLogined) {
        return api_call(
            "POST",
            consts.API_LOGIN_USER,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data
        ).then((result) => {
            if (result.status === 'false') {
                console.log("oops");
                setError(prev => ([...prev, result.message]));
                setIsLogined(false);
            } else {
                console.log("oke");
                setIsLogined(true);
                setError([]);
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}
