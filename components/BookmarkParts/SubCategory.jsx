import {
    Bookmark,
} from '.';


function SubCategory(props) {
    const styles = props.styles;
    const subCategory = props.subCategory;
    const bookmarksArray = props.bookmarks[subCategory.id];

    return (
        <div key={'bookmark-sub-category-' + subCategory.id} className={styles.bookmarkSubCategory}>
              <h6>{subCategory.name}</h6>
              <Bookmark styles={styles} bookmarksArray={bookmarksArray} {...props} />
        </div>
      );
  }

export default SubCategory;