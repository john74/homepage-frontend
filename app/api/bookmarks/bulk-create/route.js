import { refreshAccessToken } from "@lib";
import { NextResponse } from 'next/server'

export async function POST(request) {
    let accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      accessToken = await refreshAccessToken(request);
    }

    const body = await request.json();
    const formData = body.formData;

    const initOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify(formData)
    };

    let response = await fetch('http://127.0.0.1:8000/api/bookmarks/bulk-create/', initOptions);
    const createdBookmarks = (await response.json()).bookmarks;
    const bookmarks = body.bookmarks;
    Object.keys(createdBookmarks).forEach(categoryId => {
        let newBookmarks = createdBookmarks[categoryId];
        newBookmarks.forEach(bookmark => {
            bookmarks[categoryId].push(bookmark);
        });
    });
    return NextResponse.json({bookmarks});
}