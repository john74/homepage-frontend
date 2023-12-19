"use client";

import {
    useEffect,
} from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';
import styles from '../styles/WebSearch.module.css';
import {
    Select, Input,
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

    return (
        <>
        <div className={styles.webSearch}>
            <form action={defaultEngine.url} method={defaultEngine.method}>
                <Select styles={styles} defaultValue={defaultEngine.name} options={nonDefaultEngines} id="searchEnginesMenu" {...props}/>
                <Input styles={styles} type="search" name={defaultEngine.name_attribute} {...props} />
            </form>
        </div>
        </>
    )
}

export default WebSearch