import { useEffect, useRef, useState } from 'react';


/**
 * A custom React hook for managing the state of open menus.
 *
 * This hook helps manage the state of open and closed menus by tracking the
 * ID of the currently open menu. It allows you to toggle the state of a menu
 * by providing its unique ID. If the provided ID matches the currently open
 * menu ID, it closes the menu. If the IDs are different, it opens the new menu.
 *
 * @returns {Object} An object containing the openMenuId state and the toggleMenu function.
 *
 * @example
 * // In your component:
 * const { lastSelectedCategoryId, openMenuId, toggleMenu, menuRef } = useToggleBookmarkCategoryMenu();
 *
 * // To toggle a menu with a specific ID:
 * toggleMenu(menuId);
 */
export default function useToggleBookmarkCategoryMenu() {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [lastSelectedCategoryId, setLastSelectedCategoryId] = useState(null);
    const menuRef = useRef(null);

    /**
     * Toggle the state of a menu by providing its ID.
     *
     * @param {string} menuId - The unique ID of the menu to toggle.
     */
    const toggleMenu = (menuId) => {
        // Store the ID of the currently selected category in a separate variable to preserve it, even when the category's menu is closed.
        setLastSelectedCategoryId(menuId);
        setOpenMenuId(openMenuId => openMenuId === menuId ? null : menuId);
      };

    useEffect(() => {
        // Add a click event listener to detect clicks on the menu toggler or outside the menu, and close the menu if necessary
        const closeMenuOnClick = event => {
            // Prevent closing the menu when clicking on elements with a 'data-delete-action' attribute
            // to allow the user to select the 'Click to confirm' to proceed with deletion
            if (event.target?.closest("[data-delete-action]")) return;
            // Check if the closest ancestor of the event target matches the reference class
            const referenceClass = menuRef.current?.className;
            const targetClass = event.target?.closest(`.${referenceClass}`)?.className;
            const userClickedInsideMenu = referenceClass === targetClass;
            if (!userClickedInsideMenu) setOpenMenuId(null);
        }

        // Attach and then remove the event listener to prevent memory leaks
        document.body.addEventListener('click', closeMenuOnClick);
        return () => document.body.removeEventListener('click', closeMenuOnClick);
    }, []);

    return {
    lastSelectedCategoryId,
    openMenuId,
    toggleMenu,
    menuRef,
    }
}