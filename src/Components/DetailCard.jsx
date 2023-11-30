import React from 'react';

export const DetailCard = ({ data, theme }) => {
  return (
    <div className={`max-w-screen-md mx-auto px-2 mt-10 ${theme.pathColor}`}>
      <table className="flex min-w-full border-4 border-[#c1dad6]">
        <thead>
          <tr className="flex flex-col">
            <th className="py-2 px-4 border border-[#c1dad6]">Nombre</th>
            <th className="py-2 px-4 border border-[#c1dad6]">Email</th>
            <th className="py-2 px-4 border border-[#c1dad6]">Telefono</th>
            <th className="py-2 px-4 border border-[#c1dad6]">Website</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="flex flex-col w-full text-center font-semibold">
            <td className="py-2 px-4 border border-[#c1dad6]">{data.name}</td>
            <td className="py-2 px-4 border border-[#c1dad6]">{data.email}</td>
            <td className="py-2 px-4 border border-[#c1dad6]">{data.phone}</td>
            <td className="py-2 px-4 border border-[#c1dad6]">
              {data.website}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
