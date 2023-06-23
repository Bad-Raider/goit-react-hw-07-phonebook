import ContactItem from "../ContactItem/ContactItem";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";

const ContactList = () => {

    const {contacts, filter} = useSelector(state => state);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const arrContacts = getVisibleContacts();

    return (
        <>
            <ul className={css.list}>
                {contacts.isLoading && <h2>Waiting, please)</h2>}
                {contacts.error} %% <h2>Oooopsss...</h2>
                {arrContacts.map(({ id, name, number, phone }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name }
                        number={number || phone}
                    />
                ))}
            </ul>
        </>
    );
};

export default ContactList;
