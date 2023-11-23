import { getPageData } from "@lib";
import { HomePageContainer } from "@components";


const HomePage = async () => {
    const homePageData = await getPageData('home');
    const user = homePageData.user;
    const shortcuts = homePageData.shortcuts;
    const bookmarkCategoryGroups = homePageData.categories;
    const bookmarks = homePageData.bookmarks;
    const searchEngines = homePageData.search_engines;
    const weatherData = homePageData.weather;
    /*
        To prevent the text content mismatch warning between server-side and client-side rendering,
        obtain the current date on the server side.
        This ensures consistency when using the date across the application,
        such as in the Weather component, during the initial page render.
    */
    const currentDate = new Date();

    const props = {
        user,
        shortcuts,
        searchEngines,
        bookmarkCategoryGroups,
        bookmarks,
        weatherData,
        currentDate,
    };

    return (
        <>
        <HomePageContainer {...props} />
        </>
    )
}

export default HomePage;