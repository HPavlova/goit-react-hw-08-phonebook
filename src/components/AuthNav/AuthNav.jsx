import { NavLink } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthNav() {
  return (
    <>
      <nav>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeLink} + ${styles.link}`
              : `${styles.link}`
          }
        >
          Sign up
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeLink} + ${styles.link}`
              : `${styles.link}`
          }
        >
          Log in
        </NavLink>
      </nav>
    </>
  );
}
