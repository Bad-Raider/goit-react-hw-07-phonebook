import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";
import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./Contacts/ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { nanoid } from "nanoid";

const App = () => { 

  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const addNewContacts = (name, number) => {

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) alert(`${name} is already in contacts.`);
    else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(addContact(newContact));
    };
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm
        onSubmit={addNewContacts}
      />
      <h2>Contacts</h2>
      <ContactFilter
      />
      <ContactList
      />
    </Container>
  );
};


export default App;
