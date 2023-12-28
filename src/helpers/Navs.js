import {ADMIN_ARTICLES_PATH, ADMIN_PROFILE_PATH, ARTICLES_PATH, CONTACT_PATH, HOME_PATH} from "@/helpers/Slugs";

export const MAIN_NAVS = [
    {
        path: HOME_PATH,
        title: "Home page link",
        displayName: "Home"
    },
    {
        path: CONTACT_PATH,
        title: "Contact us page link",
        displayName: "Contact US"
    },
    {
        path: ARTICLES_PATH,
        title: "Tax articles page link",
        displayName: "Tax Articles"
    },
]

export const ADMIN_NAVS = [
    {
        path: ADMIN_ARTICLES_PATH,
        title: "Admin dashboard page link",
        displayName: "Articles"
    },
    {
        path: ADMIN_PROFILE_PATH,
        title: "Admin profile page link",
        displayName: "Profile"
    },
]