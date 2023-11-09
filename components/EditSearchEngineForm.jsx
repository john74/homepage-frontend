"use client";

import styles from '../styles/EditBookmarkForm.module.css';
import { useState } from 'react';


function EditSearchEngineForm(props) {
    const {
        setSelectedEngine
    } = props.selectSearchEngineHook;

    const {
        selectedItem,
        closeForm
    } = props.formVisibilityHook;

    const [formData, setFormData] = useState({
        id: selectedItem.id,
        name: selectedItem.name,
        url: selectedItem.url,
        method: selectedItem.method,
        name_attribute: selectedItem.name_attribute,
        is_default: selectedItem.is_default,
      });

    const { id, name, url, method, name_attribute, is_default } = formData;
    const onChange = event => {
        let { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const editSearchEngine = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            cache: 'no-store',
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([formData])
        }

        const response = await fetch(
            'http://localhost:3000/api/search-engines/bulk-update',
            initOptions
          )

        if (response.ok) {
            const searchEngines = await response.json();
            props.setSearchEngines(searchEngines);
        }
        setSelectedEngine(null);
        closeForm();
    };

    return (
        <form className={styles.AddBookmarkForm} onSubmit={editSearchEngine}>
            <div className={styles.wrapper}>
                <h1>Edit Search engine</h1>
                <div className={styles.field}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="url">Url:</label>
                    <input type="text" id="url" name="url" value={url} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="method">Method:</label>
                    <input type="text" id="method" name="method" value={method} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="name_attribute">Name attribute:</label>
                    <input type="text" id="name_attribute" name="name_attribute" value={name_attribute} onChange={onChange} required />
                </div>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default EditSearchEngineForm;