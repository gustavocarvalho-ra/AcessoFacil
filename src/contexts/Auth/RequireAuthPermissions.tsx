import { useContext } from 'react';
import { Error404 } from '../../pages/Error/error';
import { AuthContext } from './AuthContext';

export function RequireAuthPermission({ children, permission } : {children: JSX.Element, permission: string }) {
  const auth = useContext(AuthContext);

  if (auth.user && permission === auth.user.permissions) {
    return children;
  }
  return (
    <Error404 />
  );
}
