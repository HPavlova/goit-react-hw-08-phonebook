import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logIn } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

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

    dispatch(logIn(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          //   className={styles.LoginForm__input}
          type="text"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          //   className={styles.LoginForm__input}
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
