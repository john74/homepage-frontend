import { NextResponse } from "next/server";


export function stackMiddlewares(middlewareFunctions, index=0) {
    const currentFunction = middlewareFunctions[index];
    if (!currentFunction) {
        return () => NextResponse.next();
    }

    const nextMiddleware = stackMiddlewares(middlewareFunctions, index + 1);
    return currentFunction(nextMiddleware);
}