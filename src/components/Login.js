import { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {

  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
    if (!signInForm) {
      

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKV11_9VuQiQy27PYxmHqeg_C_BvI4ckGv74VO57Btyb3_pk-MYBlj58IrBoQYb3KhVY&usqp=CAU"
          }).then(() => {
            
          const { uid, email, displayName, photoURL,emailVerified } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoUrl: photoURL,emailVerified:emailVerified}));
          }).catch((error) => {
            setErrorMessage(`${error.code}: ${error.message}`);
          });
          
          
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="h-screen w-screen object-cover"
          src={BACKGROUND_IMAGE}
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
      </div>

      <form className="w-full md:w-3/12 text-white absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-600 my-4 w-full"
            ref={name}
          />
        )}

        <input
          type="text"
          placeholder="email"
          className="p-4 bg-gray-600 my-4 w-full"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 bg-gray-600 w-full"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="p-4 my-2 bg-red-700 w-full rounded-lg"
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign Up Now"
            : "Already register sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
