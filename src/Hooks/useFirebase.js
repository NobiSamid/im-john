import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();

const useFirabase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
             const user = result.user;
             console.log(user);
        })
    }

    //observe wheather user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
          
    },[])


    const logOut = () =>{
        signOut(auth)
            .then(()=>{
            setUser({})
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

    return{
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirabase;