import React from 'react';
import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const CuidadoresCard = ({ cuidador }) => {
    const {
        name,
        avgRating,
        totalRating,
        photo,
        specialization,
        ticketPrice,
        bio
    } = cuidador;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300" style={{maxWidth: "13rem"}}>
            <div className="relative">
                <img
                 src={photo}
                 alt="Imagem do cuidador"
                 className="w-full h-48 object-cover"
                 style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                 />
                <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full px-3 py-1">
                    <span className="text-lg font-semibold text-headingColor">{`R$ ${ticketPrice}`}</span>
                </div>
            </div>
            
            <div className="p-3">
                <h2 className="text-lg font-bold text-headingColor mb-2">{name}</h2>

                <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#fdc500] text-yellow-950 py-1 px-3 rounded text-sm font-medium">
                        {specialization}
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                        <img src={starIcon} alt="Icone estrela" className="w-4 h-4"/>
                        <span className="font-semibold text-headingColor">{avgRating}</span>
                        <span className="text-gray-600">({totalRating})</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-600 bg-gray-100 py-1 px-2 rounded">{bio}</p>
                    <Link to={`/cuidadores/${cuidador._id}`} className="w-8 h-8 rounded-full border border-solid border-gray-300 flex items-center justify-center group hover:bg-orange-400 hover:border-none transition ml-2">
                        <BsArrowRight className="w-4 h-4 text-gray-800 group-hover:text-white transition"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CuidadoresCard;
