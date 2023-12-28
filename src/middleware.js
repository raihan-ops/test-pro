import {NextResponse} from "next/server";
import {ADMIN_ARTICLES_PATH, ADMIN_PATH, LOGIN_PATH} from "@/helpers/Slugs";
import {SECURED_SESSION_TOKEN_KEY, SESSION_TOKEN_KEY} from "@/helpers/utils";

export default function middleware(req) {

    const url = req.nextUrl;

    let tokenKey = SESSION_TOKEN_KEY;

    if (url.origin.startsWith("https://")) {
        tokenKey = SECURED_SESSION_TOKEN_KEY;
    }

    const session = req.cookies.get(tokenKey);

    if (session && url.pathname === LOGIN_PATH) {
        return NextResponse.redirect(`${url.origin}${ADMIN_ARTICLES_PATH}`);
    }

    if (!session && url.pathname.startsWith(ADMIN_PATH)) {
        return NextResponse.redirect(`${url.origin}${LOGIN_PATH}`);
    }

    if (url.pathname === ADMIN_PATH) {
        return NextResponse.redirect(`${url.origin}${ADMIN_ARTICLES_PATH}`);
    }

}