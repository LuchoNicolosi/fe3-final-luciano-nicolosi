import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCard } from '../Components/DetailCard';
import { useGlobalStates } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { theme } = useGlobalStates();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data ? (
        <DetailCard theme={theme} data={data} />
      ) : (
        <h1 className={`font-bold text-xl ${theme.pathColor}`}>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
