import { dbService, storageService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import {v4 as uuidv4} from "uuid";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        })
    },[]);

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: {value}
        } = event;
        setNweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== ""){
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment,"data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }  

        await dbService.collection("nweets").add({
            text:nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl: attachmentUrl
        });
        setNweet("");
        setAttachment("");
    }
    
    const onFileChange = (event) => {
        const {
            target : {files}
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            debugger;
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }

    const onClearAttachment =() => setAttachment("");
    return (
        <>
            <form>
                <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
                />
                <input type="file"  accept="image/*" onChange={onFileChange}/>
                <input type="submit" onClick={onSubmit} value="Nweet"/>
                {attachment && 
                (
                    <>
                        <img src={attachment} width="50px" height="50px" alt="aa"/> 
                        <button onClick={onClearAttachment}>Clear</button>
                    </>
                )}
            </form>
            <div>
                {
                    nweets.map((nweet) => (
                        <Nweet key={nweet.creatorId} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}></Nweet>
                    )
                    )
                }
            </div>
        </>
    )
}

export default Home;