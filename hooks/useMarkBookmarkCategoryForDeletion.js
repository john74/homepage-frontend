import { useState } from 'react';


export default function useMarkBookmarkCategoryForDeletion() {
    const [isBookmarkCategoryMarkedForDeletion, setIsBookmarkCategoryMarkedForDeletion] = useState(false);
    const markBookmarkCategoryForDeletion = () => {
        setIsBookmarkCategoryMarkedForDeletion(!isBookmarkCategoryMarkedForDeletion);
      };

    return {
        isBookmarkCategoryMarkedForDeletion,
        setIsBookmarkCategoryMarkedForDeletion,
        markBookmarkCategoryForDeletion
    }
}