import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import SyncLoader from 'react-spinners/SyncLoader';
 
import img01 from '../assets/images/signup.gif';

const Cadastro = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: '',
  });

  const navigate = useNavigate()

  const handleInputChange = e => {
    setFormData(({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleFileInputChange = async (event) => {

    const file =event.target.files[0]

    const data = await uploadImageToCloudinary(file)

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo:data.url});
  };

  

  const submitHandler = async event => {

    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate("/login")

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }

  };



  return <section className="max-w-[1170px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* IMAGEM CENTRAL */}
      <div className="hidden lg:block bg-orange-500 rounded-lg">
        <figure className="rounded-lg">
          <img src={img01} alt="Gif cadastro" className="w-full rounded-lg" />
        </figure>
      </div>

      {/* FORMS CADASTRO */}
      <div className="rounded-l-lg lg:pl-16 py-10">
        <h3 className="text-headingColor text-[22px] leading-8 9 font-boldmb-10">
          Criar uma<span className="text-orange-500"> Conta</span></h3> 

        <form onSubmit={submitHandler}>
        <div className="mb-5">
            <input 
              type="text"
              placeholder="Nome completo"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input 
              type="email"
              placeholder="Endereço de email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input 
              type="password"
              placeholder="Senha"
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>


          <div className="mb-5 flex items-center justify-between">
            <label
             className="text-headingColor font-bold text-[16px] leading-7"
             >
              Você é um: 
               <select 
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] ml-4 leading-7 px-5 py-3
              focus:outline-none"
              >
                <option value="">Selecione</option>
                <option value="usuario">Usuário</option>
                <option value="cuidador">Cuidador</option>
              </select>
            </label>

            <label
             className="text-headingColor font-bold text-[16px] leading-7"
             >
              Gênero: 
               <select 
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] ml-4 leading-7 px-5 py-3
              focus:outline-none"
              >
                <option value="">Selecione</option>
                <option value="homem">Homem</option>
                <option value="mulher">Mulher</option>
                <option value="outros">Outros</option>
              </select>
            </label>
          </div>


            <div className="mb-5 flex items-center gap-3">
              { selectedFile && <figure className="w-[55px] h-[60px] rounded-full border-2 border-solid border-orange-500 flex items-center justify-center">
                <img
                src={previewURL}
                alt=""
                className="w-full rounded-full" />
              </figure>}

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

            <div className="mt-7 ">
              <button
              disabled={loading}
              type="submit"
              className="w-full bg-orange-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              >
                { loading ?(
                <SyncLoader size={35} color="#ffffff"/>
              ) : ("Registrar-se"
                )}
                </button>
            </div>

            <p className="mt-5 text-textColor text-center">Já possui uma conta? <Link to='/login' className="text-orange-400 font-medium ml-1">Entrar</Link>
            </p>

        </form>

      </div>
    </div>
  </section>
}

export default Cadastro;