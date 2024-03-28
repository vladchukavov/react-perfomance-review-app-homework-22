import { Outlet } from 'react-router-dom';
import LoginPage from './routes/LoginPage.jsx';

const App = () => (
  <>
    <LoginPage />
    <Outlet />
  </>
);

export default App;
