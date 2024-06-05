import { servicos } from '../assets/data/servicos';
import ServiceCard from '../components/Servicos/ServiceCard';

const Servicos = () => {
  return <section>
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[30px]">
    {servicos.map((item, index) =>(
        <ServiceCard item={item} index={index} key={index}/>
        ))}
  </div>
    </div>
  </section>
}

export default Servicos;