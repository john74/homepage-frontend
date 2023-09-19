import { useState } from 'react';


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
 * const { openMenuId, toggleMenu } = useMenuToggle();
 *
 * // To toggle a menu with a specific ID:
 * toggleMenu(menuId);
 */
export default function useMenuToggle() {
    const [openMenuId, setOpenMenuId] = useState(null);

    /**
     * Toggle the state of a menu by providing its ID.
     *
     * @param {string} menuId - The unique ID of the menu to toggle.
     */
    const toggleMenu = (menuId) => {
        setOpenMenuId(openMenuId => openMenuId === menuId ? null : menuId);
      };

      return {
        openMenuId,
        toggleMenu
      }
}