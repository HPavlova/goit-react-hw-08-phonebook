import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { getIsLoggedIn, logIn } from '../redux/auth';
import styles from './views.module.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name);
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email.trim === '' || password.trim === '') {
      return toast.error(
        'Please check your sign in details are correct and try again.',
      );
    }

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    !isLoggedIn && (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="text"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button variant="outline-secondary" size="sm" type="submit">
          Log in
        </Button>
      </form>
    )
  );
}
