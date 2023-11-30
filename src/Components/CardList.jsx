import React from 'react';
import Card from './Card';
import { useGlobalStates } from './utils/global.context';

export const CardList = ({ dentists }) => {
  const { theme } = useGlobalStates();
  return (
    <>
      {dentists?.length > 0 ? (
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10">
          {dentists.map((user) => (
            <Card
              data={{ name: user.name, username: user.username, id: user.id }}
              key={user.id}
            />
          ))}
        </ul>
      ) : (
        <h1 className={`font-bold text-xl ${theme.pathColor}`}>Loading...</h1>
      )}
    </>
  );
};
