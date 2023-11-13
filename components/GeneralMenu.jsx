import styles from '../styles/GeneralMenu.module.css';
import Svg from './Svg';
import { toast } from "react-hot-toast";


function GeneralMenu(props) {
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId
    } = props.toggleMenuHook;

    const createBookmarkCategory = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const body = [{
            "name": "New Category",
            "color": "#fff"
        }];

        const initOptions = {
            cache: 'no-store',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(
            'http://localhost:3000/api/bookmarks/bulk-create-categories/',
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
            const categories = responseJSON.categories;
            props.setBookmarkCategoryGroups(categories);
        }

        setOpenMenuId(false);
    };

    return (
        <>
        <div className={`${styles.generalMenu} ${openMenuId === "generalMenu" ? styles.open : ''}`}>
            <p className={styles.menuToggler} onClick={(event) => toggleMenu(event, "generalMenu")}>Menu</p>
            <ul className={styles.generalMenuItems}>
                <li className={styles.generalMenuItem} onClick={createBookmarkCategory}>
                    <Svg content={<><path d="M5 12h14"/><path d="M12 5v14"/></>}/>
                    <span>Create bookmark category</span>
                </li>
            </ul>
        </div>
        </>
    );
  }

  export default GeneralMenu;