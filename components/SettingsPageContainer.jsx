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
} from '@components/Settings';
import {
    useFormVisibility,
} from '@hooks';


const SettingsPageContainer = (props) => {
    const [bookmarkCategories, setBookmarkCategories] = useState(props.bookmarkCategories);
    const [bookmarkSubCategories, setBookmarkSubCategories] = useState(props.bookmarkSubCategories);
    const formVisibilityHook = useFormVisibility();
    const baseUrl = props.baseUrl;
    const { formName } = formVisibilityHook;

    props = {
        styles, bookmarkCategories, setBookmarkCategories,
        bookmarkSubCategories, setBookmarkSubCategories,
        baseUrl, formVisibilityHook,
    }

    return (
        <>
        <div className={styles.settings}>
            {formName && <FormsContainer {...props} />}
            <BookmarkCategories {...props} />
            <BookmarkSubCategories {...props} />
        </div>
        </>
    )
}

export default SettingsPageContainer;