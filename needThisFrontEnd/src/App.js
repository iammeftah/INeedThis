
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AuthentificationPage from "./Components/Authentification/AuthentificationPage";
import Authentification from "./Components/Authentification/Authentification";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './Store/Auth/Action';
import SignUp from "./Components/Authentification/SignUp";
import SignIn from "./Components/Authentification/SignIn";


function App() {
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector(store => store)
    const dispatch = useDispatch()
    const navigate = useNavigate(); 

    useEffect(() =>{
        if(jwt){
          dispatch(getUserProfile(jwt))
          navigate("/")
        }


    },[auth.jwt])



  return (

      <Routes>
          <Route path="/*" element={auth.user?<HomePage/>:<AuthentificationPage/>}></Route>
      </Routes>

  );
}

export default App;
