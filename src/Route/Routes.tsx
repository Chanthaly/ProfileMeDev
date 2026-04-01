import { Navigate, useRoutes } from "react-router-dom"
import ProtectRoute from "../Layout/Layout"
import { Button, Result } from "antd"
  import { useNavigate } from "react-router-dom"
import Home from "../componect/Home"
import AboutMe from "../componect/AboutMe"

import ContactMe from "../componect/ContactMe"

import Skills from "../componect/Skills"
import ServicesPage from "../componect/Service"
import Exprirent from "../componect/Exprirent"


const Routes = () => {
  const navigate = useNavigate();
  return (
 useRoutes([
     {
        path: '',
        element: <ProtectRoute />,

        children :[  
          {
            index: true,
            element: <Navigate to="home" replace />,
          },

          {

            path:'home',
          element: <Home  />
          }
      
        ,

    {
      path:'about',
      element: <AboutMe /> 
    }
    ,
        {
      path:'exprirent',
      element: <Exprirent /> 
    }
    ,
        {
      path:'contact',
      element: <ContactMe /> 
    }
    ,    {
      path:'skills',
      element: <Skills />
    }
    ,    {
      path:'service',
      element: <ServicesPage/>
    }
    ,
       {
     path:'*',
     element: 
     <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary"   onClick={() => navigate('home')}>Back Home</Button>}
  />
       }
       ,
      ]
      
    }
 ])
)
       }

export default Routes
