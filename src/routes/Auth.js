import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import AuthForm from "components/AuthForm";
import { authService,firebaseInstance } from "fbase";

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
        <div className="authContainer">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" style={{marginBottom: 30}} />
            <AuthForm/>
            <div className="authBtns">
                <button className="authBtn" name="Google" onClick={onSocialClick}>Continue with Google <FontAwesomeIcon icon={faGoogle}/></button>
                <button className="authBtn" name="Github" onClick={onSocialClick}>Continue with Github <FontAwesomeIcon icon={faGithub}/></button>
            </div>
        
        </div>

    )
}
export default Auth;