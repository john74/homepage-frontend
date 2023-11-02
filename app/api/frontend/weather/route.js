import { refreshAccessToken } from "@lib";


export async function GET(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const initOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        cache: 'no-store'
    };

    let response = await fetch(process.env.BACKEND_FRONTEND_WEATHER_URL, initOptions);
    return Response.json(await response.json());
}