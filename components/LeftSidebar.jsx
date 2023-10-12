import styles from '../styles/LeftSidebar.module.css';
import Svg from './Svg';


function LeftSidebar(props) {
    const {
        isShortcutMarkedForDeletion,
        markShortcutForDeletion,
        unmarkShortcutForDeletion
    } = props.markShortcutForDeletionHook;

    const handleConfirmShortcutDeletion = async (event, shortcutId) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"ids": [shortcutId]})
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-delete-shortcuts/',
            initOptions
          )

        if (response.ok) {
            const response_data = await response.json();
            const bookmarks = response_data.bookmarks;
            const shortcuts = response_data.shortcuts;
            props.setBookmarks(bookmarks);
            props.setShortcuts(shortcuts);
        }
    }

    return (
        <div className={styles.sidebar}>
            <ul className={styles.top}>
            {props.shortcuts.map(shortcut => (
                <li key={shortcut.id} className={styles.shortcut}>
                    <a className={styles.link} href={shortcut.url} title={shortcut.name} target="_blank">
                        <img className={styles.image} src={shortcut.icon_url} alt={shortcut.name} />
                    </a>
                    <div className={styles.actions}>
                    {isShortcutMarkedForDeletion !== shortcut.id ? (
                            <span title="Remove" onClick={() => markShortcutForDeletion(shortcut.id)}>
                                <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                            </span>
                        ) : (
                            <span className={styles.marked} title="Confirm" onMouseLeave={unmarkShortcutForDeletion} onClick={(event) => handleConfirmShortcutDeletion(event, shortcut.id)}>
                                <Svg content={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>}/>
                            </span>
                        )}
                    </div>
                </li>
                    ))}
            </ul>
            <div className={styles.bottom}>
                <a href="#" title="Sign out" className={styles.signout}>
                    <Svg class={styles.svg} content={<><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></>}/>
                </a>
                <a href="#" title="Settings" className={styles.settings}>
                    <Svg class={styles.svg} content={<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>}/>
                </a>
            </div>
        </div>
    )
}

export default LeftSidebar