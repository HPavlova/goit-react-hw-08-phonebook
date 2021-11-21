import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
  // ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  // const ele = shouldRedirect ? <Navigate to={navigateTo} /> : { children };
  // return <Route path={navigateTo} element={ele} />;

  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}

// replace state={state}
