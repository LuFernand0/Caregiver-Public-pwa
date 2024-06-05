import User from '../models/UsuarioSchema.js';
import Cuidador from '../models/CuidadorSchema.js';
import Reserva from '../models/ReservaSchema.js';
import Stripe from 'stripe';


export const getCheckoutSession = async(req,res) => {

    try {
        
        // pegar dados do medico agendado
        const cuidador = await Cuidador.findById(req.params.cuidadorId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        //criar sesão do pagamento
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-sucesso`,
            cancel_url: `${req.protocol}://${req.get("host")}/cuidadores/${cuidador.id}`,
            customer_email: user.email,
            client_reference_id: req.params.cuidadorId,
            line_items: [
                {
                    price_data:{
                        currency: "brl",
                        unit_amount: cuidador.ticketPrice * 100,
                        product_data: {
                            name: cuidador.name,
                            description: cuidador.bio,
                            images: [cuidador.photo]
                        }
                    },
                    quantity: 1
                }
            ],
        })

        // criar novo serviço
        const reserva = new Reserva({
            cuidador: cuidador._id,
            user: user._id,
            ticketPrice: cuidador.ticketPrice,
            session: session.id
        })

        await reserva.save()

        res.status(200).json({sucess:true, message: "Pagamento feito com sucesso", session})

    } catch (err) {
        res.status(500).json({sucess:false, message: "Erro ao validar o pagamento"})
    }
}