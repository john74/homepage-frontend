function Buttonn(props) {
    const styles = props.styles;

    return (
        <span className={styles.button} title={props.title.toLowerCase()} onClick={props.onClick} onMouseLeave={props.onMouseLeave}>
        {props.children}
        </span>
    );
}

export default Buttonn;
