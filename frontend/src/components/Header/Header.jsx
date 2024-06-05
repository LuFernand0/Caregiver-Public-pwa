import { useContext, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext.jsx';
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/cuidadores',
    display: 'Encontre um cuidador'
  },
  {
    path: '/servicos',
    display: 'Serviços'
  },
  {
    path: '/contato',
    display: 'Contato'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const cuidadorProfileURL = `${BASE_URL}/cuidadores/perfil/me`;
  const usuarioProfileURL = `${BASE_URL}/usuarios/perfil/me`;
  const { data } = useGetProfile(role === 'cuidador' ? cuidadorProfileURL : usuarioProfileURL);
  const location = useLocation();

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* MENU */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={
                      location.pathname === link.path
                        ? 'text-orange-600 text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-orange-600'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* NAV DIREITA */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link to={`${role === 'cuidador' ? '/cuidadores/perfil/me' : '/usuarios/perfil/me'}`}>
                  <figure className="w-[40px] h-[30px] rounded-full cursor-pointer">
                    <img src={data?.photo} className="w-full rounded-full" alt="" />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-orange-500 py-2 px-8 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Entrar
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
