import React from 'react';
import { useGlobalStates } from '../Components/utils/global.context';

const PageNotFound = () => {
  const { theme } = useGlobalStates();
  return (
    <div className="flex h-screen justify-center items-center">
      <h1 className={`font-bold text-xl ${theme.pathColor}`}>
        404 Page Not Found.
      </h1>
    </div>
  );
};

export default PageNotFound;
