import { cuidadores } from "../../assets/data/cuidadores";
import CuidadoresCard from "../../components/Cuidadores/CuidadoresCard";
import Depoimento from "../../components/Depoimento/Depoimento";

import { BASE_URL } from './../../config';
import useFetchData from './../../hooks/useFetchData';

import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { useEffect, useState } from "react";


const Cuidadores = () => {

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("")

  
  const handleSearch = () => {
    setQuery(query.trim())
    
  }

  useEffect(()=>{

    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700)

    return () => clearTimeout(timeout)

  },[query])


  const {
    data: cuidadores,
    loading,
    error
  } = useFetchData(`${BASE_URL}/cuidadores?query=${debounceQuery}`);
  
  return <>

    <section className="bg-[#fffefd]">
      <div className="container text-center">
          <h2 className="heading">Encontre um cuidador</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#2c57972c] rounded-md flex items-center justify-between">

            <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Procure um cuidador por nome ou pela especialização"
            value={query}
            onChange={e => setQuery(e.target.value)}
            />

            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>Pesquisar</button>

          </div>
      </div>
    </section>

      <section>
        <div className="container">
          {console.log(cuidadores)}

        {loading && <Loader/>}
        {error && <Error/>}
                  
        { !loading && !error && (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex justify-items-center">
          {cuidadores.map(cuidador => (
            <CuidadoresCard key={cuidador._id} cuidador={cuidador}/>
          ))}
          </div>
        )}
        </div>
      </section>

      <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">O que nossos clientes estão dizendo</h2>
          <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
        </div>
        <Depoimento />
      </div>
    </section>

  </>
}

export default Cuidadores;