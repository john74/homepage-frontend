"use client";

import Svg from '../Svg';
import { toast } from "react-hot-toast";
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
          .catch(error => {
            return {error: error}
          })

        if (response?.error || response?.status == 500) {
            toast.error("It appears that our system is currently unresponsive. Please try again later.");
            return;
        }

        const responseJSON = await response.json();

        if (responseJSON?.error) {
            toast.error(responseJSON.error);
            return;
        } else {
            toast.success(responseJSON.message);
            props.setSearchEngines(responseJSON);
        }
    }

    return (
        <>
        <div className={styles.actions}>
            <div className={styles.buttons}>
                <Button className={styles.editButton} title="Edit" onClick={() => openForm("editSearchEngineForm", engine)}>
                    <Svg content={<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></>}/>
                    <span>Edit</span>
                </Button>
                {isMarkedForDeletion !== engine.id ? (
                    <Button className={styles.deleteButton} title="Delete" onClick={(event) => {event.preventDefault(); markForDeletion(engine.id);}}>
                        <Svg content={<><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>}/>
                        <span>Delete</span>
                    </Button>
                ) : (
                    <Button className={styles.confirmButton} title="Confirm" onMouseLeave={unmark} onClick={(event) => deleteSearchEngine(event, engine.id)}>
                        <Svg content={<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>}/>
                        <span>Confirm</span>
                    </Button>
                )}
            </div>
            <div className={styles.icon}>
                <Svg class={styles.svg} content={<><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/></>}/>
            </div>
        </div>
        </>
    );
  }

export default Actions;