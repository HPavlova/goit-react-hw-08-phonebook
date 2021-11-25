import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import styles from './ContactList.module.css';

import {
  fetchContact,
  deleteContact,
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const loader = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    !loader && <h1>Загружается...</h1> &&
    contacts && (
      <ul className={styles.ContactList}>
        {contacts.map(contact => (
          <li className={styles.ContactList__item} key={contact.id}>
            {contact.name + ': ' + contact.number}
            <Button
              type="button"
              variant="outline-secondary"
              size="sm"
              name="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    )
  );
}

ContactList.propTypes = {
  onDeleteContact: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
};

// =====  previous version ===

// const mapStatetoProps = state => ({
//   isLoadingContacts: state.contacts.loading,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(fetchContact()),
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(ContactList);
