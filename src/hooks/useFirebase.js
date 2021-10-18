import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Login/firebase/firebase.init";

firebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const registerNewUsers = (e) => {
    e.preventDefault();

    if (password.length < 6) {
        setError("Password Mustbe 6 digit");
        setMessage("");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
        setError("Password Mustbe contain an uppercase character");
        setMessage("");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
      updateBasicInfo();
      veryfyEmail();
      
      setUser(result.user);
      setError("");
        setMessage("Registration successful");
        window.location.reload();
        
    }).catch((error) => {
      setMessage('');
      setError("register failed")
    });
  };
  const updateBasicInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const veryfyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const loginProcess = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingFacebook = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    signInUsingGoogle,
    setIsLoading,
    setUser,
    user,
    isLoading,
    logOut,
    signInUsingFacebook,
    handleName,
    handleEmail,
    handlePassword,
    registerNewUsers,
    loginProcess,
    message,
    error,
    setError,
    setMessage
  };
};
export default useFirebase;
