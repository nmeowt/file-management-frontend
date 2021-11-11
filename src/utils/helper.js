import { useState } from "react";

export const api = async function (
    method,
    url,
    headers = null,
    body = null,
    authenReqired = false
) {
    if (authenReqired) {
        return;
    }

    let config = null;
    let bodi = body ? body : null;

    if (body) {
        config = {
            method,
            headers,
            mode: "cors",
            credentials: 'include',
            body: bodi
        };
    }

    let result = fetch(url, config).then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });

    return result;
};

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export const buildUrl = (url, parameters) => {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs +=
                encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }

    return url;
}

export const toUpperCaseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const convertFormBody = (data) => {
    let formBody = []

    for (const name in data) {
        formBody.push(name + "=" + data[name])
    }
    formBody = formBody.join("&")
    return formBody
}


export function httpClient(path, options) {
    let url;
    let extraHeaders = {};

    // if (/^https?:\/\//.test(path)) {
    //     url = new URL(path);
    // } else {
    //     url = new URL(`${SERVER_URL}${path}`);
    // }

    // if (options.qs) {
    //     Object.keys(options.qs)
    //         .filter((key) => {
    //             return !isNullOrUndefined(options.qs[key]) && options.qs[key] !== '';
    //         })
    //         .forEach(key => url.searchParams.append(key, options.qs[key]));
    // }

    // options = Object.assign({
    //     mode: 'cors',
    //     credentials: 'include',
    // }, options);

    // options.headers = {
    //     ...options.headers,
    //     ...extraHeaders,
    // };

    // return fetch(url, options)
    //     .then(responseToJson)
    //     .then(validateResponse);
}