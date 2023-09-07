import { NextResponse } from 'next/server';


export async function middleware(request, event) {
    const publicPaths = ["/sign-in", "/sign-up"];
    const path = request.nextUrl.pathname;
    const isPublicPath = publicPaths.includes(path);

    const refreshToken = request.cookies.get('refreshToken')?.value;
    // Allow unauthenticated users to access public pages for signing in and signing up.
    if (!refreshToken && isPublicPath) return NextResponse.next();
    // Prevent authenticated user to visit public pages.
    if (refreshToken && isPublicPath) return NextResponse.redirect(new URL('/', request.url));
    // If no refreshToken exists (indicating either no sign-in or an expired refreshToken),
    // delete session cookies and redirect to the sign-in page.
    if (!refreshToken) {
        const response = NextResponse.redirect(new URL('/sign-in', request.url));
        const sessionCookies = request.cookies.getAll();
        sessionCookies.forEach(cookie => {
            response.cookies.delete(cookie.name);
        });
        return response;
    }

    // If no accessToken exists (indicating expiration), obtain a new one using the refreshToken,
    // set the new accessToken in the header to fulfill the incoming request,
    // and replace the expired accessToken with the valid one.
    const accessToken = request.cookies.get('accessToken')?.value;
    if (!accessToken) {
        const res = NextResponse.redirect(new URL(path, request.url));
        await fetch(process.env.BACKEND_REFRESH_TOKEN_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"refresh":refreshToken})
        })
        .then(response => response.json())
        .then(data => {
            request.headers.set("accessToken", data.access);
            res.cookies.set({
                name: "accessToken",
                value: data.access,
                maxAge: parseInt(process.env.ACCESS_TOKEN_LIFETIME), // seconds
                httpOnly: true,
                path: "/"
            });
        })
        return res;
    }

}


export const config = {
  matcher: ['/', '/sign-in', '/sign-up'],
}

