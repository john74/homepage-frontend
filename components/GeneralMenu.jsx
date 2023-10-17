import styles from '../styles/GeneralMenu.module.css';
import Svg from './Svg';


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

        if (response.ok) {
            const response_data = await response.json();
            const categories = response_data.categories;
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