import React, { useState } from "react";

export const api = async function (
    method,
    url,
    headers = null,
    body = null,
    bearerToken,
    authenReqired = false
) {
    if (authenReqired && !bearerToken) {
        return;
    }

    if (bearerToken) {
        headers = { ...headers, Authorization: `Bearer ${bearerToken}` };
    }

    let config = {
        headers,
        method,
        mode: "cors",
        withCredentials: true,
        credentials: 'include',
    }

    let bodi = body ? body : null;

    if (body) {
        config = {
            ...config,
            body: bodi
        };
    }

    return fetch(url, config).then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    })
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

export const Separator = ({ children, ...props }) => (
    <span style={{ color: '#e4798d' }} {...props}>
        {children}
    </span>
)

export const getCookie = (name) => {
    let cookieValue = "";
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}