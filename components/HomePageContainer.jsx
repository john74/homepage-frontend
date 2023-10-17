"use client";

import { useState } from 'react';

import {
    useSetDefaultSearchEngine, useMarkForDeletion,
    useToggleMenu, useFormVisibility,
} from '@hooks';

import {
    LeftSidebar, WebSearch, GeneralMenu,
    BookmarkCategoryGroups, EmptyBookmarkCategories,
} from "@components";


const HomePageContainer = (props) => {
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(props.bookmarkCategoryGroups);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const [searchEngines, setSearchEngines] = useState(props.searchEngines);
    const setDefaultSearchEngineHook = useSetDefaultSearchEngine(searchEngines);
    const markForDeletionHook = useMarkForDeletion();
    const toggleMenuHook = useToggleMenu();
    const formVisibilityHook = useFormVisibility();

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        bookmarkCategoryGroups, bookmarks, shortcuts, searchEngines,
        setDefaultSearchEngineHook, toggleMenuHook, markForDeletionHook,
        formVisibilityHook,
    }

    return (
        <>
        <div id="home">
            <GeneralMenu {...props} />
            <div id="left">
                <LeftSidebar {...props} />
            </div>
            <div id="right">
                <WebSearch {...props} />
                {bookmarkCategoryGroups.length ? <BookmarkCategoryGroups {...props} /> : <EmptyBookmarkCategories {...props} />}
            </div>
        </div>
        </>
    )
}

export default HomePageContainer;