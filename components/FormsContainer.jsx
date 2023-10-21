import {
    AddBookmarkForm, EditBookmarkCategoryForm,
    EditBookmarkForm, EditSearchEngineForm,
} from '@components';

const FormsContainer = (props) => {
    const {
        formName
    } = props.formVisibilityHook;

    return (
        <>
        {formName == "addBookmarkForm" && ( <AddBookmarkForm {...props} /> )}
        {formName == "editBookmarkCategoryForm" && ( <EditBookmarkCategoryForm {...props} /> )}
        {formName == "editBookmarkForm" && ( <EditBookmarkForm {...props} /> )}
        {formName == "editSearchEngineForm" && ( <EditSearchEngineForm {...props} /> )}
        </>
    )
}

export default FormsContainer;