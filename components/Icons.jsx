function DropdownArrow(props) {
    const styles = props.styles;

    return (
        <span className={styles.icon} onClick={(event) => (props.onClick ? props.onClick(event, props.id) : null)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </span>
    )
}

function MenuIcon(props) {
    const styles = props.styles;

    return (
        <span className={styles.icon} onClick={(event) => (props.onClick ? props.onClick(event, props.id) : null)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
        </span>
    )
}


export { DropdownArrow, MenuIcon};