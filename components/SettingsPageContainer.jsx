"use client";

import { useState } from 'react';
import styles from '../styles/Settings.module.css';
import { BookmarkCategories } from '@components/Settings';


const SettingsPageContainer = (props) => {
    const [bookmarkCategories, setBookmarkCategories] = useState(props.bookmarkCategories);
    const baseUrl = props.baseUrl;

    props = {
        styles, bookmarkCategories, setBookmarkCategories,
        baseUrl,
    }

    return (
        <>
        <div className={styles.settings}>
            <BookmarkCategories {...props} />
        </div>
        </>
    )
}

export default SettingsPageContainer;