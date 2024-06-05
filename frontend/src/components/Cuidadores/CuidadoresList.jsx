import CuidadoresCard from './CuidadoresCard';
import { BASE_URL } from './../../config';
import useFetchData from './../../hooks/useFetchData';

import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';

const CuidadoresList = () => {

  const {data:cuidadores, loading, error} = useFetchData(`${BASE_URL}/cuidadores`);

  return (
  <>
  {loading && <Loader/>}
  {error && <Error/>}

    { !loading && !error && ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-[25px]
    mt-[30px] lg:mt-[55px]">
      {cuidadores.map((cuidador) => (
         <CuidadoresCard key={cuidador._id} cuidador={cuidador} />
         ))}
    </div>
   )}

  </>
  )
}

export default CuidadoresList;