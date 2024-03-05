import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../utils/firebaseDb";
import Header from "./Header";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const checkIfUuidExistInFireBase = async (uuid) => {
      const docRef = doc(database, "netflix",uuid );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
         return docSnap.data()?.showGptSearch;
      } else {
        // docSnap.data() will be undefined in this case
        return false;
      }
    };
    const unsubscribe = onAuthStateChanged(auth,  (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL, emailVerified } = user;
       /* const showGptSearch =  await checkIfUuidExistInFireBase(uid); */
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
            emailVerified: emailVerified,
            /* showGptSearch:showGptSearch */
          })
        );
        
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
         navigate("/login",);
        
      }

      
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (<div> <Header /> <Outlet /></div>);
};

export default Body;
