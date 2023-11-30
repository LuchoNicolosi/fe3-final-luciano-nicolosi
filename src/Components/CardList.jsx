import React from 'react';
import Card from './Card';

export const CardList = ({ dentists }) => {
  return (
    <div className="flex w-full justify-center my-10">
      <ul className="grid grid-cols-4 gap-10">
        {dentists.map((user) => (
          <Card
            data={{ name: user.name, username: user.username, id: user.id }}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
};
