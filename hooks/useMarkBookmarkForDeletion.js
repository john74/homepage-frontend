import { useEffect, useState } from 'react';


export default function useMarkBookmarkForDeletion() {
    const [isBookmarkMarkedForDeletion, setIsBookmarkMarkedForDeletion] = useState(null);
    const markBookmarkForDeletion = (bookmarkId) => {
        if (isBookmarkMarkedForDeletion) return;
        setIsBookmarkMarkedForDeletion(bookmarkId);
      };

    const unmarkBookmarkForDeletion = () => {
        setIsBookmarkMarkedForDeletion(null);
      };

    useEffect(() => {
        if (!isBookmarkMarkedForDeletion) return;
        const timeout = setTimeout(() => {
            setIsBookmarkMarkedForDeletion(null);
        }, 5000);
        // Clear the timeout and unmark the bookmark if the component unmounts
        return () => clearTimeout(timeout);
      }, [isBookmarkMarkedForDeletion]);

    return {
        isBookmarkMarkedForDeletion,
        setIsBookmarkMarkedForDeletion,
        markBookmarkForDeletion,
        unmarkBookmarkForDeletion
    }
}