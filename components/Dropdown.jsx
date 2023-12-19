function Dropdown(props) {
    const styles = props.styles;
    const options = props.options;

    const {
        selectedItem,
        setSelectedItem,
    } = props.selectItemHook;

    const {
        openMenuId,
        setOpenMenuId,
    } = props.toggleMenuHook;

    return (
        <>
        <ul className={`${styles.dropdown} ${openMenuId === props.id ? styles.open : ''}`}>
            {options.map((option, index) => (
                <li key={option.id} className={styles.option} onClick={(event) => setSelectedItem(option)}>
                {option.name}
                </li>
            ))}
        </ul>
        </>
    );
  }

export default Dropdown;