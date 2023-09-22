"use client";

import { useState } from 'react';

function AddBookmarkForm({categoryId, setBookmarks, existingBookmarks}) {
    const [formData, setFormData] = useState({
        category: categoryId,
        name: "",
        url: "",
        icon_url: "",
        is_shortcut: true,
      });

    const { category, name, url, icon_url, is_shortcut } = formData;
    const onChange = event => {
        const { name, value } = event.target;
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
                "bookmarks": existingBookmarks
            })
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-create',
            initOptions
          )

        if (response.ok) {
            const updatedBookmarks = (await response.json()).bookmarks;
            setBookmarks({ ...updatedBookmarks });
        }
    };

    return (
        <form className="" onSubmit={createBookmark}>
            <div className="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} required />
            </div>
            <div className="">
                <label htmlFor="url">Url:</label>
                <input type="text" id="url" name="url" value={url} onChange={onChange} required />
            </div>
            <div className="">
                <label htmlFor="icon_url">Icon url:</label>
                <input type="text" id="icon_url" name="icon_url" value={icon_url} onChange={onChange} required />
            </div>
            <div className="">
                <label htmlFor="is_shortcut">Is shortcut:</label>
                <input type="checkbox" id="is_shortcut" name="is_shortcut" checked={is_shortcut} onChange={onChange} />
            </div>
            <input type="submit" value="Save" />
        </form>
    )
}

export default AddBookmarkForm;