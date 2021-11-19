import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../redux/auth';

export default function HomeView() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <div>{!isLoggedIn && <div>Welcome</div>}</div>;
}
