import styles from '../styles/BookmarkCategoryGroup.module.css';
import BookmarkCategory from "./BookmarkCategory";


function BookmarkCategoryGroup({ categoryGroup, bookmarks, toggleMenu, openMenuId, menuRef, toggleFormVisibility}) {
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
          toggleFormVisibility={toggleFormVisibility}
          />
        ))}
      </div>
    );
  }

  export default BookmarkCategoryGroup;