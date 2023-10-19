import { refreshAccessToken } from "@lib";


export async function PUT(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const data = await request.json();
    const initOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(data)
    };

    let response = await fetch(process.env.BACKEND_SEARCH_ENGINES_UPDATE_URL, initOptions);

    return Response.json(await response.json());
}