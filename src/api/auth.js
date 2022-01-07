import consts from "../consts";
import { api } from "../utils/helper";
import Cookies from 'universal-cookie';

const hourToExpire = 24
export const Auth = {
    login(data, setError, setIsLogined) {
        return api(
            "POST",
            consts.API_LOGIN_USER,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data
        ).then((response) => {
            if (response.token === 'null') {
                setError(prev => ([...prev, "wrong username or password"]));
                setIsLogined(false);
            } else {
                const cookies = new Cookies();
                let d = new Date();
                d.setTime(d.getTime() + (hourToExpire * 60 * 60* 1000));
                cookies.set("token", response.token, {path: "/", expires: d});
                setIsLogined(true);
                setError([]);
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}
