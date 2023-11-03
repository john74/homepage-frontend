import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { getData } from "@lib";
import { HomePageContainer } from "@components";


const HomePage = async () => {
    let session = await getServerSession(authOptions);
    const homePageData = await getData(process.env.BACKEND_HOME_URL, session);
    const shortcuts = homePageData.shortcuts;
    const bookmarkCategoryGroups = homePageData.categories;
    const bookmarks = homePageData.bookmarks;
    const searchEngines = homePageData.search_engines;
    const weatherData = homePageData.weather;

    const props = {
        shortcuts,
        searchEngines,
        bookmarkCategoryGroups,
        bookmarks,
        weatherData,
    };

    return (
        <>
        <HomePageContainer {...props} />
        </>
    )
}

export default HomePage;