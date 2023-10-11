import styles from '../styles/BookmarkCategoryMenu.module.css';
import Svg from './Svg';


function BookmarkCategoryMenu(props) {
    const {
        openMenuId,
    } = props.toggleBookmarkCategoryMenuHook;

    const {
        toggleAddBookmarkFormVisibility,
    } = props.bookmarkFormHook;

    const {
        toggleEditBookmarkCategoryFormVisibility
    } = props.editBookmarkCategoryFormHook;

    const {
        isBookmarkCategoryMarkedForDeletion,
        markBookmarkCategoryForDeletion
    } = props.markBookmarkCategoryForDeletionHook;

    const confirmBookmarkCategoryDeletion = async (event) => {
        event.preventDefault();
        event.stopPropagation();

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
            const grouped_categories = (await response.json()).categories;
            props.setBookmarkCategoryGroups(grouped_categories);
        }
    }

    return (
        <ul className={`${styles.actions} ${openMenuId == props.category.id ? styles.open : ''}`}>
            <li key={props.category.id + 'add'} className={styles.action} onClick={toggleAddBookmarkFormVisibility}>
                <Svg content={<><path d="M5 12h14"/><path d="M12 5v14"/></>}/>
                <span className={styles.add}>Add bookmark</span>
            </li>
            <li key={props.category.id + 'edit'} className={styles.action} onClick={toggleEditBookmarkCategoryFormVisibility}>
                <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                <span className={styles.edit}>Edit category</span>
            </li>
            {isBookmarkCategoryMarkedForDeletion ? (
            <li key={props.category.id + 'confirm'} className={styles.action} onClick={confirmBookmarkCategoryDeletion}>
                <Svg content={<><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>}/>
                <span className={styles.confirm}>Click to confirm</span>
            </li>
            ): (
            <li key={props.category.id + 'delete'} className={styles.action} onClick={markBookmarkCategoryForDeletion} data-delete-action>
                <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                <span className={styles.delete}>Delete category</span>
            </li>
            )}
        </ul>
    );
  }

  export default BookmarkCategoryMenu;