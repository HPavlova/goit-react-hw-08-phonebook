import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../redux/auth';

export default function HomeView() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      Welcome!
      {!isLoggedIn && <div>Please, register or log in to your account</div>}
    </div>
  );
}
