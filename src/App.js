import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { fetchCurrentUser, getIsFetchingCurrentUser } from './redux/auth';
import { default as PublicRoute } from './components/PublicRoute';
import { default as PrivateRoute } from './components/PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterViews'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute navigateTo="/contacts">
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute navigateTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    )
  );
}
