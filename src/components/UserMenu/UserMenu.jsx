import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getIsLoggedIn, logOut, getUserName } from '../../redux/auth';
// import styles from '../UserMenu/UserMenu.module.css';

import { NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  console.log(name);

  return (
    <div>
      <Navbar.Text>Signed in as: {name}</Navbar.Text>
      {isLoggedIn && (
        <NavLink onClick={() => dispatch(logOut())}>Log out</NavLink>
      )}
    </div>
  );
}
