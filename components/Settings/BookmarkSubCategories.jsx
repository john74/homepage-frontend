import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function BookmarkSubCategories(props) {
    const styles = props.styles;
    const subCategories = props.bookmarkSubCategories;
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const {
        openForm
    } = props.formVisibilityHook;

    const handleSubCategories = (clickedSubCategory) => {
        const isSelected = selectedSubCategories.includes(clickedSubCategory);
        let updatedCategoryIds = isSelected ? selectedSubCategories.filter(category => category != clickedSubCategory) : [...selectedSubCategories, clickedSubCategory];
        setSelectedSubCategories(updatedCategoryIds);
    }

    const handleDelete = async (event) => {
        if (!selectedSubCategories.length) return;

        const method = "DELETE";
        const targetEndpoint = "api/sub-categories/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": selectedSubCategories.map(category => category.id)};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedCategories = responseJSON.sub_categories;
        let subCategories = [];
        Object.values(groupedCategories).forEach(group => {
            group.forEach(subCategory => {
                subCategories.push(subCategory);
            });
        });

        setSelectedSubCategories([]);
        props.setBookmarkSubCategories(subCategories);
    }

    const handleEdit = async () => {
        console.log("SUB EDIT");
    }

    const handleCreate = async () => {
        console.log("SUB CREATE");
    }

    return (
        <>
        <div className={styles.section}>
            <h3 className={styles.title}>Bookmark sub categories</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedSubCategories.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedSubCategories.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {subCategories.map(subCategory => (
                    <li className={styles.category} key={subCategory.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" checked={selectedSubCategories.includes(subCategory)} onChange={() => handleSubCategories(subCategory)}/>
                            <span className={styles.name}>{subCategory.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default BookmarkSubCategories;