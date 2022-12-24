import axios from "axios";
import { useEffect } from "react";
import { UserEndPoint } from "../constant/EndPoints";
// import { BASE_URL } from '@env'


const UsersApi = (props) => {
    const callGetUsersList = () => {
        axios.get('https://9fb7-114-143-107-6.in.ngrok.io/user')
            .then(function (response) {
                return props.setProfileData(response?.data);
            })
            .catch(function (error) {
                return error;
            })
    }
    useEffect(() => {
        callGetUsersList();
    }, [])
}

export default UsersApi;