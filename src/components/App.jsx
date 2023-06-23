import { useSelector, useDispatch } from "react-redux";
import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./Contacts/ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { addContact } from "redux/operations";

const App = () => { 

  const { contacts } = useSelector(state => state);
  const { items } = contacts;
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('useEffect!!!!!');
    dispatch(fetchContacts());

  }, [dispatch]);


  const addNewContacts = (name, number) => {

    const contactExists = items.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) alert(`${name} is already in contacts.`);
    else {
      const newContact = {
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
      <ContactFilter />
      <ContactList/>
    </Container>
  );
};


export default App;
