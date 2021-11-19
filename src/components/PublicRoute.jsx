import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to="/" replace state={state} /> : children}
    </Route>
  );
}
