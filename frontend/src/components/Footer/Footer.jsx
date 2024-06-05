import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://twitter.com",
    icon: <AiFillTwitterCircle className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "Sobre nós",
  },
  {
    path: "/",
    display: "Serviços",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/Encontre-um-cuidador",
    display: "Encontre um cuidador",
  },
  {
    path: "/",
    display: "Solicite um cuidador",
  },
  {
    path: "/",
    display: "Duvidas",
  },
  {
    path: "/",
    display: "Dê-nos sua opinião",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Termos de Serviços",
  },
  {
    path: "/contato",
    display: "Contate-nos",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-orange-50">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="Logo do site" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">Copyright © {year} desenvolvido por EthosTech todos os direitos reservados.</p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a href={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Links rápidos
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-orange-700">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Suporte
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-orange-700">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Outros
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-orange-700">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
