import React from 'react';
import { useGlobalStates } from './utils/global.context';
export const Button = ({ children, width }) => {
  const { theme } = useGlobalStates();
  return (
    <button
      className={`${width} ${theme.bgBtn} ${theme.hoverTextBtn} ${theme.colorTextBtn} font-bold px-2 rounded-md  ${theme.hoverBgBtn} hover:transition-all`}
    >
      {children}
    </button>
  );
};
