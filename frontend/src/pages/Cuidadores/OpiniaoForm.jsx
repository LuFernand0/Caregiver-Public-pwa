import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';

const OpiniaoForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Os campos de avaliação são obrigatórios");
      }

      const res = await fetch(`${BASE_URL}/cuidadores/${id}/avaliacoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating, reviewText })
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
      navigate(0);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Como você avaliaria a sua experiência?*
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (hover || rating) ? "text-yellowColor" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Compartilhe sua opinião ou sugestões*
        </h3>

        <textarea
          className="border border-solid border-[#0066FF34] focus:outline outline-orange-500 w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Escreva sua mensagem"
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>

      <button type="submit" className="btn">
        {loading ? <SyncLoader size={25} color="#e65437" /> : "Fazer avaliação"}
      </button>
    </form>
  );
};

export default OpiniaoForm;
