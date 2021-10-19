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
            buildUrl(consts.STORAGE, params),
        )
    },
    create_new_storage(data) {
        return api_call(
            "POST",
            consts.STORAGE,
            {
                'content-type': 'multipart/form-data'
            },
            data
        )

    }
}