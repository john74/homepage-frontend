import { useEffect, useRef, useState } from 'react';


export default function useToggleGeneralMenu() {
    const [isGeneralMenuOpen, setIsGeneralMenuOpen] = useState(false);
    const generalMenuRef = useRef(null);

    const toggleGeneralMenu = () => {
        setIsGeneralMenuOpen(!isGeneralMenuOpen);
      };

    const closeMenuOnClick = event => {
        if (generalMenuRef.current.contains(event.target)) return;
        if (!isGeneralMenuOpen) return;
        toggleGeneralMenu();
    };

    useEffect(() => {
        document.body.addEventListener('click', closeMenuOnClick);
        return () => document.body.removeEventListener('click', closeMenuOnClick);
    }, [isGeneralMenuOpen]);

    return {
        isGeneralMenuOpen,
        setIsGeneralMenuOpen,
        toggleGeneralMenu,
        generalMenuRef
    }
}