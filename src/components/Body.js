import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();  

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("changed");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoUrl: photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }

      return ()=>{
        unsubscribe();
      }

    });
  }, []);
  return (
<Outlet/>
  );
};

export default Body;
