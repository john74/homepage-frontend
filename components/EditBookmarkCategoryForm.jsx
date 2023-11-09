"use client";

import { useState } from 'react';


function EditBookmarkCategoryForm(props) {

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
        <form className="" onSubmit={editCategory}>
            <div className="">
                <h1>Edit category</h1>
                <div className="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={onChange} />
                </div>
                <div className="">
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" value={color} onChange={onChange} />
                </div>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default EditBookmarkCategoryForm;