import {
    NoBookmarks, BookmarkActions,
} from '.';


function CategoryBody(props) {
    const styles = props.styles;
    const category = props.category;
    const bookmarks = props.bookmarks[category.id];

    if (!bookmarks?.length) {
        return <NoBookmarks styles={styles} {...props} />;
    }

    return (
        <div className={styles.bookmarks}>
            {bookmarks.map(bookmark => (
                <div className={styles.bookmark} key={bookmark.id}>
                    <a className={styles.name} href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.name}</a>
                    <BookmarkActions styles={styles} bookmark={bookmark} {...props} />
                </div>
            ))}
        </div>
    );
}

export default CategoryBody;