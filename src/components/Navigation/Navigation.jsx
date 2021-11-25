import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth';
import styles from '../Navigation/Navigation.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeLink} + ${styles.link}`
              : `${styles.link}`
          }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} + ${styles.link}`
                : `${styles.link}`
            }
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
}
