import { toast } from "react-hot-toast";
import {
    Button, Svg,
} from '@components';


function Actions(props) {
    const styles = props.styles;
    const shortcut = props.shortcut;
    const {
        isMarkedForDeletion,
        markForDeletion,
        unmark
    } = props.markForDeletionHook;

    const confirmShortcutDeletion = async (event, shortcutId) => {
        event.preventDefault();
        event.stopPropagation();

        unmark();
        const initOptions = {
            cache: "no-store",
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
            const bookmarks = responseJSON.bookmarks;
            const shortcuts = responseJSON.shortcuts;
            props.setBookmarks(bookmarks);
            props.setShortcuts(shortcuts);
        }
    }

    return (
        <>
        <div className={styles.actions}>
        {isMarkedForDeletion !== shortcut.id ? (
            <Button className={styles.deleteButton} title="Remove" onClick={() => markForDeletion(shortcut.id)}>
                <Svg content={<><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>}/>
            </Button>
            ) : (
            <Button className={styles.confirmButton} title="Confirm" onMouseLeave={unmark} onClick={(event) => confirmShortcutDeletion(event, shortcut.id)}>
                <Svg content={<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>}/>
            </Button>
            )}
        </div>
        </>
    );
  }

export default Actions;