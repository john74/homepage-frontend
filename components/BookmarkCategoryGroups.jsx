"use client";


import styles from '../styles/BookmarkCategoryGroups.module.css';
import AddBookmarkForm from './AddBookmarkForm';
import BookmarkCategoryGroup from './BookmarkCategoryGroup';
import { useToggleBookmarkCategoryMenu } from '@hooks';
import { useBookmarkForm } from '@hooks';
import { useState } from 'react';
import { useEditBookmarkCategoryForm } from '@hooks';
import EditBookmarkCategoryForm from './EditBookmarkCategoryForm';
import { useMarkBookmarkCategoryForDeletion } from '@hooks';


function BookmarkCategoryGroups({ bookmarkCategoryGroupsData, bookmarksData }) {
    const [bookmarks, setBookmarks] = useState(bookmarksData);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(bookmarkCategoryGroupsData);
    const { lastSelectedCategoryId, openMenuId, toggleMenu, menuRef } = useToggleBookmarkCategoryMenu();
    const { isFormVisible, setIsFormVisible, toggleAddBookmarkFormVisibility} = useBookmarkForm();
    const {
        isEditBookmarkCategoryFormVisible,
        setIsEditBookmarkCategoryFormVisible,
        toggleEditBookmarkCategoryFormVisibility
    } = useEditBookmarkCategoryForm();
    const {
        isBookmarkCategoryMarkedForDeletion,
        setIsBookmarkCategoryMarkedForDeletion,
        markBookmarkCategoryForDeletion
    } = useMarkBookmarkCategoryForDeletion()

    return (
        <>
        {isFormVisible && (
        <AddBookmarkForm
        categoryId={lastSelectedCategoryId}
        setBookmarks={setBookmarks}
        existingBookmarks={bookmarks}
        setIsFormVisible={setIsFormVisible}
        />
        )}

        {isEditBookmarkCategoryFormVisible && (
        <EditBookmarkCategoryForm
        categoryId={lastSelectedCategoryId}
        setIsEditBookmarkCategoryFormVisible={setIsEditBookmarkCategoryFormVisible}
        setBookmarkCategoryGroups={setBookmarkCategoryGroups}
        />
        )}

        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {bookmarkCategoryGroups.map((categoryGroup, index) => (
                <BookmarkCategoryGroup
                key={`bookmark-category-group-${index}`}
                setBookmarkCategoryGroups={setBookmarkCategoryGroups}
                categoryGroup={categoryGroup}
                bookmarks={bookmarks}
                openMenuId={openMenuId}
                toggleMenu={toggleMenu}
                menuRef={menuRef}
                toggleAddBookmarkFormVisibility={toggleAddBookmarkFormVisibility}
                toggleEditBookmarkCategoryFormVisibility={toggleEditBookmarkCategoryFormVisibility}
                isBookmarkCategoryMarkedForDeletion={isBookmarkCategoryMarkedForDeletion}
                markBookmarkCategoryForDeletion={markBookmarkCategoryForDeletion}
                />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups