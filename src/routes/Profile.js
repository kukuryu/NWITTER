import React from 'react';
import Nweet from "components/Nweet";
import { authService,dbService } from "fbase";
import { useEffect,useState } from "react";

const Profile = ({userObj,refreshUser}) => {
    const [nweets, setNweets] = useState([]);
    const [newDisplayName,setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        // history.push("/");
    }
    const onChange = (event) => {
        const {
            target:{value}
        } = event;
        setNewDisplayName(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({displayName: newDisplayName});
            refreshUser();
        }

    }

    const getMyNweets = async () => {
        const nweets = await dbService.collection("nweets")
        .where("creatorId","==",userObj.uid)
        .orderBy("createdAt","asc")
        .get();
        
        setNweets(nweets.docs.map((doc) => doc.data()));
    }

    useEffect(() => {
        getMyNweets();
    },[]);
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text" onChange={onChange} placeholder="Display Name" autoFocus className="formInput"/>
                <input type="submit" value="Update Profile" className="formBtn" style={{marginTop:10}}/>
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>


    )

}


export default Profile;