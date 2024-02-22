
import './App.css';
import Body from './components/Body';
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import GrantGptAccess from './components/GrantGptAccess';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((store)=>store.user);
  console.log("App ",user ? "true" : "ffalse");
  
  const appRouter = createBrowserRouter([  
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "grant-gpt-access",
          element: <GrantGptAccess />,
        },
      ]
    },
    
  ]);

  return (
    
    <RouterProvider router={appRouter} />
    
  );
}

export default App;
