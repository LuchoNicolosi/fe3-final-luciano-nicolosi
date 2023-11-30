//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link, useLocation } from 'react-router-dom';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { useGlobalStates } from './utils/global.context';
import { useState } from 'react';
import { linksNav } from './utils/links';

const Navbar = () => {
  const { theme, dispatch } = useGlobalStates();

  const [toggle, setToggle] = useState('light');
  const { pathname } = useLocation();

  const changeTheme = () => {
    if (toggle === 'light') {
      dispatch({ type: 'dark' });
      setToggle('dark');
    }
    if (toggle === 'dark') {
      dispatch({ type: 'light' });
      setToggle('light');
    }
  };

  return (
    <div
      className={`flex w-full justify-center ${theme.bgNavbar} py-8 shadow-md`}
    >
      <div className="flex w-3/5 items-center">
        <div className="w-2/4 flex font-semibold text-3xl">
          <p className="text-[#697c78]">D</p>
          <p className={`${theme.pathColor}`}>H Odonto</p>
        </div>

        <nav
          className={`flex w-2/4 justify-around py-5 rounded-md shadow-[#8fb5ac]	 ${theme.bgNavCard} text-lg font-bold ${theme.textColor}`}
        >
          {linksNav.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className={`hover:transition-all hover:text-[#8fb5ac] ${
                pathname === link.href
                  ? `${theme.textColor}`
                  : `${theme.pathColor}`
              }`}
            >
              {link.desc}
            </Link>
          ))}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button
            onClick={changeTheme}
            className={`text-2xl ${theme.pathColor}`}
          >
            {toggle === 'light' ? <BsMoonFill /> : <BsSunFill />}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
