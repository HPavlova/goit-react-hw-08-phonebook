import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../redux/auth';
import styles from './views.module.css';

export default function HomeView() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={styles.text}>
      Welcome!
      {!isLoggedIn && <div>Please, register or log in to start. </div>}
    </div>
  );
}
