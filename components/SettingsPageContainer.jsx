"use client";

import styles from '../styles/Settings.module.css';
import {
    useState,
} from 'react';
import {
    FormsContainer,
} from "@components";
import {
    BookmarkCategories, BookmarkSubCategories,
    Bookmarks, Shortcuts, SearchEngines,
} from '@components/Settings';
import {
    useFormVisibility,
} from '@hooks';


const SettingsPageContainer = (props) => {
    const [bookmarkCategories, setBookmarkCategories] = useState(props.bookmarkCategories);
    const [bookmarkSubCategories, setBookmarkSubCategories] = useState(props.bookmarkSubCategories);
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const [searchEngines, setSearchEngines] = useState(props.searchEngines);
    const baseUrl = props.baseUrl;
    const formVisibilityHook = useFormVisibility();
    const { formName } = formVisibilityHook;

    props = {
        styles, bookmarkCategories, setBookmarkCategories,
        bookmarkSubCategories, setBookmarkSubCategories,
        baseUrl, formVisibilityHook, bookmarks, setBookmarks,
        shortcuts, setShortcuts, searchEngines, setSearchEngines,
    }

    return (
        <>
        <div className={styles.settings}>
            {formName && <FormsContainer {...props} />}
            <BookmarkCategories {...props} />
            <BookmarkSubCategories {...props} />
            <Bookmarks {...props} />
            <Shortcuts {...props} />
            <SearchEngines {...props} />
        </div>
        </>
    )
}

export default SettingsPageContainer;