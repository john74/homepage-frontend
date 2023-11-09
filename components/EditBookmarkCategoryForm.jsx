"use client";

import { useState } from 'react';
import {
    Button, Svg,
} from '@components';


function EditBookmarkCategoryForm(props) {
    const styles = props.styles;
    const {
        selectedItem,
        closeForm
    } = props.formVisibilityHook;

    const {
        lastSelectedId
    } = props.toggleMenuHook;

    const [formData, setFormData] = useState({
        id: lastSelectedId,
        name: selectedItem.name,
        color: selectedItem.color
      });

    const { id, name, color } = formData;
    const onChange = event => {
        let { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const editCategory = async (event) => {
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
            'http://localhost:3000/api/bookmarks/bulk-update-categories/',
            initOptions
          )

        if (response.ok) {
            const grouped_categories = (await response.json()).categories;
            props.setBookmarkCategoryGroups(grouped_categories);
        }
        closeForm();
    };

    return (
        <form className={styles.form} onSubmit={editCategory}>
            <Button className={styles.closeButton} title="Close" onClick={() => closeForm()}>
                <Svg content={<><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>}/>
            </Button>
            <h1 className={styles.title}>Edit category</h1>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name:</label>
                    <input className={styles.input} type="text" id="name" name="name" value={name} onChange={onChange} />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="color">Color:</label>
                    <input className={styles.input} type="text" id="color" name="color" value={color} onChange={onChange} />
                </div>
                <input className={styles.input} type="submit" value="Save" />
            </div>
        </form>
    )
}

export default EditBookmarkCategoryForm;