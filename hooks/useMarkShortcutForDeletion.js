import { useEffect, useState } from 'react';


export default function useMarkShortcutForDeletion() {
    const [isShortcutMarkedForDeletion, setIsShortcutMarkedForDeletion] = useState(null);

    const markShortcutForDeletion = (shortcutId) => {
        if (isShortcutMarkedForDeletion) return;
        setIsShortcutMarkedForDeletion(shortcutId);
      };

    const unmarkShortcutForDeletion = () => {
        setIsShortcutMarkedForDeletion(null);
      };

    useEffect(() => {
        if (!isShortcutMarkedForDeletion) return;
        const timeout = setTimeout(() => {
            setIsShortcutMarkedForDeletion(null);
        }, 5000);
        // Clear the timeout and unmark the shortcut if the component unmounts
        return () => clearTimeout(timeout);
      }, [isShortcutMarkedForDeletion]);

    return {
        isShortcutMarkedForDeletion,
        setIsShortcutMarkedForDeletion,
        markShortcutForDeletion,
        unmarkShortcutForDeletion
    }
}