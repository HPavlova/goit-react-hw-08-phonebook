import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth';
import styles from '../Navigation/Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={styles.link}
          // style={isActive => ({
          //   color: isActive ? 'rgb(236, 96, 96);' : 'black;',
          // })}
          // className={isActive =>
          //   !isActive ? 'styles.link' : 'styles.activeLink'
          // }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={styles.link}
            // activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
}
