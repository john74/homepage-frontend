function Dropdown(props) {
    const styles = props.styles;
    const options = props.options;

    const {
        setSelectedItem,
    } = props.selectItemHook;

    const {
        openMenuId,
    } = props.toggleMenuHook;


    const handleClick = (event, option) => {
        option?.onClick ? option.onClick(event) : setSelectedItem(option);
      };

    return (
        <>
        <ul className={`${styles.dropdown} ${openMenuId === props.id ? styles.open : ''}`}>
            {options.map((option, index) => (
                <li key={option?.id + option?.name + index} className={styles.option} onClick={(event) => handleClick(event, option)}>
                    <span>{option.name}</span>
                </li>
            ))}
        </ul>
        </>
    );
  }

export default Dropdown;