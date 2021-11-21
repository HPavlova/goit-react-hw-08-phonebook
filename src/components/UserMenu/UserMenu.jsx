import { useSelector, useDispatch } from 'react-redux';
import { logOut, getUserName } from '../../redux/auth';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logOut());
  };

  return (
    <div>
      <span>Welcome, {name} </span>
      <button
        className={styles.UserMenuForm__button}
        type="button"
        onClick={handleSubmit}
      >
        Log out
      </button>
    </div>
  );
}
