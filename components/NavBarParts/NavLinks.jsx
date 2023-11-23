import Link from 'next/link';


function NavLinks(props) {

    const styles = props.styles;

    return (
        <>
        <div className={styles.links}>
            <Link className={styles.link} href="http://localhost:3000/">Home</Link>
            <Link className={styles.link} href="http://localhost:3000/">News</Link>
            <Link className={styles.link} href="http://localhost:3000/">Sports</Link>
            <Link className={styles.link} href="http://localhost:3000/">Prices</Link>
        </div>
        </>
    )
}

export default NavLinks