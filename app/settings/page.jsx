import { getPageData } from "@lib";
import { SettingsPageContainer } from "@components";
import {
    headers
} from "next/headers";



const SettingsPage = async () => {
    const pageData = await getPageData('settings');
    const bookmarkCategories = pageData.categories;

    const domain = headers()?.get("x-forwarded-host");
    const protocol = headers()?.get("x-forwarded-proto");
    const baseUrl = `${protocol}://${domain}`;

    const props = {
        bookmarkCategories,
        baseUrl,
    };

    return (
        <>
        <SettingsPageContainer {...props} />
        </>
    )
}

export default SettingsPage;