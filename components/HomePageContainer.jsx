"use client";

import { useState } from 'react';
import {
    useSetDefaultSearchEngine, useToggleWebSearchMenu,
    useToggleBookmarkCategoryMenu, useBookmarkForm,
    useEditBookmarkCategoryForm, useMarkBookmarkCategoryForDeletion,
    useMarkBookmarkForDeletion, useEditBookmarkForm, useMarkShortcutForDeletion,
    useToggleGeneralMenu
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
    const toggleBookmarkCategoryMenuHook = useToggleBookmarkCategoryMenu();
    const bookmarkFormHook = useBookmarkForm();
    const editBookmarkCategoryFormHook = useEditBookmarkCategoryForm();
    const markBookmarkCategoryForDeletionHook = useMarkBookmarkCategoryForDeletion();
    const editBookmarkFormHook = useEditBookmarkForm();
    const markShortcutForDeletionHook = useMarkShortcutForDeletion();
    const toggleWebSearchMenuHook = useToggleWebSearchMenu();
    const setDefaultSearchEngineHook = useSetDefaultSearchEngine(searchEngines);
    const markBookmarkForDeletionHook = useMarkBookmarkForDeletion();
    const toggleGeneralMenuHook = useToggleGeneralMenu();

    props = {
        setSearchEngines, setBookmarks, setBookmarkCategoryGroups, setShortcuts,
        bookmarkCategoryGroups, bookmarks, shortcuts,
        setDefaultSearchEngineHook, toggleWebSearchMenuHook,
        toggleBookmarkCategoryMenuHook, bookmarkFormHook,
        editBookmarkCategoryFormHook, markBookmarkCategoryForDeletionHook,
        markBookmarkForDeletionHook, editBookmarkFormHook,
        markShortcutForDeletionHook, searchEngines, toggleGeneralMenuHook,
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