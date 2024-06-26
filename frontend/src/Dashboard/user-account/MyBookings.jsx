import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import CuidadoresCard from "../../components/Cuidadores/CuidadoresCardSmall";

const MyBookings = () => {

  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/usuarios/consultas/minhas-consultas`);

  return ( 
    <div>
      {loading && !error && <Loading/>}

      {error && !loading && <Error errMessage={error.message} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 flex justify-items-center">
          {appointments.map(cuidador => (
            <CuidadoresCard cuidador={cuidador} key={cuidador._id}/>
          ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-orange-500"> 
          Você não possui nenhum serviço ativo!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
