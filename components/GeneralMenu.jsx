import styles from '../styles/GeneralMenu.module.css';

import Svg from './Svg';

import {
    useHandleProxyRequest,
} from '@hooks';


function GeneralMenu(props) {
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId
    } = props.toggleMenuHook;

    const createBookmarkCategory = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const url = 'http://localhost:3000/api/bookmarks/bulk-create-categories/';
        const method = "POST";
        const body = [{
            "name": "New Category",
            "color": "#fff"
        }];

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const categories = responseJSON.categories;
        props.setBookmarkCategoryGroups(categories);
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