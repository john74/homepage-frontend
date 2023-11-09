import { authOptions } from "@app/api/auth/[...nextauth]/route";


async function getData(url, session) {
    const initOptions = {
        cache: "no-store",
        method: "GET",
        headers: {
            authorization: `JWT ${session?.user.accessToken}`,
        },
    }
    const response = await fetch(url, initOptions);

    if (response.status == 401) {
        let newAccessToken = authOptions.callbacks.refreshAccessToken();
        session.user.accessToken = await newAccessToken;
        return getData(url, session);
    }

    return response.status == 200 ? response.json() : null;
}

export default getData;