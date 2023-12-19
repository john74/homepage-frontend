import {
    DropdownArrow, Dropdown,
} from '@components';


function Select(props) {
    const defaultValue = props.defaultValue;
    const options = props.options;
    const styles = props.styles;
    const {
        toggleMenu,
    } = props.toggleMenuHook;

    return (
        <>
        <div className={styles.select}>
            <div className={styles.default} onClick={(event) => toggleMenu(event, props.id)}>
                <span className={styles.name}>{defaultValue}</span>
                <DropdownArrow styles={styles} {...props}/>
            </div>
            <Dropdown styles={styles} options={options} {...props}/>
        </div>
        </>
    );
  }

export default Select;