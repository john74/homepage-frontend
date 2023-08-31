import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-js-decode';


export function refreshTokenValidity(middleware) {
    return async (request, event) => {
        // Check if the refresh token has expired by comparing its expiration timestamp
        // with the current timestamp. If the refresh token has expired, it cannot be
        // used to obtain another accessToken, necessitating the user's logout.
        // The user is redirected to the sign-in page and all cookies associated with
        // the current session are deleted to perform the logout operation.
        const refreshTokenCookie = request.cookies.get('refreshToken');
        if (refreshTokenCookie) {
            const refreshToken = refreshTokenCookie.value;
            const refreshTokenPayload = jwtDecode(refreshToken).payload;
            const refreshTokenExpiration = refreshTokenPayload.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);

            // Compare the two Unix timestamps to verify if the refreshToken remains valid.
            if (refreshTokenExpiration < currentTimestamp) {
                const response = NextResponse.redirect(new URL('/', request.url));

                request.cookies.getAll().forEach(cookie => {
                    response.cookies.delete(cookie.name);
                });

                return response;
            }
        }
        return middleware(request, event);
    }
}