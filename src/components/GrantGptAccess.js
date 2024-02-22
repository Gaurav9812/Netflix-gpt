import { useSelector } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { database as db } from "../utils/firebaseDb";
import { doc, setDoc } from "firebase/firestore";


const GrantGptAccess = ()=>{

  const user  = useSelector((store)=>store.user);
    const userUid = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    if(!user || user.email != 'gaurav12@gmail.com'){
      return ;
    }
    async function  writeUserData() {
        
        try {
            const user = await setDoc(doc(db, "netflix", userUid.current.value), {
                uuid:userUid.current.value,
                showGptSearch:true
              });
              console.log(user);
        }catch(error){
            console.log(error);
        }
        
      }

    const handleSubmit=(e)=>{
            e.preventDefault();
            writeUserData();
            

    }
    return <div>
        <div className="fixed">
        <img
        className="h-screen w-screen object-cover"
          src={BACKGROUND_IMAGE}
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
        </div>
        <form className="w-full md:w-3/12 text-white absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          Grant User Access for Gpt Search
        </h1>
        
          <input
            type="text"
            placeholder="UUid"
            className="p-4 bg-gray-600 my-4 w-full"
            ref={userUid}
          />
        
        <p className="text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>
        <p className="text-green-500 font-bold text-lg p-2 ">{successMessage}</p>
        <button
          onClick={handleSubmit}
          className="p-4 my-2 bg-red-700 w-full rounded-lg"
        >
          Grant
        </button>
        
      </form>
    </div>
}


export default GrantGptAccess;