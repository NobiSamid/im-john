import React, { createContext } from 'react';
import useFirabase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContexts = useFirabase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;