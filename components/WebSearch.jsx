"use client";

import {
    useEffect,
} from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';
import styles from '../styles/WebSearch.module.css';
import {
    Select, Input, Menu,
} from '@components';


function WebSearch(props) {
    const {
        selectedItem,
    } = props.selectItemHook;
    const defaultEngine = selectedItem || props.searchEngines.default;
    const nonDefaultEngines = props.searchEngines.nonDefault;
    const {
        setOpenMenuId,
    } = props.toggleMenuHook;

    const addSearchEngine = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const method = "POST";
        const targetEndpoint = "api/search-engines/bulk-create/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = [{
            "name": "New Engine"
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        props.setSearchEngines(responseJSON);
        setOpenMenuId("searchEnginesMenu");
    }

    const updateDefaultEngine = async () => {
        const method = "PUT";
        const targetEndpoint = "api/search-engines/bulk-update/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = [{
            "id": selectedItem.id,
            "is_default":true
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;
        props.setSearchEngines(responseJSON);
    };

    useEffect(() => {
        if (!selectedItem) return;
        setOpenMenuId(null);
        updateDefaultEngine();
    }, [selectedItem]);

    const menuOptions = [
        {
            "name": "Add search engine",
            "onClick": addSearchEngine,
        }
    ];

    return (
        <>
        <div className={styles.webSearch}>
            <form className={styles.form} action={defaultEngine.url} method={defaultEngine.method}>
                <Select styles={styles} defaultValue={defaultEngine.name} options={nonDefaultEngines} id="searchEnginesMenu" {...props}/>
                <Input styles={styles} type="search" name={defaultEngine.name_attribute} {...props} />
                <Menu styles={styles} options={menuOptions} id="webSearchMenu" {...props} />
            </form>
        </div>
        </>
    )
}

export default WebSearch