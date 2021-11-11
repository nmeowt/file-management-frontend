import consts from "../consts"
import { api, buildUrl } from "../utils/helper"

export const StorageApi = {
    get_all_storage(parent, offset = 0, limit = 100) {
        const params = {
            parent,
            offset,
            limit
        }
        return api(
            "GET",
            buildUrl(consts.STORAGE, params),
        )
    },
    get_all_folder(offset = 0, limit = 100) {
        const params = {
            offset,
            limit
        }
        return api(
            "GET",
            buildUrl(consts.FOLDER, params),
        )
    },
    create_new_folder(data) {
        return api(
            "POST",
            consts.FOLDER,
            {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data
        )
    },
    get_all_file(offset = 0, limit = 100) {
        const params = {
            offset,
            limit
        }
        return api(
            "GET",
            buildUrl(consts.FILE, params),
        )
    },
    create_new_file(data) {
        return api(
            "POST",
            consts.FILE,
            {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data
        )
    },
    upload_file(data) {
        return api(
            "POST",
            consts.UPLOAD_FILE,
            {},
            data
        )
    }
}