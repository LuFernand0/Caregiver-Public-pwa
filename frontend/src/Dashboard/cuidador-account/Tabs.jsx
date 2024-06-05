import {useContext} from 'react';
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({tab, setTab}) => {

  const {dispatch} = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  
  return ( <div>

<span className="lg:hidden">
  <BiMenu className="w-6 h-6 cursor-pointer"/>
  </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
          <button
          onClick={() => setTab("vgeral")}
           className={`${
            tab=== "vgeral"
            ?  "bg-orange-100 text-orange-500"
            : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `}
            >
              Visão Geral
          </button>
          <button
          onClick={() => setTab("consulta")}
           className={`${
            tab=== "consulta"
            ?  "bg-orange-100 text-orange-500"
            : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `}
            >
              Consultas
          </button>
          <button
          onClick={() => setTab("configuracoes")}
           className={`${
            tab=== "configuracoes"
            ?  "bg-orange-100 text-orange-500"
            : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `}
            >
              Perfil
          </button>

          <div className="mt-[100px] w-full">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#32363f] p-3 text-[16px] leading-7 rounded-md text-white">Sair</button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Deletar conta</button>
          </div>

      </div>
    </div>
  )
}

export default Tabs;