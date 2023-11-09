import { refreshAccessToken } from "@lib";


export async function DELETE(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const data = await request.json();
    const initOptions = {
        cache: 'no-store',
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(data)
    };

    let response = await fetch(process.env.BACKEND_SEARCH_ENGINES_DELETE_URL, initOptions);

    return Response.json(await response.json());
}