import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderForm } from './components/headerForm';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages';
import { Registration } from './pages/Registration';
import { Private } from './pages/teste/paginaprivada';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HeaderForm />}>
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Route>
        
      </Routes>
    </Router>
  );
}
