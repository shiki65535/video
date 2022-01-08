import axios from "axios"
const KEY = "AIzaSyDK733nKoUqm20CiT_eZX0bXCsSixGGG9k";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 5,
        key: KEY
    }

})