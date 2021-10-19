import {  useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";


const NweetFactory = ({userObj}) => {;
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");

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
    );
}
export default NweetFactory;