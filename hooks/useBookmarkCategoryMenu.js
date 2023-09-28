import { useState } from 'react';


export default function useBookmarkForm() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleAddBookmarkFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
      };

      return {
        isFormVisible,
        setIsFormVisible,
        toggleAddBookmarkFormVisibility
      }
}