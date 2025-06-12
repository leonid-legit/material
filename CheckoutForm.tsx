import { useCheckout } from './CheckoutProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
    const { promoCode } = useCheckout();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cardElement = elements.getElement(CardElement);

        const { token, error } = await stripe.createToken(cardElement);
        if (error) {
            console.error('Payment Error:', error);
            return;
        }

        await fetch('/api/checkout/submit', {
            method: 'POST',
            body: JSON.stringify({ token: token.id, promoCode }),
            headers: { 'Content-Type': 'application/json' },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay Now</button>
        </form>
    );
}
