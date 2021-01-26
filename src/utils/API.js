import axios from "axios";

const API = {
    getUsers:function(){
        return axios.get("https://randomuser.me/api/?results=100&nat=US&inc=gender,name,location,email,dob,picture");
    }
};
export default API;