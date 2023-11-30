//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link, useLocation } from 'react-router-dom';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { useGlobalStates } from './utils/global.context';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

const linksNav = [
  {
    href: '/',
    desc: 'Home',
  },
  {
    href: '/contact',
    desc: 'Contact',
  },
  {
    href: '/favs',
    desc: 'Favs',
  },
];

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

export default Navbar;

const DesktopNavbar = () => {
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
      className={`hidden w-full justify-center ${theme.bgNavbar} py-8 shadow-md lg:flex`}
    >
      <div className="flex w-3/5 items-center">
        <Link to="/" className="w-2/4">
          <div className="flex font-semibold text-3xl">
            <p className="text-[#697c78]">D</p>
            <p className={`${theme.pathColor}`}>H Odonto</p>
          </div>
        </Link>

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

const MobileNavbar = () => {
  const { theme, dispatch } = useGlobalStates();

  const [toggle, setToggle] = useState('light');
  const { pathname } = useLocation();

  const [tapHamburger, setTapHamburger] = useState(false);

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
      className={`flex justify-center items-center font-semibold text-3xl ${theme.bgNavbar} py-8 shadow-md lg:hidden`}
    >
      <div className="absolute left-0 ml-6 transition-transform transform hover:scale-110">
        <div
          className={`flex gap-4  ${
            tapHamburger && theme.bgFooter + ' mt-24 shadow-md'
          } px-2 py-4  rounded-md ${theme.pathColor}`}
        >
          <button
            className="flex"
            onClick={() => setTapHamburger(!tapHamburger)}
          >
            {tapHamburger ? (
              <TfiClose className="cursor-pointer" />
            ) : (
              <RxHamburgerMenu className="cursor-pointer" />
            )}
          </button>
          <div
            className={`${
              tapHamburger ? 'flex' : 'hidden'
            } flex-col gap-2 transition-all`}
          >
            {linksNav.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className={` hover:text-[#8fb5ac] ${
                  pathname === link.href
                    ? `${theme.textColor}`
                    : `${theme.pathColor}`
                }`}
                onClick={() => setTapHamburger(!tapHamburger)}
              >
                {link.desc}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="flex justify-center">
          <p className="text-[#697c78]">D</p>
          <p className={`${theme.pathColor}`}>H Odonto</p>
        </div>
      </Link>
      <button
        onClick={changeTheme}
        className={`absolute right-0 mr-6 text-2xl  ${theme.pathColor}`}
      >
        {toggle === 'light' ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  );
};
