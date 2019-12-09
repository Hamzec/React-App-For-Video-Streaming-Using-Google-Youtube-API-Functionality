import axios from "axios";

const KEY = "AIzaSyBdEWp_74i9lSfiSaPQGB73BAANrCKTwcA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
