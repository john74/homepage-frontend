"use client";


import styles from '../styles/BookmarkCategoryGroups.module.css';
import AddBookmarkForm from './AddBookmarkForm';
import BookmarkCategoryGroup from './BookmarkCategoryGroup';
import { useMenuToggle } from '@hooks';
import { useBookmarkForm } from '@hooks';
import { useState } from 'react';


function BookmarkCategoryGroups({ bookmarkCategoryGroups, bookmarksData }) {
    const [bookmarks, setBookmarks] = useState(bookmarksData);
    const { openMenuId, toggleMenu } = useMenuToggle();
    const { isFormVisible, toggleFormVisibility} = useBookmarkForm();

    return (
        <>
        {isFormVisible && <AddBookmarkForm categoryId={openMenuId} setBookmarks={setBookmarks} existingBookmarks={bookmarks} />}
        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {bookmarkCategoryGroups.map((categoryGroup, index) => (
                <BookmarkCategoryGroup
                key={`bookmark-category-group-${index}`}
                categoryGroup={categoryGroup}
                bookmarks={bookmarks}
                openMenuId={openMenuId}
                toggleMenu={toggleMenu}
                toggleFormVisibility={toggleFormVisibility}
                />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups