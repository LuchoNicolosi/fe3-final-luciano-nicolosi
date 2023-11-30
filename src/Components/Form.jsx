import { useState } from 'react';
import { Button } from './Button';
import { useGlobalStates } from './utils/global.context';

export const Form = ({ sent, setSent, data, setData }) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.length < 5) {
      return setError(true);
    }
    //Con esta expresión regular puedes validar cualquier dirección de correo elecrónico que contenga caracteres Unicode
    //Fuente: https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(data.email)) {
      return setError(true);
    }

    setError(false);
    setSent(true);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      {!sent && (
        <>
          <form
            className="flex flex-col w-full mt-10 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              value={data.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            <div className="flex justify-center">
              <Button width="w-64">Send</Button>
            </div>
          </form>
          {error && (
            <h3 className="text-[#f04158]">
              Por favor verifique su información nuevamente.
            </h3>
          )}
        </>
      )}
    </>
  );
};
