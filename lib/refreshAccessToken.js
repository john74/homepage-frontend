async function refreshAccessToken(request) {
    const refreshToken = request.cookies.get('refreshToken')?.value;
    if (!refreshToken) return;

    const initOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"refresh": refreshToken}),
        cache: 'no-store',
    }

    let response = await fetch(`${process.env.BACKEND_REFRESH_TOKEN_URL}`, initOptions);
    let accessTokenData = await response.json();
    return accessTokenData.access;
}

export default refreshAccessToken;