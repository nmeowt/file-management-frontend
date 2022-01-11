import consts from "../consts";
import { api, convertFormBody, getCookie } from "../utils/helper";
import Cookies from 'universal-cookie';

const hourToExpire = 24
export const Auth = {
    isAuthen() {
        let token = getCookie(consts.STORAGE_KEY);
        if (!token) {
            return false;
        }
        return true;
    },
    async login(data, setError, setIsLogined) {
        return api(
            "POST",
            consts.API_LOGIN_USER,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            convertFormBody(data)
        ).then((response) => {
            if (response.token === 'null') {
                setError(prev => ([...prev, "wrong username or password"]));
                setIsLogined(false);
            } else {
                const cookies = new Cookies();
                let d = new Date();
                d.setTime(d.getTime() + (hourToExpire * 60 * 60 * 1000));
                const expire = { path: "/", expires: d }
                cookies.set(consts.STORAGE_KEY, response.token, expire);
                cookies.set(consts.USER_INFO, data.username, expire)
                setIsLogined(true);
                setError([]);
            }
        }).catch((err) => {
            console.log(err)
        })
    },
    logout(setError, setIsLogined) {
        const cookies = new Cookies();
        const expire = {
            path: "/",
            expires: new Date(Date.now() - 100)
        }

        cookies.set(consts.STORAGE_KEY, null, expire);
        cookies.set(consts.USER_INFO, null, expire)
        setIsLogined(false);
        setError([]);
    }
}
