import { refreshAccessToken } from "@lib";


export async function DELETE(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const body = await request.json();
    const initOptions = {
        cache: 'no-store',
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(body)
    };

    let response = await fetch(
        'http://127.0.0.1:8000/api/bookmarks/bulk-delete-shortcuts/',
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