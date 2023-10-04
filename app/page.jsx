import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { getData } from "@lib";
import { groupData } from "@lib";

import { LeftSidebar } from "@components";
import { WebSearch } from "@components";
import { BookmarkCategoryGroups } from "@components";


const HomePage = async () => {
    let session = await getServerSession(authOptions);
    const shortcuts = await getData(process.env.BACKEND_SHORTCUTS_URL, session);
    const bookmarkCategories = await getData(process.env.BACKEND_BOOKMARK_CATEGORIES_URL, session);
    const bookmarks = await getData(process.env.BACKEND_BOOKMARKS_URL, session);
    const searchEngines = await getData(process.env.BACKEND_SEARCH_ENGINES_URL, session);
    let bookmarkCategoryGroups = groupData(bookmarkCategories, 6);

    const props = {
        shortcuts,
        searchEngines,
        bookmarkCategoryGroups,
        bookmarks
    };

    return (
        <div id="home">
            <div id="left">
                <LeftSidebar {...props} />
            </div>
            <div id="right">
                <WebSearch {...props} />
                <BookmarkCategoryGroups {...props} />
            </div>
        </div>
    )
}

export default HomePage;