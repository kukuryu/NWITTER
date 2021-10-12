import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "../fbase";
// import AppRouter from "./Router";

function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setISLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => 
    {
      if(user){
        //setISLoggedIn(user);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (str) => user.updateProfile(str)
        });
      }else{
        setISLoggedIn(false);
      }

      setInit(true);
    }
    );

  },[]);

  const refreshUser = () => {
    //setUserObj(authService.currentUser);
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (str) => user.updateProfile(str)
    })
  }

  return (
    <>
    {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "initializing..."}
    {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;
