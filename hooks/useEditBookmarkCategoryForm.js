import { useState } from 'react';


export default function useEditBookmarkCategoryForm() {
    const [isEditBookmarkCategoryFormVisible, setIsEditBookmarkCategoryFormVisible] = useState(false);
    const toggleEditBookmarkCategoryFormVisibility = () => {
        setIsEditBookmarkCategoryFormVisible(!isEditBookmarkCategoryFormVisible);
      };

    return {
        isEditBookmarkCategoryFormVisible,
        setIsEditBookmarkCategoryFormVisible,
        toggleEditBookmarkCategoryFormVisibility
    }
}