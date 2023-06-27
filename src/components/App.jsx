import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import moment from 'moment';
import { Toaster } from 'react-hot-toast';

// Публічний та Приватний роутер в залежності від наявності userAccessToken, котрий приходить від BACKEND
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/operations';
import { selectIsRefreshing, selectAccessToken } from 'redux/auth/selectors';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PasswordPage = lazy(() => import('pages/PasswordPage/PasswordPage'));
const PasswordRecoveryPage = lazy(() =>
  import('pages/PasswordRecoveryPage/PasswordRecoveryPage')
);
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const UserForm = lazy(() => import('./UserForm/UserForm'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('./ChoosedDay/ChoosedDay'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  moment.updateLocale('en', { week: { dow: 1 } });

  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch, accessToken]);
  return (
    <Suspense fallback={null}>
      {/* До fallback потрібно додати LOADER AБО Spinner */}
      {!isRefreshing && (
        <>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<MainPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="password" element={<PasswordPage />} />
              <Route
                path="reset-password/:token"
                element={<PasswordRecoveryPage />}
              />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<MainLayout />}>
                <Route path="account" element={<UserForm />} />
                <Route path="calendar" element={<CalendarPage />}>
                  <Route path="month/:currentDate" element={<ChoosedMonth />} />
                  <Route path="day/:currentDay" element={<ChoosedDay />} />
                </Route>
                <Route path="statistics" element={<StatisticsPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Suspense>
  );
};
