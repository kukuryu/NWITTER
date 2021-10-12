// import Nweet from "components/Nweet";
import { authService,dbService } from "fbase";
import { useEffect,useState } from "react";

const Profile = ({userObj,refreshUser}) => {
    // const [nweets, setNweets] = useState([]);
    const [newDisplayName,setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => authService.signOut();

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

    // const getMyNweets = async () => {
    //     const nweets = await dbService.collection("nweets")
    //     .where("creatorId","==",userObj.uid)
    //     .orderBy("createdAt","asc")
    //     .get();
        
    //     setNweets(nweets.docs.map((doc) => doc.data()));
    // }

    // useEffect(() => {
    //     getMyNweets();
    // },[]);
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} placeholder="Display Name"/>
                <input type="submit" value="Update Profile"/>
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        {/* {
            nweets.map((nweet) => (
                <Nweet key={nweet.creatorId} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}></Nweet>
            )
            )
        } */}
        </>


    )

}


export default Profile;