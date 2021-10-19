import consts from "../consts"
import { api_call } from "../utils/helper"

export const TypeApi = {
    get_all_type() {
        return api_call(
            "GET",
            consts.GET_ALL_TYPE,
        )
    }
}