import styles from '../styles/BookmarkCategory.module.css';
import {
    BookmarkCategoryHead, BookmarkCategoryBody,
    BookmarkCategoryMenu
} from '@components';


function BookmarkCategory(props) {
    return (
        <div key={'bookmark-category-' + props.category.id} className={styles.bookmarkCategory}>
            <BookmarkCategoryHead {...props} />
            <BookmarkCategoryBody {...props} />
            <BookmarkCategoryMenu {...props} />
        </div>
    );
  }

  export default BookmarkCategory;