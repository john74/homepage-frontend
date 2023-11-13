import { refreshAccessToken } from "@lib";


export async function POST(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const data = await request.json();
    const initOptions = {
        cache: 'no-store',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(data)
    };

    let response = await fetch(
        process.env.BACKEND_SEARCH_ENGINES_CREATE_URL,
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