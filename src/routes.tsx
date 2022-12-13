import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderForm } from './components/headerForm';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { RequireAuthPermission } from './contexts/Auth/RequireAuthPermissions';
import { Login } from './pages';
import { Error404 } from './pages/Error/error';
import { Registration } from './pages/Registration';
import { RequesterHome } from './pages/Requester';
import { Private } from './pages/teste/paginaprivada';
import { UserHome } from './pages/User';
import { DataQrCode } from './pages/User/dataQrCode';
import { UserProfile } from './pages/User/profile';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HeaderForm />}>
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Route>
        <Route path="/requesterHome" element={<RequireAuth><RequireAuthPermission permission="solicitante"><RequesterHome /></RequireAuthPermission></RequireAuth>} />
        <Route path="/userHome" element={<RequireAuth><RequireAuthPermission permission="usuario"><UserHome /></RequireAuthPermission></RequireAuth>} />
        <Route path="/userHome/userProfile" element={<RequireAuth><RequireAuthPermission permission="usuario"><UserProfile /></RequireAuthPermission></RequireAuth>} />
        <Route path="/userHome/dataQrCode" element={<RequireAuth><RequireAuthPermission permission="usuario"><DataQrCode /></RequireAuthPermission></RequireAuth>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
