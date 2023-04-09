import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-backend-93jj.onrender.com",
});

export default instance;