import { useSelector } from 'react-redux';
// import { Route } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth';

export default function PrivateRoute({
  children,
  navigateTo = '/',
  // ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const ele = isLoggedIn ? { children } : <Navigate to={navigateTo} />;
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

// <Route path={navigateTo} element={ele} />;

// replace state={state}
