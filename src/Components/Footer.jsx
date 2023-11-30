import { useGlobalStates } from './utils/global.context';
import { socialMedia } from './utils/links';

const Footer = () => {
  const { theme } = useGlobalStates();

  return (
    <footer
      className={`flex flex-col bottom-0 items-center gap-2 ${theme.bgFooter} ${theme.pathColor} py-4`}
    >
      <div className="flex items-center">
        <p className="font-semibold">Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" className="w-40" />
      </div>
      <div className="flex w-2/4 lg:w-1/5 justify-around pb-2">
        {socialMedia.map((media, i) => (
          <a href={media.href} target="_blank" key={i}>
            <img className="w-8" alt={media.alt} src={media.src} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
