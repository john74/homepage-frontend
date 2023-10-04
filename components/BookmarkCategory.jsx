import styles from '../styles/BookmarkCategory.module.css';
import BookmarkCategoryHead from "./BookmarkCategoryHead";
import BookmarkCategoryBody from "./BookmarkCategoryBody";
import BookmarkCategoryMenu from "./BookmarkCategoryMenu";


function BookmarkCategory(props) {
    return (
        <div key={props.category.id} className={styles.bookmarkCategory}>
            <BookmarkCategoryHead {...props} />
            <BookmarkCategoryBody {...props} />
            <BookmarkCategoryMenu {...props} />
        </div>
    );
  }

  export default BookmarkCategory;