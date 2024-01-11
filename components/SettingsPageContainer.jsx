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
    Bookmarks, Shortcuts,
} from '@components/Settings';
import {
    useFormVisibility,
} from '@hooks';


const SettingsPageContainer = (props) => {
    const [bookmarkCategories, setBookmarkCategories] = useState(props.bookmarkCategories);
    const [bookmarkSubCategories, setBookmarkSubCategories] = useState(props.bookmarkSubCategories);
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [shortcuts, setShortcuts] = useState(props.shortcuts);
    const baseUrl = props.baseUrl;
    const formVisibilityHook = useFormVisibility();
    const { formName } = formVisibilityHook;

    props = {
        styles, bookmarkCategories, setBookmarkCategories,
        bookmarkSubCategories, setBookmarkSubCategories,
        baseUrl, formVisibilityHook, bookmarks, setBookmarks,
        shortcuts, setShortcuts,
    }

    return (
        <>
        <div className={styles.settings}>
            {formName && <FormsContainer {...props} />}
            <BookmarkCategories {...props} />
            <BookmarkSubCategories {...props} />
            <Bookmarks {...props} />
            <Shortcuts {...props} />
        </div>
        </>
    )
}

export default SettingsPageContainer;