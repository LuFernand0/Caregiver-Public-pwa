import React from 'react';
import {Link} from 'react-router-dom';

import Sobre from '../components/Sobre/Sobre';
import ServiceList from '../components/Servicos/ServiceList';
import CuidadoresList from '../components/Cuidadores/CuidadoresList';
import Depoimento from '../components/Depoimento/Depoimento';

import img1 from '../assets/images/home-1.jpg';
import img2 from '../assets/images/home-2.jpg';
import img4 from '../assets/images/feature-img.png';
import img5 from '../assets/images/video-icon.png';
import img6 from '../assets/images/faq-img.png';

import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import icon4 from '../assets/images/avatar-icon.png';

import {BsArrowRight} from 'react-icons/bs';
import FaqList from '../components/Faq/FaqList';


const Home = () => {
  return <>
  
    {/* SEÇÃO PRINCIPAL*/}

    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

              {/* CONTEUDO PRINCIPAL*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                   md:leading-[70px]">
                    Seu Bem-Estar é a Nossa Prioridade
                    </h1>
                    <p className="text__para font-[500] text-lg">Na nossa plataforma, acreditamos que cada indivíduo merece receber cuidados de qualidade. Nosso objetivo é conectar você com profissionais de cuidado altamente qualificados que podem atender às suas necessidades específicas. Com uma variedade de serviços disponíveis, estamos aqui para garantir que seu bem-estar seja sempre a nossa prioridade. Explore nosso site para descobrir como podemos ajudar a melhorar sua qualidade de vida.</p>
                    <Link to="/cuidadores">
                    <button className="btn">Solicitar Cuidadores</button>
                    </Link>
                </div>

                {/* SEÇÃO ABAIXO*/}
              <div className="mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                      <span className="w-[100px] h-2 bg-amber-300 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Anos de Experiência</p>
                  </div>
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">5K</h2>
                      <span className="w-[100px] h-2 bg-amber-400 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Clientes Satisfeitos</p>
                  </div>
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">300+</h2>
                      <span className="w-[100px] h-2 bg-amber-500 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Cuidadores</p>
                  </div>





                </div>
              </div>

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="mb-[55px] rounded-lg" src={img1} alt="Imagem Principal" />
                </div> 
                <div className="mt-[30px]">
                  <img className=" rounded-lg" id="sem-foto" src={img2} alt="Imagem Secundaria" />
                  {/* <img className="max-w-md rounded-lg" src={img3} alt="Imagem Terciaria" /> */}
                </div>
              </div>
        </div>
      </div>
    </section>
    {/* SEÇÃO PRINCIPAL FINAL*/}

    {/* SEÇÃO PRINCIPAL SEGUNDA PARTE*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">Fornecemos os melhores serviços de cuidadoria</h2>
              <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon1} alt="Primeiro icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Pesquise um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                      Explore nossa extensa rede de profissionais de cuidado. Cada um de nossos cuidadores é treinado para oferecer cuidados personalizados que atendem às suas necessidades específicas.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none transition-all duration-300 ease-in-out">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon2} alt="Segundo icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Encontre um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                      Navegue pelos perfis de nossos cuidadores para encontrar o ajuste perfeito para suas necessidades. Cada um de nossos cuidadores é altamente qualificado e comprometido em fornecer cuidados de alta qualidade.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon3} alt="Terceiro icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Solicite um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                      Pronto para dar o próximo passo? Solicite um cuidador hoje mesmo e experimente a tranquilidade de saber que você ou seu ente querido está recebendo cuidados de qualidade.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

              </div>
        </div>
      </section>
    {/* SEÇÃO PRINCIPAL SEGUNDA PARTE FINAL*/}

    {/* COMPONENTE SOBRE */}
      <Sobre />

    {/* SEÇÃO SERVIÇOS*/}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Nossos serviços</h2>
          <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
        </div>

        <ServiceList />
      </div>
    </section>
    {/* SEÇÃO SERVIÇOS FINAL*/}

    {/* SEÇÃO RECURSOS*/}
    <section>
      <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*RECURSOS CONTEUDO*/}
          <div className="xl:w-[530px]">
            <h2 className="heading">Solicite cuidadores virtualmente <br/> a qualquer hora.</h2>

            <ul className="pl-4">
              <li className="text__para">
                  1. Agende o serviço diretamente através do nosso sistema de agendamento fácil e rápido.
              </li>
              <li className="text__para">
                  2. Encontre o cuidador ideal para suas necessidades e entre em contato diretamente através da plataforma.
              </li>
              <li className="text__para">
                  3. Verifique a disponibilidade do cuidador e selecione o horário mais adequado para o encontro, com total flexibilidade.
              </li>
            </ul>
              <Link to='/cuidadores'><button className="btn">Saiba Mais</button></Link>
          </div>

              {/*RECURSOS IMAGEM*/}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img className="w-3/4" src={img4} alt="Imagem Recursos" />

                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                        Seg, 24
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                        10:00
                      </p>
                    </div>
                      <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                        <img src={img5} alt="Imagem video" />
                      </span>
                  </div>

                  <div className="w-[65px] lg:w-[70px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    Marcado
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={icon4} alt="Icone" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:heading-[22px] font-[700] text-headingColor">
                      Gustavo Miotto
                    </h4>
                  </div>

                </div>
              </div>
          </div>
      </div>
    </section>
    {/* SEÇÃO RECURSOS FINAL*/}

    {/* SEÇÃO CUIDADORES */}
    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Cuidadores em Destaque</h2>
          <p className="text__para text-center">Oferecemos cuidados especializados para todos, com o compromisso de proporcionar um serviço de qualidade mundial. Nossos cuidadores em destaque são a prova do nosso compromisso com a excelência.</p>
        </div>

        <CuidadoresList />
      </div>
    </section>
    {/* SEÇÃO CUIDADORES FIM */}

    {/* SEÇÃO FAQ */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block"><img src={img6} alt="Imagem do Faq" /></div>

          <div className="w-full md:w-1/2">
              <h2 className="heading">Perguntas Frequentes dos nossos clientes</h2>

              <FaqList />
          </div>
        </div>
      </div>
    </section>
    {/* SEÇÃO FAQ FINAL*/}

    {/* SEÇÃO DEPOIMENTO */}

    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">O que nossos clientes estão dizendo</h2>
          <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
        </div>
        <Depoimento />
      </div>
    </section>

    {/* SEÇÃO DEPOIMENTO  FIM*/}

  </>
};

export default Home;