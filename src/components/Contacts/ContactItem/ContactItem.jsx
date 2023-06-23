import PropTypes from "prop-types";
import css from './ContactItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

const ContactItem = ({ id, name, number }) => {

    const dispatch = useDispatch();
    
    const handleDeleteContact = () => {
        dispatch(deleteContact(id)); 
    };
    
    return (
        <>
            <li className={css.item}>
                <span className={css.span}>{name}: </span>
                <div className={css.wraper}>
                    <span className={css.spanNum}>{number}</span>
                    <button
                        className={css.itemBtn}
                        type="button"
                        onClick={handleDeleteContact}
                    >X
                    </button>
                </div>
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