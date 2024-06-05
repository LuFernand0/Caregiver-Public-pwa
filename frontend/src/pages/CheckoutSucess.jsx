import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                    <path
                        fill="currentColor"
                        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.2
                        17.4l-5.6-5.6 1.4-1.4 4.2 4.2 7.2-7.2 1.4 1.4-8.6 8.6z"
                    />
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Pagamento realizado com sucesso!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Obrigado por concluir seu pagamento.
                    </p>
                    <p>Tenha um ótimo dia! </p>

                    <div className="py-10 text-center">
                        <Link
                            to="/home"
                            className="px-12 bg-orange-500 text-white font-semibold py-3"
                        >
                            Voltar para tela inicial
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
