import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { getData } from "@lib";

import { LeftSidebar } from "@components";


const HomePage = async () => {
    let session = await getServerSession(authOptions);
    const shortcuts = await getData(process.env.BACKEND_SHORTCUTS_URL, session);
    const bookmarkCategories = await getData(process.env.BACKEND_BOOKMARK_CATEGORIES_URL, session);
    const bookmarks = await getData(process.env.BACKEND_BOOKMARKS_URL, session);
    const searchEngines = await getData(process.env.BACKEND_SEARCH_ENGINES_URL, session);


    return (
        <LeftSidebar shortcuts={shortcuts}/>
    )
}

export default HomePage;