import { useState } from 'react';


export default function useEditBookmarkCategoryForm() {
    const [isEditBookmarkCategoryFormVisible, setIsEditBookmarkCategoryFormVisible] = useState(false);
    const [selectedBookmarkCategoryForEditing, setSelectedBookmarkCategoryForEditing] = useState(null);

    const toggleEditBookmarkCategoryFormVisibility = (category) => {
        setSelectedBookmarkCategoryForEditing(category);
        setIsEditBookmarkCategoryFormVisible(!isEditBookmarkCategoryFormVisible);
      };

    return {
        selectedBookmarkCategoryForEditing,
        isEditBookmarkCategoryFormVisible,
        setSelectedBookmarkCategoryForEditing,
        setIsEditBookmarkCategoryFormVisible,
        toggleEditBookmarkCategoryFormVisibility
    }
}