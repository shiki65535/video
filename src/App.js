import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./apis/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import UseVideos from "./hooks/UseVideos";

function App(){

    const [ selectedVideo, setSelectedVideo ] = useState(null);  
    const [ videos, search ] = UseVideos("flower") ;

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },  [videos])


        return (
            <div className="ui container">
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={setSelectedVideo}
                                videos={videos} />
                        </div>

                    </div>

                </div>

            </div>
        )

}

export default App;