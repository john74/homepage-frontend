"use client";

import { useEffect } from 'react';

import styles from '../styles/WebSearch.module.css';
import Svg from './Svg';


function WebSearch(props) {
    const {
        toggleMenu,
        openMenuId,
    } = props.toggleMenuHook;

    const searchEngines = props.searchEngines;

    let {
        selectedEngine,
        defaultEngine,
        nonDefaultEngines,
        handleSearchEngineClick,
      } = props.setDefaultSearchEngineHook;

    // Using 'selectedEngine' ensures that 'useEffect' triggers appropriately,
    // because 'selectedEngine' remains undefined until user selection, while
    // 'defaultEngine' changes value here.
    defaultEngine = selectedEngine || searchEngines.find(engine => engine.is_default);
    nonDefaultEngines = nonDefaultEngines || searchEngines.filter(engine => !engine.is_default);

    useEffect(() => {
        if (!selectedEngine) return;

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
        };

        updateDefaultSearchEngine();
    }, [selectedEngine]);

    return (
        <div className={styles.webSearch}>
            <form action={defaultEngine.url} method={defaultEngine.method}>
                <div className={styles.searchEngines} onClick={(event) => toggleMenu(event, "webSearchMenu")}>
                    <div className={styles.defaultEngine}>
                        <p
                        key={defaultEngine.id}
                        data-id={defaultEngine.id}
                        data-name={defaultEngine.name}
                        data-url={defaultEngine.url}
                        data-method={defaultEngine.method}
                        data-name-attribute={defaultEngine.name_attribute}
                        >
                        {defaultEngine.name}
                        </p>
                        <Svg content={<><path d="m6 9 6 6 6-6"/></>}/>
                    </div>
                    <ul className={`${styles.nonDefaultEngines} ${openMenuId === "webSearchMenu" ? styles.open : ''}`} onClick={(event) => { event.stopPropagation(); handleSearchEngineClick(event);}}>
                    {nonDefaultEngines.map(engine => (
                        <li
                        className={styles.engine}
                        key={engine.name + engine.id}
                        data-id={engine.id}
                        data-name={engine.name}
                        data-url={engine.url}
                        data-method={engine.method}
                        data-name-attribute={engine.name_attribute}
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