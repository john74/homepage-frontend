import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function BookmarkSubCategories(props) {
    const styles = props.styles;
    const categories = props.bookmarkCategories;
    const subCategories = props.bookmarkSubCategories;
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const {
        openForm
    } = props.formVisibilityHook;

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    }

    const handleSelectedSubCategories = (selectedSubCategory) => {
        const isSelected = selectedSubCategories.includes(selectedSubCategory);
        let updatedSubCategoryIds = isSelected ? selectedSubCategories.filter(subCategory => subCategory != selectedSubCategory) : [...selectedSubCategories, selectedSubCategory];
        setSelectedSubCategories(updatedSubCategoryIds);
    }

    const handleDelete = async (event) => {
        if (!selectedSubCategories.length) return;

        const method = "DELETE";
        const targetEndpoint = "api/sub-categories/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": selectedSubCategories.map(category => category.id)};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedSubCategories = responseJSON.sub_categories;
        let subCategories = [];
        Object.values(groupedSubCategories).forEach(group => {
            group.forEach(subCategory => {
                subCategories.push(subCategory);
            });
        });

        setSelectedSubCategories([]);
        props.setBookmarkSubCategories(subCategories);
    }

    const handleEdit = async () => {
        if (selectedSubCategories.length != 1) return;
        const subCategory = selectedSubCategories[0];
        setSelectedSubCategories([]);
        openForm("editBookmarkSubCategoryForm", subCategory);
    }

    const handleCreate = async () => {
        const method = "POST";
        const targetEndpoint = "api/sub-categories/bulk-create/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = [{
            "category": selectedCategory?.id,
            "name": "New Sub Category for Communities"
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedSubCategories = responseJSON.sub_categories;
        let subCategories = [];
        Object.values(groupedSubCategories).forEach(group => {
            group.forEach(subCategory => {
                subCategories.push(subCategory);
            });
        });

        setSelectedSubCategories([]);
        props.setBookmarkSubCategories(subCategories);
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
                {categories.map(category => (
                    <li className={styles.category} key={category.id}>
                        <span onClick={() => handleSelectedCategory(category)}>{category.name}</span>
                    </li>
                ))}
            </ul>
            <ul className={styles.categories}>
                {subCategories.map(subCategory => (
                    <li className={styles.category} key={subCategory.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" checked={selectedSubCategories.includes(subCategory)} onChange={() => handleSelectedSubCategories(subCategory)}/>
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