import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function BookmarkCategories(props) {
    const styles = props.styles;
    const categories = props.bookmarkCategories;
    const [selectedCategories, setSelectedCategories] = useState([]);
    const {
        openForm
    } = props.formVisibilityHook;

    const handleCategories = (clickedCategory) => {
        const isSelected = selectedCategories.includes(clickedCategory);
        let updatedCategoryIds = isSelected ? selectedCategories.filter(category => category != clickedCategory) : [...selectedCategories, clickedCategory];
        setSelectedCategories(updatedCategoryIds);
    }

    const handleDelete = async (event) => {
        if (!selectedCategories.length) return;

        const method = "DELETE";
        const targetEndpoint = "api/categories/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": selectedCategories.map(category => category.id)};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedCategories = responseJSON.categories;
        const categories = groupedCategories.flat();
        setSelectedCategories([]);
        props.setBookmarkCategories(categories);
    }

    const handleEdit = async () => {
        if (selectedCategories.length != 1) return;
        const category = selectedCategories[0];
        setSelectedCategories([]);
        openForm("editBookmarkCategoryForm", category);
    }

    const handleCreate = async () => {
        const method = "POST";
        const targetEndpoint = "api/categories/bulk-create/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = [{
            "name": "New Category",
            "color": "#fff"
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedCategories = responseJSON.categories;
        const categories = groupedCategories.flat();
        props.setBookmarkCategories(categories);
    }


    return (
        <>
        <div className={styles.section}>
            <h3 className={styles.title}>Bookmark categories</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedCategories.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedCategories.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {categories.map(category => (
                    <li className={styles.category} key={category.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" value={category} checked={selectedCategories.includes(category)} onChange={() => handleCategories(category)}/>
                            <span className={styles.name}>{category.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default BookmarkCategories;