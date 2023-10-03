import styles from '../styles/BookmarkCategory.module.css';
import BookmarkCategoryHead from "./BookmarkCategoryHead";
import BookmarkCategoryBody from "./BookmarkCategoryBody";
import BookmarkCategoryMenu from "./BookmarkCategoryMenu";


function BookmarkCategory({ category, bookmarks, toggleMenu, openMenuId, menuRef, toggleAddBookmarkFormVisibility, toggleEditBookmarkCategoryFormVisibility, isBookmarkCategoryMarkedForDeletion, markBookmarkCategoryForDeletion, setBookmarkCategoryGroups }) {
    return (
        <div key={category.id} className={styles.bookmarkCategory}>
            <BookmarkCategoryHead category={category} toggleMenu={toggleMenu} menuRef={menuRef} />
            <BookmarkCategoryBody category={category} bookmarks={bookmarks} />
            <BookmarkCategoryMenu
            category={category}
            openMenuId={openMenuId}
            toggleAddBookmarkFormVisibility={toggleAddBookmarkFormVisibility}
            toggleEditBookmarkCategoryFormVisibility={toggleEditBookmarkCategoryFormVisibility}
            isBookmarkCategoryMarkedForDeletion={isBookmarkCategoryMarkedForDeletion}
            markBookmarkCategoryForDeletion={markBookmarkCategoryForDeletion}
            setBookmarkCategoryGroups={setBookmarkCategoryGroups}
            />
        </div>
    );
  }

  export default BookmarkCategory;