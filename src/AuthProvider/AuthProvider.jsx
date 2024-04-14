import { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

//social auth
const googleProvider = new  GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);



  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };




  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider) ;
  };

  //github login
  const githubLogin = () => {
    return  signInWithPopup(auth, githubProvider)
  }

  //log out
  const logOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
       console.log(error);
      });
  }

  // OBSERVER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValue = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
