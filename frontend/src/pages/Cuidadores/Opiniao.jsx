import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import OpiniaoForm from './OpiniaoForm';
import { formateDate } from '../../utils/FormateDate';

const Opiniao = ({ avaliacoes, totalRating }) => {
 
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          Todas as avaliações ({totalRating})
        </h4>

        {avaliacoes?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img className="w-full rounded-full" src={review?.user?.photo} alt="" />
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-orange-500 font-bold">
                  {review?.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 font-medium text-[15px]">
                  {review.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#eb634b" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Fazer avaliação
          </button>
        </div>
      )}

      {showFeedbackForm && <OpiniaoForm />}
    </div>
  );
};

export default Opiniao;
