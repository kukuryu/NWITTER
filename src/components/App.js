import React,{ useEffect} from 'react';
import AppRouter from "components/Router";
import {authService} from "../fbase";
import { useUserState,useUserDispatch } from 'UserContext';

function App() {
  const dispatch = useUserDispatch();
  const userObj = useUserState();

  useEffect(() => {
    authService.onAuthStateChanged((user) => 
    {
      if(user){
        dispatch({
          type: "LOGIN",
          user: user,
        });
      }else{
        dispatch({
          type: "LOGOUT"
        });
      }
    }
    );
  },[]);

  const refreshUser = () => {
    dispatch({
      type: "LOGIN",
      user: authService.currentUser,
    });
  }

  return (
    <>
    {userObj.user != null ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj.user)} userObj={userObj.user}/> : "initializing..."}
    </>
  );
}

export default App;
