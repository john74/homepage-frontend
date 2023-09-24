import styles from '../styles/BookmarkCategoryBody.module.css';

function BookmarkCategoryBody({ category, bookmarks }) {
    return (
        <div className={styles.bookmarks}>
            {bookmarks[category.id] && bookmarks[category.id].map(bookmark => (
                <div className={styles.bookmark} key={bookmark.id}>
                    <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                        {bookmark.name}
                    </a>
                </div>
            ))}
        </div>

    );
  }

  export default BookmarkCategoryBody;