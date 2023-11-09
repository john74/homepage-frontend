"use client";

import { useState } from 'react';

import {
    useMarkForDeletion, useToggleMenu,
    useFormVisibility, useSelectSearchEngine,
} from '@hooks';

import {
    LeftSidebar, WebSearch, GeneralMenu, FormsContainer,
    BookmarkCategoryGroups, Weather,
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
    const currentDate = props.currentDate;
    const {
        formName
    } = formVisibilityHook;

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        setWeatherData, bookmarkCategoryGroups, bookmarks, shortcuts, searchEngines,
        toggleMenuHook, markForDeletionHook, formVisibilityHook,
        selectSearchEngineHook, weatherData, currentDate,
    }

    return (
        <>
        <div id="home">
            {formName && <FormsContainer {...props} />}
            <GeneralMenu {...props} />
            <div id="left">
                <LeftSidebar {...props} />
            </div>
            <div id="right">
                <Weather {...props} />
                <WebSearch {...props} />
                <BookmarkCategoryGroups {...props} />
            </div>
        </div>
        </>
    )
}

export default HomePageContainer;