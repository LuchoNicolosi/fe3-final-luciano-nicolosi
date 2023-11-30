import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useGlobalStates } from './Components/utils/global.context';

function Layout({ children }) {
  const { theme } = useGlobalStates();
  return (
    <div
      className={`font-sans transition duration-150 ease-in-out ${theme.bgLayout}`}
    >
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
