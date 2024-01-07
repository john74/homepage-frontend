"use client";

import Svg from './Svg';

import {
    Dropdown, MenuIcon, Buttonn
} from '@components';

import {
    useHandleProxyRequest,
} from '@hooks';


function Actions(props) {
    const styles = props.styles;
    const actions = props.optionActions;
    const item = props.item;

    const {
        openForm
    } = props.formVisibilityHook;

    const {
        toggleMenu,
    } = props.toggleMenuHook;
    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    console.log("isMarkedForDeletion => ", isMarkedForDeletion);

    const deleteSearchEngine = async (event, engineId) => {
        event.preventDefault();
        event.stopPropagation();

        unmark();
        const method = "DELETE";
        const targetEndpoint = "api/search-engines/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": [engineId]};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        props.setSearchEngines(responseJSON);
    }

    return (
        <>
        <div className={styles.actions}>
            <MenuIcon styles={styles} onClick={toggleMenu} id={props.id} {...props}/>
            {actions?.edit && <Buttonn styles={styles} title="Edit" onClick={() => openForm(props.formId, props.item)} {...props}> <span>Edit</span> </Buttonn>}
            {actions?.delete && <Buttonn styles={styles} title="Delete" onClick={(event) => {event.preventDefault(); markForDeletion(props.item.id);}} {...props}> <span>Delete</span> </Buttonn>}
            {isMarkedForDeletion === props.item.id && <Buttonn styles={styles} title="Confirm" onClick={(event) => deleteSearchEngine(event, props.item.id)} {...props}> <span>Confirm</span> </Buttonn>}
        </div>
        </>
    );
  }

export default Actions;