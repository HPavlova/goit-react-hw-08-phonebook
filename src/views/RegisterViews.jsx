import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { register } from '../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

    if (name.trim === '' || email.trim === '' || password.trim === '') {
      return toast.error(
        'SORRY, WE HAVE BEEN UNABLE TO SIGN YOU IN. Please check your sign in details are correct and try again.',
      );
    } else if (password.length < 7) {
      return toast.error('Password must be at least 7 characters');
    }

    dispatch(register(name, email, password));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          //   className={styles.LoginForm__input}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
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
      <button type="submit">Sign up</button>
    </form>
  );
}
