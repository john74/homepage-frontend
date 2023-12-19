function Input(props) {
    const type = props.type;
    const name = props.name;
    const styles = props.styles;

    return (
        <>
        <input className={styles.input} type={type} name={name}/>
        </>
    );
  }

export default Input;