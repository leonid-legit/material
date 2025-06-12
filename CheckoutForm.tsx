import React, { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext(null);

export const CheckoutProvider = ({ children }) => {
    const [cardDetails, setCardDetails] = useState({});
    const [promoCode, setPromoCode] = useState('');

    return (
        <CheckoutContext.Provider value={{ cardDetails, setCardDetails, promoCode, setPromoCode }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => useContext(CheckoutContext);
