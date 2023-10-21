"use client";

import { useEffect } from 'react';

import styles from '../styles/WebSearch.module.css';
import Svg from './Svg';


function WebSearch(props) {
    const {
        openForm
    } = props.formVisibilityHook;

    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId,
    } = props.toggleMenuHook;

    const {
        selectedEngine,
        selectSearchEngine
    } = props.selectSearchEngineHook;

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

    const deleteSearchEngine = async (event, engineId) => {
        event.preventDefault();
        event.stopPropagation();
        unmark();

        const initOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"ids": [engineId]})
        }

        const response = await fetch(
            'http://localhost:3000/api/search-engines/bulk-delete/',
            initOptions
          )

        if (response.ok) {
            const searchEngines = await response.json();
            props.setSearchEngines(searchEngines);
        }
    }

    const addSearchEngine = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const body = [{
            "name": "New Engine"
        }];

        const initOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(
            'http://localhost:3000/api/search-engines/bulk-create/',
            initOptions
          )

        if (response.ok) {
            const searchEngines = await response.json();
            props.setSearchEngines(searchEngines);
            setOpenMenuId("webSearchMenu");
        }
    }

    useEffect(() => {
        if (!selectedEngine) return;
        setOpenMenuId(null);
        updateDefaultSearchEngine();
    }, [selectedEngine]);

    return (
        <>
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
                        >
                            <span onClick={(event) => selectSearchEngine(engine)}>{engine.name}</span>
                            <div className={styles.actions}>
                                <span title="Edit" onClick={() => openForm("editSearchEngineForm", engine)}>
                                    <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                                </span>
                                {isMarkedForDeletion !== engine.id ? (
                                    <span title="Delete" onClick={(event) => { event.preventDefault(); markForDeletion(engine.id); }}>
                                        <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                                    </span>
                                ) : (
                                    <span className={styles.marked} title="Confirm" onMouseLeave={unmark} onClick={(event) => deleteSearchEngine(event, engine.id)}>
                                        <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                                    </span>
                                )}
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
                <input type="search" name={defaultEngine.name_attribute} id={defaultEngine.id} />
                <span className={styles.addEngine} title="Add search engine" onClick={(event) => addSearchEngine(event)}>
                    <Svg content={<><path d="M5 12h14"/><path d="M12 5v14"/></>}/>
                </span>
            </form>
        </div>
        </>
    )
}

export default WebSearch