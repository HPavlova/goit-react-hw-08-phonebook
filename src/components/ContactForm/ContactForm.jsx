import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';

import { addContact, getVisibleContacts } from '../../redux/contacts';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchSameName = contacts.map(contact => contact.name).includes(name);

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
    }

    setName('');
    setPhone('');
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <label className={styles.ContactForm__label}>
        Name
        <input
          className={styles.ContactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.ContactForm__label}>
        Number
        <input
          className={styles.ContactForm__input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button className={styles.ContactForm__button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  name: propTypes.string,
  phone: propTypes.string,
};

export default ContactForm;
