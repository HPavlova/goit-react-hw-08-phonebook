import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  console.log(restricted);
  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}
