import { CardList } from '../Components/CardList';
import { useGlobalStates } from '../Components/utils/global.context';

const Favs = () => {
  const { theme, favs } = useGlobalStates();

  return (
    <>
      {favs.length > 0 ? (
        <CardList dentists={favs} />
      ) : (
        <div className="flex h-[50vh] justify-center items-center">
          <h1 className={`font-bold text-xl ${theme.pathColor}`}>
            Upss... Nothing to see here.
          </h1>
        </div>
      )}
    </>
  );
};

export default Favs;
