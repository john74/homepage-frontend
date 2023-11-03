"use client";

import { useState } from 'react';

import {
    useMarkForDeletion, useToggleMenu,
    useFormVisibility, useSelectSearchEngine,
} from '@hooks';

import {
    LeftSidebar, WebSearch, GeneralMenu, FormsContainer,
    BookmarkCategoryGroups, EmptyBookmarkCategories,
    Weather,
} from "@components";


const HomePageContainer = (props) => {
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(props.bookmarkCategoryGroups);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const [searchEngines, setSearchEngines] = useState(props.searchEngines);
    const [weatherData, setWeatherData] = useState(props.weatherData);
    const markForDeletionHook = useMarkForDeletion();
    const toggleMenuHook = useToggleMenu();
    const formVisibilityHook = useFormVisibility();
    const selectSearchEngineHook = useSelectSearchEngine();

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        setWeatherData, bookmarkCategoryGroups, bookmarks, shortcuts, searchEngines,
        toggleMenuHook, markForDeletionHook, formVisibilityHook,
        selectSearchEngineHook, weatherData,
    }

    return (
        <>
        <div id="home">
            <FormsContainer {...props} />
            <GeneralMenu {...props} />
            <div id="left">
                <LeftSidebar {...props} />
            </div>
            <div id="right">
                <Weather {...props} />
                <WebSearch {...props} />
                {bookmarkCategoryGroups.length ? <BookmarkCategoryGroups {...props} /> : <EmptyBookmarkCategories {...props} />}
            </div>
        </div>
        </>
    )
}

export default HomePageContainer;