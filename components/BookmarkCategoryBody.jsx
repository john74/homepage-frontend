import styles from '../styles/BookmarkCategoryBody.module.css';
import Svg from './Svg';


function BookmarkCategoryBody(props) {
    const {
        toggleEditBookmarkFormVisibility
    } = props.editBookmarkFormHook;

    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const confirmBookmarkDeletion = async (event, bookmarkId) => {
        event.preventDefault();
        event.stopPropagation();

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
        <div className={styles.bookmarks}>
            {props.bookmarks[props.category.id] ? (
                props.bookmarks[props.category.id].map(bookmark => (
                    <div className={styles.bookmark} key={bookmark.id}>
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                            {bookmark.name}
                        </a>
                        <div className={styles.actions}>
                            <span title="Edit" onClick={() => toggleEditBookmarkFormVisibility(bookmark)}>
                                <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                            </span>
                            {isMarkedForDeletion !== bookmark.id ? (
                                <span title="Delete" onClick={() => markForDeletion(bookmark.id)}>
                                    <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                                </span>
                            ) : (
                                <span className={styles.marked} title="Confirm" onMouseLeave={unmark} onClick={(event) => confirmBookmarkDeletion(event, bookmark.id)}>
                                    <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                                </span>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.noBookmarksMessage}>Edit the category by clicking the menu above.</p>
            )}
        </div>
    );
  }

  export default BookmarkCategoryBody;