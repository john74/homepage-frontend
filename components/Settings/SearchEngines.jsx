import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function SearchEngines(props) {
    const styles = props.styles;
    const searchEngines = props.searchEngines;
    const [selectedSearchEngines, setSelectedSearchEngines] = useState([]);

    const {
        openForm
    } = props.formVisibilityHook;

    const handleSelectedSearchEngines = (shortcut) => {
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
            <h3 className={styles.title}>Search engines</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedSearchEngines.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedSearchEngines.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {searchEngines.map(searchEngine => (
                    <li className={styles.category} key={searchEngine.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" checked={selectedSearchEngines.includes(searchEngine)} onChange={() => handleSelectedSearchEngines(searchEngine)}/>
                            <span className={styles.name}>{searchEngine.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default SearchEngines;