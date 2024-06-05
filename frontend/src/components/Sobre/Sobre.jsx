import React from 'react';
import img01 from '../../assets/images/about.png';
import img02 from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

                {/* IMAGENS DO COMPONENTE SOBRE */}
            <div className="relative w-3/4 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={img01} alt="Imagem do sobre" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={img02} alt="Card do sobre" />
                </div>
            </div>

                {/* CONTEUDO DO COMPONENTE SOBRE */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Estamos honrados em fazer parte desta comunidade</h2>
                <p className="text__para">A Caregiver foi fundada em 2023 com o propósito de estabelecer
                 uma conexão entre profissionais e clientes. Apesar de sermos uma empresa nova,
                 com pouca experiência de mercado, oferecemos serviços especializados em nichos específicos.</p>

                <p className="text__para mt-[30px]">Ao escolher a nossa empresa, você estará confiando
                 os cuidados de um familiar ou animal de estimação a uma equipe comprometida em
                 proporcionar o melhor ambiente de afeto para o seu ente querido.
                 Reconhecemos a importância de selecionar cuidadores adequados,
                 pois não se pode simplesmente designar qualquer pessoa para
                 cuidar daqueles que precisam de atenção e carinho.</p>

                <Link to='/servicos'><button className="btn">Saiba mais</button></Link>
            </div>

        </div>
    </div>
  </section>
}

export default Sobre;