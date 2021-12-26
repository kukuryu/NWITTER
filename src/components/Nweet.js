import React from 'react';
import { dbService,storageService } from "fbase";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <div className="nweet">
            {
                editing ? (
                    <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input onChange={onChange} value={newNweet} required placeholder="Edit your nweet" autoFocus className="formInput"></input>
                        <input type="submit" value="Update Nweet" className="formBtn" />
                    </form>
                    <button onClick={toggleEditing} className="formBtn cancelBtn">Cancle</button>
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
                            <div className="nweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt}/>
                                </span>
                            </div>
                        )
                    }
                    </>

                )
            }
            
        </div>
    );
};

export default Nweet;