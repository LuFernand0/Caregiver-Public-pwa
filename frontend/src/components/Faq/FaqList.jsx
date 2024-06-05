import {duvidas} from '../../assets/data/duvidas';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className="mt-[38px]">{duvidas.map((item, index) => <FaqItem item={item} key={index}/> )}</ul>
  )
}

export default FaqList;