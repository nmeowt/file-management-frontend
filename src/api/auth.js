import consts from "../consts";
import { api } from "../utils/helper";

export const Auth = {
    login(data, setError, setIsLogined) {
        return api(
            "POST",
            consts.API_LOGIN_USER,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data
        ).then((result) => {
            if (result.status === 'false') {
                setError(prev => ([...prev, result.message]));
                setIsLogined(false);
            } else {
                setIsLogined(true);
                setError([]);
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}
