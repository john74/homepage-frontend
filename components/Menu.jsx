import {
    DropdownArrow, Dropdown, MenuIcon
} from '@components';


function Menu(props) {
    const options = props.options;
    const styles = props.styles;
    const {
        toggleMenu,
        openMenuId,
    } = props.toggleMenuHook;

    return (
        <>
        <div className={styles.menu}>
            <MenuIcon styles={styles} onClick={toggleMenu} id={props.id} {...props}/>
            <ul className={`${styles.dropdown} ${openMenuId === props.id ? styles.open : ''}`}>
            {options.map((option, index) => (
                <li key={option?.id+option?.name+index} className={styles.option} onClick={(event) => option.onClick(event)}>
                {option.name}
                </li>
            ))}
            </ul>
        </div>
        </>
    );
  }

export default Menu;