import { useEffect, useState } from 'react';


export default function useMarkForDeletion() {
    const [isMarkedForDeletion, setIsMarkedForDeletion] = useState(null);

    const markForDeletion = (elementId) => {
        if (isMarkedForDeletion) return;
        setIsMarkedForDeletion(elementId);
      };

    const unmark = () => {
        setIsMarkedForDeletion(null);
      };

    useEffect(() => {
        if (!isMarkedForDeletion) return;

        const timeout = setTimeout(() => {
            setIsMarkedForDeletion(null);
        }, 5000);

        return () => clearTimeout(timeout);
      }, [isMarkedForDeletion]);

    return {
        isMarkedForDeletion,
        setIsMarkedForDeletion,
        markForDeletion,
        unmark
    }
}