import styles from '../styles/BookmarkCategoryGroups.module.css';
import {
    CategoriesGroup, EmptyGroups,
} from './BookmarkParts';


function BookmarkCategoryGroups(props) {
    const groups = props.bookmarkCategoryGroups;

    if (!groups.length) {
        return <EmptyGroups styles={styles} {...props} />;
    }

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