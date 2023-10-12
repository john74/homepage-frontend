"use client";

import styles from '../styles/AddBookmarkForm.module.css';
import { useState } from 'react';


function AddBookmarkForm(props) {
    const {
        setIsFormVisible
    } = props.bookmarkFormHook;

    const {
        lastSelectedCategoryId
    } = props.toggleBookmarkCategoryMenuHook;

    const [formData, setFormData] = useState({
        category: lastSelectedCategoryId,
        name: "",
        url: "",
        icon_url: "",
        is_shortcut: false,
      });

    const { category, name, url, icon_url, is_shortcut } = formData;
    const onChange = event => {
        let { name, value, type, checked } = event.target;
        value = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: value });
    }

    const createBookmark = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "formData": [formData],
                "bookmarks": props.bookmarks
            })
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-create',
            initOptions
          )

        if (response.ok) {
            const updatedBookmarks = (await response.json()).bookmarks;
            props.setBookmarks({ ...updatedBookmarks });
        }
        setIsFormVisible(false);
    };

    return (
        <form className={styles.AddBookmarkForm} onSubmit={createBookmark}>
            <div className={styles.wrapper}>
                <h1>Create bookmark</h1>
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

export default AddBookmarkForm;