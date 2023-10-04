import styles from '../styles/BookmarkCategoryHead.module.css';
import Svg from './Svg';


function BookmarkCategoryHead(props) {

    return (
        <div className={styles.head} ref={props.menuRef}>
            <h1 className={styles.title} style={{ backgroundColor: props.category.color }}>{props.category.name}</h1>
            <span className={styles.menuToggler} onClick={() => props.toggleMenu(props.category.id)}>
                <Svg content={<><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></>}/>
            </span>
        </div>
    );
  }

  export default BookmarkCategoryHead;