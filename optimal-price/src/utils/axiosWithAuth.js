import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `https://bw-ft-airbnb-1.herokuapp.com/api/v1 `,
        headers: {
            Authorization: token
        }
    })
}