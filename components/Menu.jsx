import {
    Dropdown, MenuIcon
} from '@components';


function Menu(props) {
    const options = props.options;
    const styles = props.styles;
    const {
        toggleMenu,
    } = props.toggleMenuHook;

    return (
        <>
        <div className={styles.menu}>
            <MenuIcon styles={styles} onClick={toggleMenu} id={props.id} {...props}/>
            <Dropdown styles={styles} options={options} {...props}/>
        </div>
        </>
    );
  }

export default Menu;