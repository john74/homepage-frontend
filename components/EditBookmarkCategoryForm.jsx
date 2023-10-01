"use client";

import { useState } from 'react';


function EditBookmarkCategoryForm({ categoryId, setIsEditCategoryBookmarkFormVisible, setBookmarkCategoryGroups }) {

    const [formData, setFormData] = useState({
        id: categoryId,
        name:"",
        color:""
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
            let categories = (await response.json()).categories;
            let groups = [];
            for (let i = 0; i < categories.length; i += 6) {
                let group = categories.slice(i, i + 6);
                groups.push(group);
            }
            setBookmarkCategoryGroups(groups);
        }
        setIsEditCategoryBookmarkFormVisible(false);
    };

    return (
        <form className="" onSubmit={editCategory}>
            <div className="">
                <h1>Edit category</h1>
                <div className="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={onChange} required />
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