import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import Servicos from "../pages/Servicos";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Contato from "../pages/Contato";
import Cuidadores from "../pages/Cuidadores/Cuidadores";
import Detalhes from "../pages/Cuidadores/Detalhes";
import MinhaConta from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/cuidador-account/Dashboard';
import CheckoutSucess from '../pages/CheckoutSucess';

import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} /> 
      <Route path="/cuidadores" element={<Cuidadores/>} /> 
      <Route path="/cuidadores/:id" element={<Detalhes/>} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/cadastro" element={<Cadastro/>} /> 
      <Route path="/contato" element={<Contato/>} /> 
      <Route path="/servicos" element={<Servicos/>} />
      <Route path="/checkout-sucesso" element={<CheckoutSucess/>} />
      <Route path="/usuarios/perfil/me" element={<ProtectedRoute allowedRoles={["usuario"]}> <MinhaConta/> </ProtectedRoute>} />
      <Route path="/cuidadores/perfil/me" element={<ProtectedRoute allowedRoles={["cuidador"]}> <Dashboard/> </ProtectedRoute>} /> 
    </Routes>
  );
};

export default Routers;
