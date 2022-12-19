import { Error404 } from '../../pages/Error/error';
import { auth } from '../../utils/constants';

export function RequireAuthPermission({ children, permission } : {children: JSX.Element, permission: string }) {
  if (auth.user && permission === auth.user.permission) {
    return children;
  }
  return (
    <Error404 />
  );
}
