import { useSelector } from 'react-redux';
import {
  sellectEmail,
  sellectIsLoggedIn,
  sellectIsRefreshing,
  sellectToken,
  sellectUserId,
} from '../../redux/auth/auth.sellectors';

export const useAuth = () => {
  const userId = useSelector(sellectUserId);
  const email = useSelector(sellectEmail);
  const token = useSelector(sellectToken);
  const isLoggedIn = useSelector(sellectIsLoggedIn);
  const isRefreshing = useSelector(sellectIsRefreshing);

  return { userId, email, token, isLoggedIn, isRefreshing };
};
