import React, { useState } from 'react';
import { Form } from '../Components/Form';
import { useGlobalStates } from '../Components/utils/global.context';

const Contacto = () => {
  const { theme } = useGlobalStates();
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
  });
  return (
    <div className="flex justify-center h-[50vh] items-center">
      <div
        className={`flex items-center flex-col  ${theme.bgNavCard} ${
          theme.bgLayout === 'bg-[#1e313e]' && 'border-2 border-[#a8c8c1]'
        } rounded-md  p-10 shadow-md `}
      >
        {!sent ? (
          <>
            <h1 className={`text-2xl font-semibold ${theme.pathColor}`}>
              Do you Want to know more?
            </h1>
            <span className={`${theme.textColor}`}>
              Send us your email and we'll send you all the news
            </span>
            <Form data={data} setData={setData} sent={sent} setSent={setSent} />
          </>
        ) : (
          <h1 className={`text-2xl ${theme.pathColor}`}>
            !Gracias <span className="font-semibold">{data.name}</span> te
            contactaremos cuanto antes vía mail¡
          </h1>
        )}
      </div>
    </div>
  );
};

export default Contacto;
