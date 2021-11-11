import consts from "../consts"
import { api } from "../utils/helper"

export const TypeApi = {
    get_all_type() {
        return api(
            "GET",
            consts.GET_ALL_TYPE,
        )
    }
}