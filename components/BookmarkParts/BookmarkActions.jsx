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
                <Button className={styles.editButton} title="Edit" onClick={() => openForm("editBookmarkForm", bookmark)}>Edit</Button>
                {isMarkedForDeletion !== bookmark.id ? (
                    <Button className={styles.deleteButton} title="Delete" onClick={() => markForDeletion(bookmark.id)}>Delete</Button>
                ) : (
                    <Button className={styles.confirmButton} title="Confirm" onMouseLeave={unmark} onClick={(event) => confirmBookmarkDeletion(event, bookmark.id)}>Confirm</Button>
                )}
            </div>
            <div className={styles.icon}>
                <Svg class={styles.svg} content={<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>}/>
            </div>
        </div>
        </>
    );
  }

export default BookmarkActions;