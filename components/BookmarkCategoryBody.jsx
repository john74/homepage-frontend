import styles from '../styles/BookmarkCategoryBody.module.css';

function BookmarkCategoryBody(props) {
    return (
        <div className={styles.bookmarks}>
            {props.bookmarks[props.category.id] && props.bookmarks[props.category.id].map(bookmark => (
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