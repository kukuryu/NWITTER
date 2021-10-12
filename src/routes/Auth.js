import { authService,firebaseInstance } from "fbase";
import { useState } from "react";

const Auth = () =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        //console.log(event.target.name);
        const {
            target:{name,value},
        } = event;

        if  (name === "이멜"){
            setEmail(value);
        }else if (name === "암호"){
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                //create New
                data = await authService.createUserWithEmailAndPassword(email,password);
            }else{
                //login
                data = await authService.signInWithEmailAndPassword(email,password);
            }
            console.log(data);
        }
        catch(error){
            setError(error.message);
            console.log(error);

        }
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

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
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="이멜" type="email" placeholder="Email" value={email} onChange={onChange} required/>
                <input name="암호" type="password" placeholder="Password" value={password} onChange={onChange} required/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button name="Google" onClick={onSocialClick}>Continue with Google</button>
                <button name="Github" onClick={onSocialClick}>Continue with Github</button>
            </div>
        
        </div>

    )
}
export default Auth;