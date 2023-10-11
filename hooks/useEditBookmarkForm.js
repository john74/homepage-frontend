import { useState } from 'react';


export default function useEditBookmarkForm() {
    const [isEditBookmarkFormVisible, setIsEditBookmarkFormVisible] = useState(false);
    const [selectedBookmarkForEditing, setSelectedBookmarkForEditing] = useState(null);

    const toggleEditBookmarkFormVisibility = (bookmark) => {
        setSelectedBookmarkForEditing(bookmark);
        setIsEditBookmarkFormVisible(!isEditBookmarkFormVisible);
      };

    return {
        isEditBookmarkFormVisible,
        setIsEditBookmarkFormVisible,
        toggleEditBookmarkFormVisibility,
        selectedBookmarkForEditing
    }
}