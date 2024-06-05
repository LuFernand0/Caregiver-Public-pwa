import { toast } from 'react-toastify';
import {BASE_URL, token} from './../../config';

const PainelLateral = ({cuidadorId, ticketPrice, timeSlots}) => {

    const reservaHandler = async()=> {
        try {
            const res = await fetch(`${BASE_URL}/reservas/checkout-sucesso/${cuidadorId}`,{
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()

            if(!res.ok){
                throw new Error(data.message + ", Por favor, tente novamente")
            }

            if(data.session.url){
                window.location.href = data.session.url
            }

        } catch (err) {
            toast.error(err.message)
        }
    }

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text__para mt-0 font-bold text-headingColor">Preço</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">R$ {ticketPrice}</span>
        </div>

        <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">Horário disponível</p>
            <ul className="mt-3">
    {timeSlots?.map((item,index)=>(
        <li key={index} className="flex items-center justify-between">
            <p className="text-[15px] leading-6 text-textColor font-semibold">{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">{item.startingTime} - {item.endingTime}</p>
        </li>
    ))}
</ul>
        </div>

        <button onClick={reservaHandler} className="btn px-2 w-full rounded-md">Solicitar</button>
    </div>
  )
}

export default PainelLateral;