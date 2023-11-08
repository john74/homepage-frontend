import styles from '../styles/BookmarkCategoryGroups.module.css';
import {
    CategoriesGroup
} from './BookmarkParts';

function BookmarkCategoryGroups(props) {
    const groups = props.bookmarkCategoryGroups;

    return (
        <>
        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {groups.map((group, index) => (
                <CategoriesGroup key={`bookmark-category-group-${index}`} styles={styles} group={group} {...props} />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups