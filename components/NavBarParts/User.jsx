import { redirect } from 'next/navigation';


function User(props) {

    const styles = props.styles;
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId
    } = props.toggleMenuHook;

    const signOut = async () => {
        console.log("sign out");
    }

    return (
        <>
        <div className={styles.user}>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_640.png" alt="Profile image" onClick={(event) => toggleMenu(event, "userMenu")} />
            <ul className={`${styles.options} ${openMenuId === "userMenu" ? styles.open : ''}`} >
                <li className={styles.option}>Settings</li>
                <li className={styles.option} onClick={signOut}>Sign out</li>
            </ul>
        </div>
        </>
    )
}

export default User