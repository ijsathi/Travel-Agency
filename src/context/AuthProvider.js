import React, { createContext } from 'react';
import UseCart from '../hooks/UseCart';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children} ) => {
    // const {children} = props;
    const allContext = useFirebase();
    // hooks 
    const {addToCart,selectedBooking, remove} = UseCart();
    const data = {
        contexts:allContext,
         addToCart,
         selectedBooking,
        remove}
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;