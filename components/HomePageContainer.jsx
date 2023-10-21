"use client";

import { useState } from 'react';

import {
    useMarkForDeletion, useToggleMenu,
    useFormVisibility, useSelectSearchEngine,
} from '@hooks';

import {
    LeftSidebar, WebSearch, GeneralMenu, FormsContainer,
    BookmarkCategoryGroups, EmptyBookmarkCategories,
} from "@components";


const HomePageContainer = (props) => {
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(props.bookmarkCategoryGroups);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const [searchEngines, setSearchEngines] = useState(props.searchEngines);
    const markForDeletionHook = useMarkForDeletion();
    const toggleMenuHook = useToggleMenu();
    const formVisibilityHook = useFormVisibility();
    const selectSearchEngineHook = useSelectSearchEngine();

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        bookmarkCategoryGroups, bookmarks, shortcuts, searchEngines,
        toggleMenuHook, markForDeletionHook, formVisibilityHook,
        selectSearchEngineHook,
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
                <WebSearch {...props} />
                {bookmarkCategoryGroups.length ? <BookmarkCategoryGroups {...props} /> : <EmptyBookmarkCategories {...props} />}
            </div>
        </div>
        </>
    )
}

export default HomePageContainer;