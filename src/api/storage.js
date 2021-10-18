import consts from "../consts"
import { api_call, buildUrl } from "../utils/helper"

export const StorageApi = {
    get_all_storage(owner, offset = 0, limit = 100) {
        const params = {
            owner,
            offset,
            limit
        }
        return api_call(
            "GET",
            buildUrl(consts.GET_ALL_STORAGE, params),
        )
    }
}