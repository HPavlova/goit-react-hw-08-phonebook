import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.currentTarget;
    console.log(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logOut());
  };

  return (
    <form className={styles.UserMenuForm} onSubmit={handleSubmit}>
      <label className={styles.UserMenuForm__label}>
        Email
        <input
          className={styles.UserMenu__input}
          type="string"
          name="name"
          required
          //   value={value}
          onChange={handleChange}
        />
      </label>

      <button className={styles.UserMenuForm__button} type="submit">
        Log out
      </button>
    </form>
  );
}
