import styles from '../styles/BookmarkCategoryGroups.module.css';
import {
    AddBookmarkForm, EditBookmarkCategoryForm,
    EditBookmarkForm, BookmarkCategoryGroup,
} from '@components';




function BookmarkCategoryGroups(props) {
    const {
        formName
    } = props.formVisibilityHook;

    return (
        <>
        {formName == "addBookmarkForm" && ( <AddBookmarkForm {...props} /> )}

        {formName == "editBookmarkCategoryForm" && ( <EditBookmarkCategoryForm {...props} /> )}

        {formName == "editBookmarkForm" && ( <EditBookmarkForm {...props} /> )}

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