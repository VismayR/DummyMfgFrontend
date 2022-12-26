import axios from "axios";
import { useEffect } from "react";
import { UserEndPoint } from "../constant/EndPoints";
// import { BASE_URL } from '@env'


const UsersApi = (props) => {
    const callGetUsersList = () => {
        axios.get('https://d8c4-103-225-132-0.in.ngrok.io/user/1')
            .then(function (response) {
                return props.setProfileData(response?.data);
            })
            .catch(function (error) {
                return error;
            })
    }
        callGetUsersList();
}

export default UsersApi;