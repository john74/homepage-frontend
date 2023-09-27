import styles from '../styles/BookmarkCategory.module.css';
import BookmarkCategoryHead from "./BookmarkCategoryHead";
import BookmarkCategoryBody from "./BookmarkCategoryBody";
import BookmarkCategoryMenu from "./BookmarkCategoryMenu";


function BookmarkCategory({ category, bookmarks, toggleMenu, openMenuId, menuRef, toggleFormVisibility}) {
    return (
        <div key={category.id} className={styles.bookmarkCategory}>
            <BookmarkCategoryHead category={category} toggleMenu={toggleMenu} menuRef={menuRef} />
            <BookmarkCategoryBody category={category} bookmarks={bookmarks} />
            <BookmarkCategoryMenu category={category} openMenuId={openMenuId} toggleFormVisibility={toggleFormVisibility} />
        </div>
    );
  }

  export default BookmarkCategory;