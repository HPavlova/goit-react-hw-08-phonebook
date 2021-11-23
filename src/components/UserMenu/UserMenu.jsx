import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  // const name = useSelector(getUserName);
  const dispatch = useDispatch();

  // console.log(name);

  return (
    <div>
      {/* <span>Welcome, {name} </span> */}
      <button
        className={styles.UserMenuForm__button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
