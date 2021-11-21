import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { fetchContact } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
