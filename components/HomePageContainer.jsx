"use client";

import { useState } from 'react';
import {
    useSetDefaultSearchEngine, useToggleWebSearchMenu,
    useToggleBookmarkCategoryMenu, useBookmarkForm,
    useEditBookmarkCategoryForm, useMarkBookmarkCategoryForDeletion,
    useMarkBookmarkForDeletion, useEditBookmarkForm, useMarkShortcutForDeletion
} from '@hooks';

import {
    LeftSidebar, WebSearch,
    BookmarkCategoryGroups
} from "@components";


const HomePageContainer = (props) => {
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(props.bookmarkCategoryGroups);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const [searchEngines, setSearchEngines] = useState(props.searchEngines);
    const toggleBookmarkCategoryMenuHook = useToggleBookmarkCategoryMenu();
    const bookmarkFormHook = useBookmarkForm();
    const editBookmarkCategoryFormHook = useEditBookmarkCategoryForm();
    const markBookmarkCategoryForDeletionHook = useMarkBookmarkCategoryForDeletion();
    const editBookmarkFormHook = useEditBookmarkForm();
    const markShortcutForDeletionHook = useMarkShortcutForDeletion();
    const toggleWebSearchMenuHook = useToggleWebSearchMenu();
    const setDefaultSearchEngineHook = useSetDefaultSearchEngine(searchEngines);
    const markBookmarkForDeletionHook = useMarkBookmarkForDeletion();

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        bookmarkCategoryGroups, bookmarks, shortcuts,
        setDefaultSearchEngineHook, toggleWebSearchMenuHook,
        toggleBookmarkCategoryMenuHook, bookmarkFormHook,
        editBookmarkCategoryFormHook, markBookmarkCategoryForDeletionHook,
        markBookmarkForDeletionHook, editBookmarkFormHook,
        markShortcutForDeletionHook, searchEngines,

    }

    return (
        <>
        <div id="home">
            <div id="left">
                <LeftSidebar {...props} />
            </div>
            <div id="right">
                <WebSearch {...props} />
                <BookmarkCategoryGroups {...props} />
            </div>
        </div>
        </>
    )
}

export default HomePageContainer;