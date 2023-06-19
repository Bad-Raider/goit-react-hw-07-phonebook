import PropTypes from "prop-types";
import css from './ContactItem.module.css';
import { deleteContact } from "redux/contactsSlice";
import { useDispatch } from "react-redux";

const ContactItem = ({ id, name, number }) => {

    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id)); 
    };
    
    return (
        <>
            <li className={css.item}>
                <span className={css.span}>{name}: </span>
                <span className={css.spanNum}>{number}</span>
                <button
                    className={css.itemBtn}
                    type="button"
                    onClick={handleDeleteContact}
                >X
                </button>
            </li >
        </>
    );
}

export default ContactItem;


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};