import { useState } from "react";
import PropTypes from "prop-types";
import css from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => { 

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleChange = evt => { 
        const { name, value } = evt.target;

        if (name === "name") setName(value);
        else if(name === "number") setNumber(value);
    };

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit(name, number);

        setName("");
        setNumber("");
    };          

    return <form
        onSubmit={handleSubmit}
        className={css.form}>
        <label > Name:
            <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label > Number:
            <input
                onChange={handleChange}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button
            className={css.formBtn}
            type="submit">Add contacts
        </button>
    </form>;
};


export default ContactForm;



ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};