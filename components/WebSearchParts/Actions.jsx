"use client";

import Svg from '../Svg';
import {
    Button,
} from '@components';


function Actions(props) {
    const styles = props.styles;
    const engine = props.engine;

    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const {
        openForm
    } = props.formVisibilityHook;

    const deleteSearchEngine = async (event, engineId) => {
        event.preventDefault();
        event.stopPropagation();
        unmark();

        const initOptions = {
            cache: 'no-store',
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

    return (
        <>
        <div className={styles.actions}>
            <div className={styles.buttons}>
                <Button className={styles.editButton} title="Edit" onClick={() => openForm("editSearchEngineForm", engine)}>Edit</Button>
                {isMarkedForDeletion !== engine.id ? (
                    <Button className={styles.deleteButton} title="Delete" onClick={(event) => {event.preventDefault(); markForDeletion(engine.id);}}>Delete</Button>
                ) : (
                    <Button className={styles.confirmButton} title="Confirm" onMouseLeave={unmark} onClick={(event) => deleteSearchEngine(event, engine.id)}>Confirm</Button>
                )}
            </div>
            <div className={styles.icon}>
                <Svg class={styles.svg} content={<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>}/>
            </div>
        </div>
        </>
    );
  }

export default Actions;