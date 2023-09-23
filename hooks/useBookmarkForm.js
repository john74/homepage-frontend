import { useState } from 'react';


export default function useBookmarkForm() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
      };

      return {
        isFormVisible,
        toggleFormVisibility
      }
}