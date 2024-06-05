import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';

import img01 from '../../assets/images/patient-avatar.png';
import img02 from '../../assets/images/avatar2.png';
import img03 from '../../assets/images/avatar3.png';
import img04 from '../../assets/images/avatar4.jpg';
import {HiStar} from 'react-icons/hi';




const Depoimento = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
        >
        <SwiperSlide>
            <div className="py-[10px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={img01} className="rounded-full" alt="Imagem avatar" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">lucas Carlos</h4>
                    
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                    </div>
                </div>
                </div>

                <p className="text-[16px] leading-7 mt-8 text-textColor font-[400] py-3">
                "Foi uma experiência que nos deixou verdadeiramente gratos.”
                </p> 
            </div>
        </SwiperSlide>
            <SwiperSlide>
                <div className="py-[10px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={img02} className="rounded-full" alt="Imagem avatar" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Gabriel Silva</h4>
                        
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-8 text-textColor font-[400] py-3">
                    “Se destacaram com sua habilidade, consideração e envolvimento.”
                    </p> 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[10px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={img03} className="rounded-full" alt="Imagem avatar" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Gustavo Henrique</h4>
                        
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-8 text-textColor font-[400] py-3">
                    “Minha família ficou surpresa com a dedicação, empatia e responsabilidade da empresa.”
                    </p> 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[10px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={img04} className="rounded-full" alt="Imagem avatar" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Lara Carvalho</h4>
                        
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                            <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-8 text-textColor font-[400] py-3">
                    “Eles são competentes. A maneira como cuidaram do meu tio durante sua doença supriu minhas expectativas.”
                    </p> 
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Depoimento;