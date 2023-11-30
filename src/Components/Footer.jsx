import { Link } from 'react-router-dom';
import { useGlobalStates } from './utils/global.context';
import { FaInstagram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  const { theme } = useGlobalStates();

  return (
    <footer
      className={`flex flex-col items-center gap-2 ${theme.bgFooter} ${theme.pathColor} py-4`}
    >
      <div className="flex items-center gap-2">
        <p className="font-semibold">Powered by</p>
        <p className="font-semibold text-[#ffff]">Luciano Nicolosi</p>
      </div>
      <div className="flex w-2/4 lg:w-1/5 justify-around pb-2">
        {socialMedia.map((media, i) => (
          <Link
            to={media.href}
            className={`${theme.pathColor} text-2xl`}
            target="_blank"
            key={i}
          >
            {media.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

const socialMedia = [
  {
    href: 'https://www.instagram.com/luchoniicolosi/',
    icon: <FaInstagram />,
  },
  {
    href: 'https://github.com/LuchoNicolosi',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/luciano-nicolosi/',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://twitter.com/lucho_nicolosi',
    icon: <FaTwitter />,
  },
];
