// import { createContext } from "react";

// export const AuthContext = createContext(null)


//  const AuthProvider = ({Children}) => {
//     const allValue = {name : "test"}
//     return (
//        <AuthContext.Provider value={allValue}>
//         {Children}
//        </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import { createContext } from "react";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const allValue = { name: 'test'}
    return (
        <AuthContext.Provider value={allValue}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;