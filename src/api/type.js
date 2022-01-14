import consts from "../consts"
import { api, getCookie } from "../utils/helper"

export const TypeApi = {
    get_all_type() {
        return api(
            "GET",
            consts.GET_ALL_TYPE,
            null,
            null,
            getCookie(consts.STORAGE_KEY),
            true
        )
    }
}