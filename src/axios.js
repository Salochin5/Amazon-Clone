import axios from "axios";

const instance = axios.create({
 //THE API (Cloud Function) URL
 baseURL: "http://localhost:5001/clone-3fd00/us-central1/api",
});

export default instance;
