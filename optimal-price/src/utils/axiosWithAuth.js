import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'Need it still',
        headers: {
            Authorization: token
        }
    })
}