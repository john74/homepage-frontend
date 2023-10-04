import styles from '../styles/BookmarkCategoryGroup.module.css';
import BookmarkCategory from "./BookmarkCategory";


function BookmarkCategoryGroup(props) {
    return (
      <div className={styles.bookmarkCategoryGroup}>
        {props.categoryGroup.map(category => (
          <BookmarkCategory key={category.id} category={category} {...props} />
        ))}
      </div>
    );
  }

  export default BookmarkCategoryGroup;