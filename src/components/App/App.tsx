import { ToastContainer } from 'react-toastify';
import { AppRouter } from '../../Router/Router';
import { useAuth } from '../../helpers/hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_QUERY } from '../../helpers/gql/queries';
import { refresh } from '../../redux/auth/auth.operations';

function App() {
  const { token } = useAuth();

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const { data } = useQuery(GET_CURRENT_USER_QUERY);

  useEffect(() => {
    if (token) {
      dispatch(
        refresh({
          token,
          id: data?.getCurrentUser.id,
          email: data?.getCurrentUser.email,
        })
      );
    }
  }, [token, dispatch, data?.getCurrentUser.id, data?.getCurrentUser.email]);

  return (
    <>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
