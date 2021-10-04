import { useState } from "react";

export const api_call = async function (
    method,
    url,
    headers = null,
    body = null,
    authenReqired = false
) {
    if (authenReqired) {
        return;
    }

    let bodi = body ? body : null;
    let config = {
        method,
        headers,
        mode: "cors"
    };
    if (body) {
        config = { ...config, body: bodi };
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