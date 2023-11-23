function User(props) {

    const styles = props.styles;
    const user = props.user;
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId
    } = props.toggleMenuHook;

    const signOut = async () => {
        const initOptions = {
            cache: "no-store",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(
            "http://localhost:3000/api/sign-out/",
            initOptions
          )

        const signOutSuccess = await response.redirected;
        if (signOutSuccess) {
            window.location.replace(response.url);
        }
    }

    return (
        <>
        <div className={styles.user}>
            <img src={user.image} alt="Profile image" onClick={(event) => toggleMenu(event, "userMenu")} />
            <ul className={`${styles.options} ${openMenuId === "userMenu" ? styles.open : ''}`} >
                <li className={styles.option} onClick={signOut}>Sign out</li>
            </ul>
        </div>
        </>
    )
}

export default User