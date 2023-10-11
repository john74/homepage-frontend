import styles from '../styles/BookmarkCategoryGroups.module.css';
import {
    AddBookmarkForm, EditBookmarkCategoryForm,
    EditBookmarkForm, BookmarkCategoryGroup
} from '@components';




function BookmarkCategoryGroups(props) {
    const {
        isFormVisible
    } = props.bookmarkFormHook;

    const {
        isEditBookmarkCategoryFormVisible
    } = props.editBookmarkCategoryFormHook;

    const {
        isEditBookmarkFormVisible
    } = props.editBookmarkFormHook;

    return (
        <>
        {isFormVisible && ( <AddBookmarkForm {...props} /> )}

        {isEditBookmarkCategoryFormVisible && ( <EditBookmarkCategoryForm {...props} /> )}

        {isEditBookmarkFormVisible && ( <EditBookmarkForm {...props} /> )}

        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {props.bookmarkCategoryGroups.map((categoryGroup, index) => (
                <BookmarkCategoryGroup key={`bookmark-category-group-${index}`} categoryGroup={categoryGroup} {...props} />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups