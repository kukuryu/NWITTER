import AuthForm from "components/AuthForm";
import { authService,firebaseInstance } from "fbase";
import { useState } from "react";

const Auth = () =>{
  
    const onSocialClick = async (event) => {
        const {
            target:{name},
        } = event;

        let provider;

        if  (name === "Google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if (name === "Github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
            provider.addScope('repo');
        }

        const data = await authService.signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
              alert('You have signed up with a different provider for that email.');
              // Handle linking here if your app allows it.
            } else {
              console.error(error);
            }
          });
    };

    return (
        <div>
            <AuthForm/>
            <div>
                <button name="Google" onClick={onSocialClick}>Continue with Google</button>
                <button name="Github" onClick={onSocialClick}>Continue with Github</button>
            </div>
        
        </div>

    )
}
export default Auth;