import ContactItem from "../ContactItem/ContactItem";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";

const ContactList = () => {

    const { contacts, filter } = useSelector(state => state);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const arrContacts = getVisibleContacts();

    return (
        <>
            {contacts.isLoading && <h2>Loading...</h2>}
            {contacts.error && <h2>Oooopsss! Try again, please</h2>}
            <ul className={css.list}>
                {arrContacts.map(({ id, name, number, phone }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number || phone}
                    />
                ))}
            </ul>
        </>
    );
};

export default ContactList;
