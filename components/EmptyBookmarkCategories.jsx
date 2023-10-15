import styles from '../styles/EmptyBookmarkCategories.module.css';


function EmptyBookmarkCategories(props) {
    return (
        <>
        <p className={styles.message}>
            No bookmark categories found. Click on the <span>menu</span> to add one.
        </p>
        </>
    );
  }

  export default EmptyBookmarkCategories;