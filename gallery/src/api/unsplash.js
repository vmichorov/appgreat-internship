import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7_V4H4qokh-EUpds98XCKE-FUtwK0Rr2AtIZgsaHsnM",
  },
});
