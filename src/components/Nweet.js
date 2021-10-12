import { dbService,storageService } from "fbase";
import { useState } from "react";

const Nweet = ({ nweetObj,isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);


    const onDeleteClick = (nweet) =>{
        const ok = window.confirm("삭제?");
        if(ok){
            dbService.doc(`nweets/${nweetObj.id}`).delete();
            if(nweetObj.attachmentUrl !== "")
            {
                storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }
        }
    }


    const toggleEditing = () => {
        setEditing((prev) => !prev)
        if(!editing){
            setNewNweet(nweetObj.text);
        }
    };

    const onChange = (event) =>{
        const {
            target: {value}
        } = event;
        setNewNweet(value);
    }

    const onSubmit = async (event) =>  {
        // event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({text : newNweet});
        setEditing(false);
    }


    return (
        <div>
            {
                editing ? (
                    <>
                    <form>
                        <input onChange={onChange} value={newNweet} required></input>
                        <button onClick={onSubmit}>Submit</button>
                    </form>
                    <button onClick={toggleEditing}>Cancle</button>
                    </>  
                )
                :
                (
                    <>
                    <h4>{nweetObj.text}</h4>
                    {
                        nweetObj.attachmentUrl && (
                            <img src={nweetObj.attachmentUrl} width="50px" height="50px"></img>
                        )
                    }
                    {
                        isOwner && (
                            <>
                                <button onClick={onDeleteClick}>Delete Nweet</button>
                                <button onClick={toggleEditing}>Edit Nweet</button>
                            </>
                        )
                    }
                    </>

                )
            }
            
        </div>
    );
};

export default Nweet;