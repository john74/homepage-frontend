import styles from '../styles/GeneralMenu.module.css';
import Svg from './Svg';


function GeneralMenu(props) {
    const {
        toggleGeneralMenu,
        isGeneralMenuOpen,
        setIsGeneralMenuOpen,
        generalMenuRef
    } = props.toggleGeneralMenuHook;

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
        setIsGeneralMenuOpen(false);
    };

    return (
        <>
        <div className={`${styles.generalMenu} ${isGeneralMenuOpen ? styles.open : ''}`} ref={generalMenuRef}>
            <p className={styles.menuToggler} onClick={toggleGeneralMenu}>Menu</p>
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