import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderForm } from './components/headerForm';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { RequireAuthPermission } from './contexts/Auth/RequireAuthPermissions';
import { Login } from './pages';
import { Error404 } from './pages/Error/error';
import { Registration } from './pages/Registration';
import { RequesterHome } from './pages/Requester';
import { UserHome } from './pages/User';
import { SendDataQrCode } from './pages/User/sendDataQrCode';
import { UserProfile } from './pages/User/profile';
import { InfomationQrCode } from './pages/Requester/infomationQrCode';
import { PageNewQrCode } from './pages/Requester/pageNewQrCodePhoto';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderForm />}>
          <Route index element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route 
          path="/requester-home"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="solicitante">
                <RequesterHome />
              </RequireAuthPermission>
            </RequireAuth>
          } 
        />
        <Route 
          path="/requester-home/new-qrcode"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="solicitante">
                <PageNewQrCode />
              </RequireAuthPermission>
            </RequireAuth>
          } 
        />
        <Route 
          path="/requester-home/information-qrcode"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="solicitante">
                <InfomationQrCode />
              </RequireAuthPermission>
            </RequireAuth>
          } 
        />
        <Route 
          path="/user-home"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="usuario">
                <UserHome />
              </RequireAuthPermission>
            </RequireAuth>
          }
        />
        <Route 
          path="/user-home/user-profile"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="usuario">
                <UserProfile />
              </RequireAuthPermission>
            </RequireAuth>
          }
        />
        <Route 
          path="/user-home/data-qrcode"
          element={
            <RequireAuth>
              <RequireAuthPermission permission="usuario">
                <SendDataQrCode />
              </RequireAuthPermission>
            </RequireAuth>
          }
        />
        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
