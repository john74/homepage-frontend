import { useState } from 'react';


export default function useDeleteBookmarkCategoryForm() {
    const [isDeleteBookmarkCategoryFormVisible, setIsDeleteBookmarkCategoryFormVisible] = useState(false);
    const toggleDeleteBookmarkCategoryFormVisibility = () => {
        setIsDeleteBookmarkCategoryFormVisible(!isDeleteBookmarkCategoryFormVisible);
      };

    return {
        isDeleteBookmarkCategoryFormVisible,
        setIsDeleteBookmarkCategoryFormVisible,
        toggleDeleteBookmarkCategoryFormVisibility
    }
}