import { useContext } from 'react';
import { Login } from '../../pages';
import { AuthContext } from './AuthContext';

export function RequireAuth({ children, permission } : {children: JSX.Element, permission?: string }) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  } 
  console.log(`teste: ${auth.user.permissions}`);
  return children;
}
