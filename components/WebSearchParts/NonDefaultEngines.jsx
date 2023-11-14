"use client";

import { useEffect } from 'react';

import {
    Button,
} from '@components';

import {
    Actions,
} from '.';

import {
    useHandleProxyRequest,
} from '@hooks';


function NonDefaultEngines(props) {
    const styles = props.styles;

    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId,
    } = props.toggleMenuHook;

    const {
        selectedEngine,
        selectSearchEngine
    } = props.selectSearchEngineHook;

    let nonDefaultEngines = props.searchEngines.nonDefault;

    const updateDefaultSearchEngine = async () => {
        const url = 'http://localhost:3000/api/search-engines/bulk-update';
        const method = "PUT";
        const body = [{
            "id": selectedEngine.id,
            "is_default":true
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        props.setSearchEngines(responseJSON);
    };

    useEffect(() => {
        if (!selectedEngine) return;
        setOpenMenuId(null);
        updateDefaultSearchEngine();
    }, [selectedEngine]);

    return (
        <>
        <ul className={`${styles.nonDefaultEngines} ${openMenuId === "webSearchMenu" ? styles.open : ''}`}>
        {nonDefaultEngines.map(engine => (
            <li className={styles.engine} key={`${engine.name}${engine.id}`}>
                <Button className={styles.name} onClick={(event) => selectSearchEngine(engine)}>{engine.name}</Button>
                <Actions styles={styles} engine={engine} {...props} />
            </li>
        ))}
        </ul>
        </>
    );
  }

export default NonDefaultEngines;