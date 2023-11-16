import { cookies } from "next/headers";


async function refreshAccessToken(request) {
    let accessToken = cookies().get("accessToken")?.value;
    if (accessToken) return accessToken;

    const refreshToken = cookies().get('refreshToken')?.value;
    if (!refreshToken) return;

    const initOptions = {
        cache: "no-store",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"refresh": refreshToken}),
    }

    let response = await fetch(`${process.env.BACKEND_REFRESH_TOKEN_URL}`, initOptions);
    let responseJSON = await response.json();
    accessToken = responseJSON.access;
    cookies().set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        maxAge: parseInt(process.env.ACCESS_TOKEN_LIFETIME), // seconds
        path: "/"
    })

    return accessToken;
}

export default refreshAccessToken;