import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {AiOutlineDelete} from "react-icons/ai";

import uploadImageToCloudinary from './../../utils/uploadCloudinary';
import { BASE_URL, token } from "./../../config";
import { toast } from "react-toastify";

const Profile = ({cuidadorData}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({  
        name: "",
        email: "",
        password: "",
        phone: "",
        bio: "",
        gender: "",
        specialization: "",
        ticketPrice: 0,
        qualifications: [],
        experiences: [],
        timeSlots: [],
        about: "",
        photo: null
    });

    useEffect(()=>{
        setFormData({
            name: cuidadorData?.name,
            email: cuidadorData?.email,

            phone: cuidadorData?.phone,
            bio: cuidadorData?.bio,
            gender: cuidadorData?.gender,
            specialization: cuidadorData?.specialization,
            ticketPrice: cuidadorData?.ticketPrice,
            qualifications: cuidadorData?.qualifications,
            experiences: cuidadorData?.experiences,
            timeSlots: cuidadorData?.timeSlots,
            about: cuidadorData?.about,
            photo: cuidadorData?.photo,
        });
    }, [cuidadorData]);

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = async event => {

        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);

        setFormData({...formData, photo:data?.url});
    };

    const updateProfileHandler = async e => {
        navigate(0);
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/cuidadores/${cuidadorData._id}`,{
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                   Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if(!res.ok){
                throw Error(result.message);
            }

          toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const addItem = (key, item) => {
        setFormData( prevFormData => ({...prevFormData, [key]: [...prevFormData[key], item]}));
    }

    const handleReusableInputChangeFunc = (key, index, event) => {

        const {name, value} = event.target

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]];

            updateItems[index][name] = value;

            return {
                ...prevFormData,
                [key]:updateItems,
            };
        });
    };


    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]:prevFormData[key].filter((_,i)=>i !== index),
        }));
    };

    // QUALIFICAÇÃO

    const addQualification = e => {
        e.preventDefault();

        addItem("qualifications", {
            startingDate: "",
            endingDate:"",
            degree:"",
            university:""
        });
    };

    const handleQualificationChange = (event, index) => {

        handleReusableInputChangeFunc("qualifications", index, event);
    }

    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem("qualifications", index)
    }


    // EXPERIÊNCIA

    const addExperience = e => {
        e.preventDefault();

        addItem("experiences", {
            startingDate: "",
            endingDate:"",
            position:"",
            company:""
        });
    };

    const handleExperienceChange = (event, index) => {

        handleReusableInputChangeFunc("experiences", index, event);
    }

    const deleteExperience = (e, index) => {
        e.preventDefault()
        deleteItem("experiences", index)
    }

    // HORÁRIO


    const addTimeSlot = e => {
        e.preventDefault();

        addItem("timeSlots", {
            day: "",
            startingTime:"",
            endingTime:""
        });
    };

    const handleTimeSlotChange = (event, index) => {

        handleReusableInputChangeFunc("timeSlots", index, event);
    }

    const deleteTimeSlot = (e, index) => {
        e.preventDefault()
        deleteItem("timeSlots", index)
    }


  return ( 
  <div>
    <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Informações do Perfil
    </h2>

    <form>
        <div className="mb-5">
            <p className="form__label">Nome*</p>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nome completo"
            className="form__input"
            />
        </div>
        <div className="mb-5">
            <p className="form__label">Email*</p>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled={true}
            />
        </div>
        <div className="mb-5">
            <p className="form__label">Telefone*</p>
            <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Número de telefone"
            className="form__input"
            />
        </div>
        <div className="mb-5">
            <p className="form__label">Localização*</p>
            <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Localização"
            className="form__input"
            maxLength={100}
            />
        </div>

        <div className="mb-5">
            <div className="grid grid-cols-3 gap-5 mb-[30px]">
                <div>
                    <p className="form__label">Gênero*</p>
                    <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="form__input py-3.5"
                     >
                    <option value="">Select</option>
                    <option value="homem">Homem</option>
                    <option value="mulher">Mulher</option>
                    <option value="outros">Outros</option>
                     </select>
                </div>
                <div>
                    <p className="form__label">Especialização*</p>
                    <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="form__input py-3.5"
                     >
                    <option value="">Select</option>
                    <option value="Crianças">Crianças</option>
                    <option value="Idosos">Idosos</option>
                    <option value="PCDs">Pcds</option>
                    <option value="Pets">Pets</option>
                     </select>
                </div>

                <div>
                    <p className="form__label">Custo do Serviço*</p>
                    <input
                    type="number"
                    placeholder="100"
                    name="ticketPrice"
                    value={formData.ticketPrice}
                    className="form__input"
                    onChange={handleInputChange}
                    />
                </div>

            </div>
        </div>

        <div className="mb-5">
            <p className="form__label text-headingColor font-bold text-lg">Qualificações*</p>
            {formData.qualifications?.map((item,index) => ( <div key={index}>
                <div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <p className="form__label">Data de Início*</p>
                            <input
                            type="date"
                            name="startingDate"
                            value={item.startingDate}
                            className="form__input"
                            onChange={e=> handleQualificationChange(e, index)}
                            />
                        </div>
                        <div>
                            <p className="form__label">Data de Término*</p>
                            <input
                            type="date"
                            name="endingDate"
                            value={item.endingDate}
                            className="form__input"
                            onChange={e=> handleQualificationChange(e, index)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div>
                            <p className="form__label ">Formação*</p>
                            <input
                            type="text"
                            name="degree"
                            value={item.degree}
                            className="form__input"
                            onChange={e=> handleQualificationChange(e, index)}
                            />
                        </div>
                        <div>
                            <p className="form__label">Instituição*</p>
                            <input
                            type="text"
                            name="university"
                            value={item.university}
                            className="form__input"
                            onChange={e=> handleQualificationChange(e, index)}
                            />
                        </div>
                    </div>


                    <button
                      onClick={e=>deleteQualification(e,index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                      >
                        <AiOutlineDelete/>
                    </button>
                </div>
            </div>
        ))}

        <button onClick={addQualification} className="bg-[#222121] py-2 px-5 rounded text-white h-fit cursor-pointer">Adicionar Qualificações</button>
        </div>

        <div className="mb-5">
            <p className="form__label text-headingColor font-bold text-lg">Experiências*</p>
            {formData.experiences?.map((item,index) => ( <div key={index}>
                <div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <p className="form__label">Data de Início*</p>
                            <input
                            type="date"
                            name="startingDate"
                            value={item.startingDate}
                            className="form__input"
                            onChange={e => handleExperienceChange(e,index)}
                            />
                        </div>
                        <div>
                            <p className="form__label">Data de Término*</p>
                            <input
                            type="date"
                            name="endingDate"
                            value={item.endingDate}
                            className="form__input"
                            onChange={e => handleExperienceChange(e,index)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div>
                            <p className="form__label">Cargo*</p>
                            <input
                            type="text"
                            name="position"
                            value={item.position}
                            className="form__input"
                            onChange={e => handleExperienceChange(e,index)}
                            />
                        </div>
                        <div>
                            <p className="form__label">Empresa*</p>
                            <input
                            type="text"
                            name="company"
                            value={item.company}
                            className="form__input"
                            onChange={e => handleExperienceChange(e,index)}
                            />
                        </div>
                    </div>


                    <button
                       onClick={e => deleteExperience(e,index)}
                       className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                       >
                        <AiOutlineDelete/>
                    </button>
                </div>
            </div>
        ))}

        <button onClick={addExperience} className="bg-[#222121] py-2 px-5 rounded text-white h-fit cursor-pointer">Adicionar Experiências</button>
        </div>

        <div className="mb-5">
            <p className="form__label text-headingColor font-bold text-lg">Horários*</p>
            {formData.timeSlots?.map((item,index) => ( <div key={index}>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                        <div>
                            <p className="form__label">Dia*</p>
                            <select
                              name="day"
                              value={item.day}
                              className="form__input py-3.5"
                              onChange={e => handleTimeSlotChange(e,index)}
                              >
                                <option value="">Select</option>
                                <option value="segunda">Segunda-Feira</option>
                                <option value="terca">Terça-Feira</option>
                                <option value="quarta">Quarta-Feira</option>
                                <option value="quinta">Quinta-Feira</option>
                                <option value="sexta">Sexta-Feira</option>
                                <option value="sabado">Sábado</option>
                                <option value="domingo">Domingo</option>
                            </select>
                        </div>
                        <div>
                            <p className="form__label">Horário de início*</p>
                            <input
                            type="time"
                            name="startingTime"
                            value={item.startingTime}
                            className="form__input"
                            onChange={e => handleTimeSlotChange(e,index)}
                            />
                        </div>
                        <div>
                            <p className="form__label">Horário do fim*</p>
                            <input
                            type="time"
                            name="endingTime"
                            value={item.endingTime}
                            className="form__input"
                            onChange={e => handleTimeSlotChange(e,index)}
                            />
                        </div>
                        <div onClick={e => deleteTimeSlot(e, index)} className="flex items-center">
                        <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-11 mb-[30px] cursor-pointer">
                        <AiOutlineDelete/>
                        </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        ))}

        <button onClick={addTimeSlot} className="bg-[#222121] py-2 px-5 rounded text-white h-fit cursor-pointer">Adicionar Horários</button>
        </div>

        <div className="mb-5">
            <p className="form__label text-headingColor font-bold text-lg">Sobre*</p>
            <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Faça um resumo sobre você"
            onChange={handleInputChange}
            className="form__input"
            >
            </textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
        { formData.photo && (
            <figure className="w-[55px] h-[60px] rounded-full border-2 border-solid border-orange-500 flex items-center justify-center">
                <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full" />
              </figure>
              )}

              <div className="relative w-[160px] h-[50px]"> 
                <input type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />

                <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]
                py-[0.75rem] text-[16px] leading-6 overflow-hidden bg-[#f59f7e] text-headingColor font-semibold rounded-lg truncate cursor-pointer">Carregar imagem</label>
              </div>
        </div>

              <div className="mt-7">
                <button
                type="submit"
                onClick={updateProfileHandler}
                className="bg-orange-500 text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">
                    Atualizar perfil
                </button>
              </div>

    </form>
  </div>
  );
};

export default Profile;