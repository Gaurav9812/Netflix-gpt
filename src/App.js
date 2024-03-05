
import './App.css';
import Body from './components/Body';
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import GrantGptAccess from './components/GrantGptAccess';
import { useSelector } from 'react-redux';
import WatchVideo from './components/WatchVideo';
import HomePage from './components/HomePage';

function App() {
  
  
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
          path: "home",
          element: <HomePage />,
        },
        {
          path: "grant-gpt-access",
          element: <GrantGptAccess />,
        },
        {
          path: "watch-video/:videoId",
          element: <WatchVideo />,
        },
      ]
    },
    
  ]);

  return (
    
    <RouterProvider router={appRouter} />
    
  );
}

export default App;
