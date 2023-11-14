import { refreshAccessToken } from "@lib";


async function handleApiRequest(request) {
    const accessToken = await refreshAccessToken(request);
    const method = request.method;
    const body = await request.json();

    const initOptions = {
        cache: "no-store",
        method: method,
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
    };

    if (body) {
        initOptions.body = JSON.stringify(body);
    }

    let url = request.url.replace("http://localhost:3000", "http://127.0.0.1:8000");
    url = url.endsWith('/') ? url : url + '/';

    return await fetch(url, initOptions);
}

export default handleApiRequest;