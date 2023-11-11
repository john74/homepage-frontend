export async function POST(request) {
    const body = await request.json();
    const initOptions = {
        cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };

    let response = await fetch(
        'http://127.0.0.1:8000/api/users/sign-up/',
        initOptions,
    )
    .catch(error => {
        return {error: error}
    })

    const responseJSON = await response.json();

    if (response?.status == 400) {
        return Response.json({error: responseJSON.error});
    }

    if (responseJSON?.error || response?.status == 500) {
        return Response.json({error: "It appears that our system is currently unresponsive. Please try again later."});
    }

    return Response.json(responseJSON);
}