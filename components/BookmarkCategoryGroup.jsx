import styles from '../styles/BookmarkCategoryGroup.module.css';
import BookmarkCategory from "./BookmarkCategory";


function BookmarkCategoryGroup({ categoryGroup, bookmarks, toggleMenu, openMenuId, menuRef, toggleAddBookmarkFormVisibility, toggleEditBookmarkCategoryFormVisibility, isBookmarkCategoryMarkedForDeletion, setIsBookmarkCategoryMarkedForDeletion }) {
    return (
      <div className={styles.bookmarkCategoryGroup}>
        {categoryGroup.map(category => (
          <BookmarkCategory
          key={category.id}
          category={category}
          bookmarks={bookmarks}
          toggleMenu={toggleMenu}
          openMenuId={openMenuId}
          menuRef={menuRef}
          toggleAddBookmarkFormVisibility={toggleAddBookmarkFormVisibility}
          toggleEditBookmarkCategoryFormVisibility={toggleEditBookmarkCategoryFormVisibility}
          isBookmarkCategoryMarkedForDeletion={isBookmarkCategoryMarkedForDeletion}
          setIsBookmarkCategoryMarkedForDeletion={setIsBookmarkCategoryMarkedForDeletion}
          />
        ))}
      </div>
    );
  }

  export default BookmarkCategoryGroup;