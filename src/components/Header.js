import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="w-full flex justify-between flex-col md:flex-row absolute px-8 py-2 items-center md:justify-between bg-gradient-to-b from-black z-20">
      {user ? (
        <>
          <Link to="/home">
            <img className="w-40" src={LOGO} />
          </Link>
          <div className="flex p-2 justify-between md:justify-end w-full">
            <Link
              className="m-2 text-white rounded-lg font-bold text-3xl hover:bg-slate-600 align-middle my-auto"
              to="/browse"
            >
               <CiSearch />
            </Link>
            <img
              className="hidden md:block w-12 h-12 m-2"
              src={user.photoUrl}
              alt="user photo"
            />
            <button onClick={handleSignOut} className="text-white">
              (Sign Out)
            </button>
          </div>
        </>
      ) : (
        <img className="w-40" src={LOGO} />
      )}
    </div>
  );
};

export default Header;
