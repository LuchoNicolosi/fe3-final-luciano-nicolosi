import { Link } from 'react-router-dom';
import { useGlobalStates } from './utils/global.context';
import { Button } from './Button';

const Card = ({ data }) => {
  const { theme, dispatch, favs } = useGlobalStates();
  const findFav = favs?.find((fav) => fav.id === data.id);

  const addFav = () => {
    if (!findFav) {
      dispatch({ type: 'ADD_FAV', payload: data });
    }
  };

  const deleteFav = () => {
    const deleteFav = favs.filter((fav) => fav.id !== data.id);
    dispatch({ type: 'DELETE_FAV', payload: deleteFav });
  };

  return (
    <li
      className={`shadow-md ${theme.bgNavCard} ${
        theme.bgLayout === 'bg-[#1e313e]' && 'border-2 border-[#a8c8c1]'
      } rounded-md w-64 h-80`}
    >
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="flex h-5/6 flex-col justify-center items-center gap-4">
        <img
          className="h-32 w-32 rounded-full ring-4 ring-[#c1dad6]"
          src="./images/doctor.jpg"
          alt=""
        />
        <div className={`text-center ${theme.pathColor}`}>
          <p className="text-xl font-semibold">{data.name}</p>
          <p className="text-md font-medium">{data.username}</p>
        </div>

        <Button>
          <Link to={`/dentist/${data.id}`}>See more</Link>
        </Button>
      </div>

      <div className="flex h-1/6 justify-center items-center">
        {findFav ? (
          <button
            onClick={deleteFav}
            className="text-[#8fb5ac] font-bold hover:transition-all hover:text-[#f04158]"
          >
            DELETE FAVS
          </button>
        ) : (
          <button onClick={addFav}>
            <p className="text-[#8fb5ac] hover:text-[#4c6761] font-bold hover:transition-all">
              ADD FAVS
            </p>
          </button>
        )}
      </div>

    </li>
  );
};

export default Card;
