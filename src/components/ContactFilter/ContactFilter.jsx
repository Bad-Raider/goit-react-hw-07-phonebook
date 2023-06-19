import css from './ContactFilter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { addFilter } from 'redux/filterSlice'; 


const ContactFilter = () => {

  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();


  const handleChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.contactFilter}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </>
  )
};


export default ContactFilter;

