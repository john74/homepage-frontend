import { refreshAccessToken } from "@lib";


export async function GET(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const initOptions = {
        cache: 'no-store',
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
    };

    let response = await fetch(
        process.env.BACKEND_FRONTEND_WEATHER_URL,
        initOptions,
    )
    .catch(error => {
        return {error: error}
    })

    if (response?.error || response?.status == 500) {
        return Response.json({error: "It appears that our system is currently unresponsive. Please try again later."});
    }

    const responseJSON = await response.json();
    if (response?.status != 200) {
        return Response.json({error: responseJSON.error});
    }

    return Response.json(responseJSON);
}