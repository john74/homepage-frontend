"use client";

import { useEffect, useState } from 'react';

import styles from '../styles/WebSearch.module.css';
import Svg from './Svg';


function WebSearch(props) {
    const {
        toggleMenu,
        openMenuId,
    } = props.toggleMenuHook;

    const [selectedEngine, setSelectedEngine] = useState(null);
    const setDefaultSearchEngine = engine => {
        setSelectedEngine({...engine});
    }

    let defaultEngine = selectedEngine ?? props.searchEngines.default;
    let nonDefaultEngines = props.searchEngines.nonDefault;

    const updateDefaultSearchEngine = async () => {
        const data = [{
            "id": selectedEngine.id,
            "is_default":true
        }];

        const initOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('http://localhost:3000/api/search-engines/bulk-update', initOptions);
        if (response.ok) {
            const searchEngines = await response.json();
            props.setSearchEngines(searchEngines);
        }
    };

    useEffect(() => {
        if (!selectedEngine) return;
        updateDefaultSearchEngine();
    }, [selectedEngine]);

    return (
        <div className={styles.webSearch}>
            <form action={defaultEngine.url} method={defaultEngine.method}>
                <div className={styles.searchEngines} onClick={(event) => toggleMenu(event, "webSearchMenu")}>
                    <div className={styles.defaultEngine}>
                        <p key={defaultEngine.id}>{defaultEngine.name}</p>
                        <Svg content={<><path d="m6 9 6 6 6-6"/></>}/>
                    </div>
                    <ul className={`${styles.nonDefaultEngines} ${openMenuId === "webSearchMenu" ? styles.open : ''}`}>
                    {nonDefaultEngines.map(engine => (
                        <li
                        key={engine.name + engine.id}
                        className={styles.engine}
                        onClick={(event) => {
                            event.stopPropagation();
                            setDefaultSearchEngine(engine);
                        }}
                        >
                        {engine.name}
                        </li>
                    ))}
                    </ul>
                </div>
                <input type="search" name={defaultEngine.name_attribute} id={defaultEngine.id} />
            </form>
        </div>
    )
}

export default WebSearch