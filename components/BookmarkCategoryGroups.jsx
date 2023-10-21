import styles from '../styles/BookmarkCategoryGroups.module.css';
import {
    BookmarkCategoryGroup,
} from '@components';




function BookmarkCategoryGroups(props) {
    return (
        <>
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