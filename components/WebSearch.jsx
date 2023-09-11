"use client";

import { useState } from 'react';
import styles from '../styles/WebSearch.module.css';


function WebSearch({searchEngines}) {
    const defaultEngine = searchEngines.find(engine => engine.is_default === true);
    const nonDefaultEngines = searchEngines.filter(engine => engine.is_default === false);

    const [IsEngineMenuOpen, setIsEngineMenuOpen] = useState(false);
    const toggleEngineMenu = () => {
      setIsEngineMenuOpen(!IsEngineMenuOpen);
    };

    return (
        <div className={styles.webSearch}>
            <form action={defaultEngine.url} method={defaultEngine.method}>
                <div className={styles.searchEngines} onClick={toggleEngineMenu}>
                    <div className={styles.defaultEngine}>
                        <div
                        key={defaultEngine.id}
                        data-id={defaultEngine.id}
                        data-name={defaultEngine.name}
                        data-url={defaultEngine.url}
                        data-method={defaultEngine.method}
                        data-name-attribute={defaultEngine.name_attribute}
                        >
                        {defaultEngine.name}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                    <div className={`${styles.nonDefaultEngines} ${IsEngineMenuOpen ? styles.open : ''}`}>
                    {nonDefaultEngines.map(engine => (
                        <div
                        className={styles.engine}
                        key={engine.id}
                        data-id={defaultEngine.id}
                        data-name={engine.name}
                        data-url={engine.url}
                        data-method={engine.method}
                        data-name-attribute={engine.name_attribute}
                        >
                        {engine.name}
                        </div>
                    ))}
                    </div>
                </div>
                <input type="search" name={defaultEngine.name_attribute} id={defaultEngine.id} />
            </form>
        </div>
    )
}

export default WebSearch