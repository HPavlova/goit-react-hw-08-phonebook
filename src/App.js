import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { fetchCurrentUser } from './redux/auth';
import { HomeView, RegisterView, LoginView, ContactsView } from './views';
import { default as PublicRoute } from './components/PublicRoute';
import { default as PrivateRoute } from './components/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Suspense fallback={<p>Загружается...</p>}>
          <PublicRoute path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>

          {/* <Route path="/" element={<HomeView />} /> */}
          {/* <Route path="register" element={<RegisterView />} /> */}
          {/* <Route path="login" element={<LoginView />} /> */}
          {/* <Route path="contacts" element={<ContactsView />} /> */}
        </Suspense>
      </Routes>
      <ToastContainer />
    </Container>
  );
}

// Добавь маршрутизацию и несколько страниц:
// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
// Добавь навигационные ссылки для перехода по маршрутам.
