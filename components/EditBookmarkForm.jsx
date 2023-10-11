"use client";

import styles from '../styles/EditBookmarkForm.module.css';
import { useEffect, useRef, useState } from 'react';
import Svg from './Svg';


function EditBookmarkForm(props) {
    const [isRestCategoriesVisible, setIsRestCategoriesVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleRestCategories = () => {
      setIsRestCategoriesVisible(!isRestCategoriesVisible);
    };

    const {
        selectedBookmarkForEditing
    } = props.editBookmarkFormHook;

    const [formData, setFormData] = useState({
        category: selectedBookmarkForEditing.category,
        id: selectedBookmarkForEditing.id,
        name: selectedBookmarkForEditing.name,
        url: selectedBookmarkForEditing.url,
        icon_url: selectedBookmarkForEditing.icon_url,
        is_shortcut: selectedBookmarkForEditing.is_shortcut,
      });

      const handleCategoryClick = (newCategory) => {
        setFormData({
          ...formData,
          category: newCategory,
        });
        setIsRestCategoriesVisible(!isRestCategoriesVisible);
      };

      useEffect(() => {
        // Add a click event listener to detect clicks on the menu toggler or outside the menu, and close the menu if necessary
        const closeMenuOnClick = event => {
            // Check if the click occurred inside the menu
            const userClickedInsideMenu = menuRef.current?.contains(event.target);
            if (!userClickedInsideMenu) setIsRestCategoriesVisible(false);
        }

        // Attach and then remove the event listener to prevent memory leaks
        document.body.addEventListener('click', closeMenuOnClick);
        return () => document.body.removeEventListener('click', closeMenuOnClick);
    }, []);

    const { category, id, name, url, icon_url, is_shortcut } = formData;
    const onChange = event => {
        let { name, value, type, checked } = event.target;
        value = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: value });
    }

    const editBookmark = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([formData])
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-update/',
            initOptions
          )

        if (response.ok) {
            const updatedBookmarks = (await response.json()).createdBookmarks;
            props.setBookmarks({ ...updatedBookmarks });
        }
        props.setIsEditBookmarkFormVisible(false);
    };

    const bookmarkCategories = {};
    props.bookmarkCategoryGroups?.flat().forEach(category => {
        bookmarkCategories[category.id] = category.name;
    });

    const restCategories = Object.entries(bookmarkCategories).filter(([id, _]) => id != category);

    return (
        <form className={styles.AddBookmarkForm} onSubmit={editBookmark}>
            <div className={styles.wrapper}>
                <h1>Edit bookmark</h1>
                <div className={styles.field} ref={menuRef}>
                    <div className={styles.currentCategory} onClick={toggleRestCategories}>
                        <p>{bookmarkCategories[category]}</p>
                        <Svg content={<><path d="m6 9 6 6 6-6"/></>}/>
                    </div>
                    {isRestCategoriesVisible && (
                        <ul className={styles.restCategories}>
                        {restCategories.map(([id, name]) => (
                            <li key={id+name} onClick={() => handleCategoryClick(id)}>{name}</li>
                        ))}
                        </ul>
                    )}
                </div>
                <div className={styles.field}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="url">Url:</label>
                    <input type="text" id="url" name="url" value={url} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="icon_url">Icon url:</label>
                    <input type="text" id="icon_url" name="icon_url" value={icon_url} onChange={onChange} required />
                </div>
                <div className={`${styles.field} ${styles.row}`}>
                    <label htmlFor="is_shortcut">Is shortcut:</label>
                    <input type="checkbox" id="is_shortcut" name="is_shortcut" checked={is_shortcut} onChange={onChange} />
                </div>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default EditBookmarkForm;