import { dbService} from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({userObj}) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        })
    },[]);

    return (
        <>
            <NweetFactory userObj={userObj}></NweetFactory>
            <div>
                {
                    nweets.map((nweet,index) => (
                        <Nweet key={index} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}></Nweet>
                    )
                    )
                }
            </div>
        </>
    )
}

export default Home;