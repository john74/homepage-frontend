import { useState } from 'react';


export default function useSelectItem() {
    const [selectedItem, setSelectedItem] = useState(null);

    return {
        selectedItem,
        setSelectedItem,
    }
}