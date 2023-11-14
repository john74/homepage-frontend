async function refreshAccessToken(request) {
    const accessToken = request?.cookies.get("accessToken")?.value;
    if (accessToken) return accessToken;

    const refreshToken = request?.cookies.get('refreshToken')?.value;
    if (!refreshToken) return;

    const initOptions = {
        cache: "no-store",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"refresh": refreshToken}),
    }

    let response = await fetch(`${process.env.BACKEND_REFRESH_TOKEN_URL}`, initOptions);
    let accessTokenData = await response.json();
    return accessTokenData.access;
}

export default refreshAccessToken;