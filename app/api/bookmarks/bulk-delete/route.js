import { refreshAccessToken } from "@lib";
import { NextResponse } from 'next/server'

export async function DELETE(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const body = await request.json();
    const initOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(body)
    };

    let response = await fetch('http://127.0.0.1:8000/api/bookmarks/bulk-delete/', initOptions);
    return NextResponse.json(await response.json());
}