import { Login } from '../../pages';
import { auth } from '../../utils/constants';

export function RequireAuth({ children } : {children: JSX.Element, }) {
  if (!auth.user) {
    return <Login />;
  }
  return children;
}
