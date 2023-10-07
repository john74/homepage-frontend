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
import { useEditBookmarkForm } from '@hooks';
import { EditBookmarkForm } from '@components';


function BookmarkCategoryGroups(props) {
    const [bookmarks, setBookmarks] = useState(props.bookmarks);
    const [bookmarkCategoryGroups, setBookmarkCategoryGroups] = useState(props.bookmarkCategoryGroups);
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
    } = useMarkBookmarkCategoryForDeletion();
    const {
        isEditBookmarkFormVisible,
        setIsEditBookmarkFormVisible,
        toggleEditBookmarkFormVisibility,
        selectedBookmarkForEditing
    } = useEditBookmarkForm();

    props = {
        bookmarkCategoryGroups,
        lastSelectedCategoryId,
        setBookmarks,
        bookmarks,
        setIsFormVisible,
        setIsEditBookmarkCategoryFormVisible,
        setBookmarkCategoryGroups,
        openMenuId,
        toggleMenu,
        menuRef,
        toggleAddBookmarkFormVisibility,
        toggleEditBookmarkCategoryFormVisibility,
        isBookmarkCategoryMarkedForDeletion,
        markBookmarkCategoryForDeletion,
        setIsEditBookmarkFormVisible,
        toggleEditBookmarkFormVisibility,
        selectedBookmarkForEditing
    }

    return (
        <>
        {isFormVisible && ( <AddBookmarkForm {...props} /> )}

        {isEditBookmarkCategoryFormVisible && ( <EditBookmarkCategoryForm {...props} /> )}

        {isEditBookmarkFormVisible && ( <EditBookmarkForm {...props} /> )}

        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {bookmarkCategoryGroups.map((categoryGroup, index) => (
                <BookmarkCategoryGroup key={`bookmark-category-group-${index}`} categoryGroup={categoryGroup} {...props} />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups