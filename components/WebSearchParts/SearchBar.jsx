import Svg from '../Svg';
import { toast } from "react-hot-toast";


function SearchBar(props) {
    const styles = props.styles;
    const defaultEngine = props.defaultEngine;
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId,
    } = props.toggleMenuHook;

    const addSearchEngine = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const body = [{
            "name": "New Engine"
        }];

        const initOptions = {
            cache: 'no-store',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(
            'http://localhost:3000/api/search-engines/bulk-create/',
            initOptions
          )
          .catch(error => {
            return {error: error}
          })

        if (response?.error || response?.status == 500) {
            toast.error("It appears that our system is currently unresponsive. Please try again later.");
            return;
        }

        const responseJSON = await response.json();

        if (responseJSON?.error) {
            toast.error(responseJSON.error);
            return;
        } else {
            toast.success(responseJSON.message);
            props.setSearchEngines(responseJSON);
            setOpenMenuId("webSearchMenu");
        }
    }

    return (
        <>
        <div className={styles.searchBar}>
            <input type="search" name={defaultEngine.name_attribute}/>
            <span className={styles.addEngine} title="Add search engine" onClick={(event) => addSearchEngine(event)}>
                <Svg content={<><path d="M5 12h14"/><path d="M12 5v14"/></>}/>
            </span>
        </div>
        </>
    );
  }

export default SearchBar;