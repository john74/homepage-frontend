import styles from '../styles/BookmarkCategoryMenu.module.css';
import Svg from './Svg';


function BookmarkCategoryMenu(props) {
    const {
        openMenuId,
    } = props.toggleMenuHook;

    const {
        toggleAddBookmarkFormVisibility,
    } = props.bookmarkFormHook;

    const {
        toggleEditBookmarkCategoryFormVisibility
    } = props.editBookmarkCategoryFormHook;

    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const confirmBookmarkCategoryDeletion = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        unmark();
        const initOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"ids": [props.category.id]})
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-delete-categories/',
            initOptions
          )

        if (response.ok) {
            const response_data = await response.json();
            const categories = response_data.categories;
            const shortcuts = response_data.shortcuts;
            props.setBookmarkCategoryGroups(categories);
            props.setShortcuts(shortcuts);
        }
    }

    return (
        <ul className={`${styles.actions} ${openMenuId == props.category.id ? styles.open : ''}`}>
            <li key={props.category.id + 'add'} className={styles.action} onClick={toggleAddBookmarkFormVisibility}>
                <Svg content={<><path d="M5 12h14"/><path d="M12 5v14"/></>}/>
                <span className={styles.add}>Add bookmark</span>
            </li>
            <li key={props.category.id + 'edit'} className={styles.action} onClick={() => toggleEditBookmarkCategoryFormVisibility(props.category)}>
                <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                <span className={styles.edit}>Edit category</span>
            </li>
            {isMarkedForDeletion ? (
            <li key={props.category.id + 'confirm'} className={styles.action} onMouseLeave={unmark} onClick={confirmBookmarkCategoryDeletion}>
                <Svg content={<><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>}/>
                <span className={styles.confirm}>Click to confirm</span>
            </li>
            ): (
            <li key={props.category.id + 'delete'} className={styles.action} onClick={() => markForDeletion(props.category.id)} data-delete>
                <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                <span className={styles.delete}>Delete category</span>
            </li>
            )}
        </ul>
    );
  }

  export default BookmarkCategoryMenu;