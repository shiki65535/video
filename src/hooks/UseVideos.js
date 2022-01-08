import React, {useState, useEffect} from "react";
import Youtube from "../apis/Youtube";

function UseVideos(defaultSerachTerm){
    const [ videos, setVideos ] = useState([]);

    useEffect(()=>{
        search(defaultSerachTerm);
    }, [defaultSerachTerm])

    async function search(term){
        const response = await Youtube.get("/search", {
            params: {
                q: term,
            }
        });
            setVideos(response.data.items)
    };

    return   [videos, search];
}

export default UseVideos;