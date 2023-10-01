import { useState } from 'react';


export default function useEditBookmarkCategoryForm() {
    const [isEditCategoryBookmarkFormVisible, setIsEditCategoryBookmarkFormVisible] = useState(false);
    const toggleEditCategoryBookmarkFormVisibility = () => {
        setIsEditCategoryBookmarkFormVisible(!isEditCategoryBookmarkFormVisible);
      };

    return {
        isEditCategoryBookmarkFormVisible,
        setIsEditCategoryBookmarkFormVisible,
        toggleEditCategoryBookmarkFormVisibility
    }
}