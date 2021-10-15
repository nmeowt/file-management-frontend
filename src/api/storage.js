import consts from "../consts"
import { api_call } from "../utils/helper"

export const StorageApi = {
    get_all_storage(owner, offset = 0, limit = 100) {
        return api_call(
            "GET",
            consts.GET_ALL_STORAGE,
            {
                "Content-Type": "application/json; charset=utf-8",
            }
        )
    }
}