"use client";

import styles from '../styles/Bookmarks.module.css';


function Bookmarks({groupedBookmarkCategories, bookmarks}) {
    return (
        <div className={styles.bookmarkCategories}>
            <div className={styles.wrapper}>
            {groupedBookmarkCategories.map((categoryGroup, index) => (
                <div key={`category-group-${index}`} className={styles.categoryGroup}>
                    {categoryGroup.map(category => (
                        <div key={category.id} className={styles.category}>
                            <h1 className={styles.title} style={{ backgroundColor: category.color }}>{category.name}</h1>
                            <div className={styles.bookmarks}>
                                {bookmarks[category.id] && bookmarks[category.id].map(bookmark => (
                                    <div className={styles.bookmark} key={bookmark.id}>
                                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                                            {bookmark.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Bookmarks