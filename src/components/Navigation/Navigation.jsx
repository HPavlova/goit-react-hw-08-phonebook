import { NavLink } from 'react-router-dom';

import { register } from '../../redux/auth';
// import styles from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          // className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        {register.isLoggedIn && (
          <NavLink
            to="/contacts"
            // className={styles.link}
            // activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>
      <hr />
    </>
  );
}
