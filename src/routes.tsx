import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderForm } from './components/headerForm';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages';
import { Registration } from './pages/Registration';
import { RequesterHome } from './pages/Requester/home';
import { Private } from './pages/teste/paginaprivada';
import { Passou } from './pages/teste/solicitante';
import { UserHome } from './pages/User';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HeaderForm />}>
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        <Route path="/solicitante" element={<RequireAuth permission={'solicitante'}><Passou /></RequireAuth>} />
      </Route>
        <Route path="/requesterHome" element={<RequireAuth><RequesterHome /></RequireAuth>} />
        <Route path="/userHome" element={<RequireAuth><UserHome /></RequireAuth>} />
      </Routes>
    </Router>
  );
}
