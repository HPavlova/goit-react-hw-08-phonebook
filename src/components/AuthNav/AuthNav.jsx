import { NavLink } from 'react-router-dom';
// import styles from '../AuthNav/AuthNav.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink
          to="/register"
          // className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Sign up
        </NavLink>

        <NavLink
          to="/login"
          // className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Log in
        </NavLink>
      </nav>
      <hr />
    </>
  );
}
