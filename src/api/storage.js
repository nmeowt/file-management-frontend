import consts from "../consts"
import { api, buildUrl, getCookie } from "../utils/helper"

export const StorageApi = {
    get_storage_by_id(id) {
        const params = {
            id
        }
        return api(
            "GET",
            buildUrl(consts.STORAGE, params),
        )
    },
    get_all_folder(parent, offset = 0, limit = 100) {
        const params = {
            parent,
            offset,
            limit
        }
        return api(
            "GET",
            buildUrl(consts.FOLDER, params),
            null,
            null,
            getCookie(consts.STORAGE_KEY),
            true
        )
    },
    create_new_folder(data) {
        return api(
            "POST",
            consts.FOLDER,
            {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data,
            getCookie(consts.STORAGE_KEY),
            true
        )
    },
    get_all_file(parent, offset = 0, limit = 100) {
        const params = {
            parent,
            offset,
            limit
        }
        return api(
            "GET",
            buildUrl(consts.FILE, params),
            null,
            null,
            getCookie(consts.STORAGE_KEY),
            true
        )
    },
    create_new_file(data) {
        return api(
            "POST",
            consts.FILE,
            {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data,
            getCookie(consts.STORAGE_KEY),
            true
        )
    },
    upload_file(data) {
        return api(
            "POST",
            consts.UPLOAD_FILE,
            {},
            data,
            getCookie(consts.STORAGE_KEY),
            true
        )
    },
    download_folder(id) {
        const params = {
            id
        }
        return api(
            "GET",
            buildUrl(consts.DOWNLOAD_FOLDER, params),
            {},
            null,
            getCookie(consts.STORAGE_KEY),
            true
        )
    }
}