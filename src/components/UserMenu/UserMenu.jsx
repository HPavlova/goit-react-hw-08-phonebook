import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-bootstrap';

import { getIsLoggedIn, logOut } from '../../redux/auth';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  // const name = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  // console.log(name);

  return (
    <div>
      {/* <span>Welcome, {name}! </span> */}
      {isLoggedIn && (
        <NavLink className={styles.link} onClick={() => dispatch(logOut())}>
          Log out
        </NavLink>
      )}
    </div>
  );
}
