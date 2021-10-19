import { authService } from "fbase";
import { useState } from "react";

const AuthForm = () =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
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
        }
        catch(error){
            setError(error.message);
        }
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="이멜" type="email" placeholder="Email" value={email} onChange={onChange} required/>
                <input name="암호" type="password" placeholder="Password" value={password} onChange={onChange} required/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>        
        </>
    )
}
export default AuthForm;