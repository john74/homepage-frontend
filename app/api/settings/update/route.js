import { refreshAccessToken } from "@lib";

export async function PUT(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const body = await request.json();
    const initOptions = {
        method: "PUT",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(body)
    };

    let response = await fetch('http://127.0.0.1:8000/api/settings/update/', initOptions);
    return Response.json(await response.json());
}