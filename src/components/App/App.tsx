import { ToastContainer, toast } from 'react-toastify';
import { AppRouter } from '../../Router/Router';
import { useAuth } from '../../helpers/hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useLazyQuery } from '@apollo/client';
import { GET_CURRENT_USER_QUERY } from '../../helpers/gql/queries';
import { refresh } from '../../redux/auth/auth.operations';

function App() {
  const { token, isLoggedIn } = useAuth();

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const [getCurrentUser, { loading, error }] = useLazyQuery(
    GET_CURRENT_USER_QUERY
  );

  useEffect(() => {
    if (token && !isLoggedIn) {
      // console.log('NEED TO REFRESH');
      (async () => {
        try {
          const res = await getCurrentUser();
          const currentUser = await res.data.getCurrentUser;
          // console.log('useEffect user', currentUser);
          dispatch(
            refresh({
              token,
              id: currentUser.id,
              email: currentUser.email,
            })
          );
        } catch (err) {
          if (error) toast.error('User not loggenid in!');
        }
      })();
    }
  }, [token, error, isLoggedIn, getCurrentUser, dispatch]);

  return (
    <>
      {!loading && (
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
      )}
    </>
  );
}

export default App;
