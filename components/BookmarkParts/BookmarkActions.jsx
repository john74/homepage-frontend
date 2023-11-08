"use client";

import Svg from '../Svg';
import {
    Button,
} from '@components';


function BookmarkActions(props) {
    const styles = props.styles;
    const bookmark = props.bookmark;

    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const {
        openForm
    } = props.formVisibilityHook;

    const confirmBookmarkDeletion = async (event, bookmarkId) => {
        event.preventDefault();
        event.stopPropagation();

        unmark();
        const initOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"ids": [bookmarkId]})
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-delete/',
            initOptions
          )

        if (response.ok) {
            const response_data = await response.json();
            const bookmarks = response_data.bookmarks;
            const shortcuts = response_data.shortcuts;
            props.setBookmarks({ ...bookmarks });
            props.setShortcuts(shortcuts);
        }
    }

    return (
        <>
        <div className={styles.actions}>
            <div className={styles.buttons}>
                <Button className={styles.editButton} title="Edit" onClick={() => openForm("editBookmarkForm", bookmark)}>
                    <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                    <span>Edit</span>
                </Button>
                {isMarkedForDeletion !== bookmark.id ? (
                    <Button className={styles.deleteButton} title="Delete" onClick={() => markForDeletion(bookmark.id)}>
                        <Svg content={<><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>}/>
                        <span>Delete</span>
                    </Button>
                ) : (
                    <Button className={styles.confirmButton} title="Confirm" onMouseLeave={unmark} onClick={(event) => confirmBookmarkDeletion(event, bookmark.id)}>
                        <Svg content={<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>}/>
                        <span>Confirm</span>
                    </Button>
                )}
            </div>
            <div className={styles.icon}>
                <Svg class={styles.svg} content={<><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/></>}/>
            </div>
        </div>
        </>
    );
  }

export default BookmarkActions;