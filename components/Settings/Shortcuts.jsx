import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function Shortcuts(props) {
    const styles = props.styles;
    const shortcuts = props.shortcuts;
    const [selectedShortcuts, setSelectedShortcuts] = useState([]);

    const {
        openForm
    } = props.formVisibilityHook;

    const handleselectedShortcuts = (shortcut) => {
        // TODO
    }

    const handleselectedBookmarks = (selectedBookmark) => {
        // TODO
    }

    const handleDelete = async (event) => {
        // TODO
    }

    const handleEdit = async () => {
        // TODO
    }

    const handleCreate = async () => {
        // TODO
    }

    return (
        <>
        <div className={styles.section}>
            <h3 className={styles.title}>Shortcuts</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedShortcuts.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedShortcuts.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {shortcuts.map(shortcut => (
                    <li className={styles.category} key={shortcut.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" checked={selectedShortcuts.includes(shortcut)} onChange={() => handleselectedShortcuts(shortcut)}/>
                            <span className={styles.name}>{shortcut.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Shortcuts;