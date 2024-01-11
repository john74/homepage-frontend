import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function BookmarkSubCategories(props) {
    const styles = props.styles;
    const bookmarks = props.bookmarks;
    const subCategories = props.bookmarkSubCategories;
    const [selectedBookmarks, setSelectedBookmarks] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);
    const {
        openForm
    } = props.formVisibilityHook;

    const handleselectedSubCategory = (subCategory) => {
        setSelectedSubCategory(subCategory);
    }

    const handleselectedBookmarks = (selectedBookmark) => {
        const isSelected = selectedBookmarks.includes(selectedBookmark);
        let updatedsBookmarks = isSelected ? selectedBookmarks.filter(bookmark => bookmark != selectedBookmark) : [...selectedBookmarks, selectedBookmark];
        setSelectedBookmarks(updatedsBookmarks);
    }

    const handleDelete = async (event) => {
        if (!selectedBookmarks.length) return;

        const method = "DELETE";
        const targetEndpoint = "api/bookmarks/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": selectedBookmarks.map(bookmark => bookmark.id)};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedBookmarks = responseJSON.bookmarks;
        let bookmarks = [];
        Object.values(groupedBookmarks).forEach(group => {
            group.forEach(bookmark => {
                bookmarks.push(bookmark);
            });
        });

        setSelectedBookmarks([]);
        props.setBookmarks(bookmarks);
    }

    const handleEdit = async () => {
        // TODO
    }

    const handleCreate = async () => {
        // TODO
    }

    return (
        <>
        <div className={styles.section}>
            <h3 className={styles.title}>Bookmarks</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedBookmarks.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedBookmarks.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {subCategories.map(subCategory => (
                    <li className={styles.category} key={subCategory.id}>
                        <span onClick={() => handleselectedSubCategory(subCategory)}>{subCategory.name}</span>
                    </li>
                ))}
            </ul>
            <ul className={styles.categories}>
                {bookmarks.map(bookmark => (
                    <li className={styles.category} key={bookmark.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" checked={selectedBookmarks.includes(bookmark)} onChange={() => handleselectedBookmarks(bookmark)}/>
                            <span className={styles.name}>{bookmark.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default BookmarkSubCategories;