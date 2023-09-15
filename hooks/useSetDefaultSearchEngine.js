"use client";

import { useState } from 'react';


export default function useSetDefaultSearchEngine(searchEngines) {

    const [selectedEngine, setSelectedEngine] = useState(null);
    const [nonDefaultEngines, setNonDefaultEngines] = useState(null);

    const handleSearchEngineClick = async event => {
        const dataAttributes = event.target.dataset;
        setSelectedEngine({...dataAttributes});
        setNonDefaultEngines(searchEngines.filter(engine => engine.id != dataAttributes.id));
    }

    return {
        selectedEngine,
        nonDefaultEngines,
        handleSearchEngineClick,
    }
}