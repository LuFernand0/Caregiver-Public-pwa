import { useContext, useState } from 'react';
import { authContext } from './../../context/AuthContext';

import MyBookings from './MyBookings';
import Profile from './Profile';
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const {
     data: userData,
     loading,
     error,
  } = useGetProfile(`${BASE_URL}/usuarios/perfil/me`);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

        {loading && !error && <Loading/>}

        {error && !loading && <Error errMessage={error.message} />}


        { !loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-amber-400">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{userData.name}</h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">{userData.email}</p>
                <p className="text-textColor text-[15px] leading-6 font-medium">Idade: <span className="ml-2 text-headingColor text-[16px] leading-8">{userData.idade}</span> </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#32363f] p-3 text-[16px] leading-7 rounded-md text-white">Sair</button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Deletar conta</button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div className="mb-5">
                <button
                  onClick={() => setTab('bookings')}
                  className={`${tab === 'bookings' && 'bg-orange-500 text-white font-normal'}
                  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px]
                  leading-7 border border-solid border-orange-500`}
                >
                  Minhas consultas
                </button>

                <button
                  onClick={() => setTab('settings')}
                  className={`${
                    tab === 'settings' && 'bg-orange-500 text-white font-normal'
                  } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px]
                  leading-7 border border-solid border-orange-500`}
                >
                  Configurações de perfil
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <Profile user={userData} />}

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
