import { useSelector } from 'react-redux';
import { Route } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/register" replace state={state} />
      )}
    </Route>
  );
}
