import axios from 'axios';
import config from '../config';

export default class UserModel {
    static getUsers(page = 1, search = null) {
        let url = `${config.apiUrl}/users?page=${page}`;
        if (search) {
            url += `&search=${search}`;
        }
        return axios.get(url);
    }
    
    static getUser(id = 1) {
         return axios.get(`${config.apiUrl}/users/${id}`);
    }
    
    static deleteUser(id = 1) {
         return axios.delete(`${config.apiUrl}/users/${id}`);
    }
    
    static createUser(data = {}) {
        return axios.post(`${config.apiUrl}/users/create`, data);
    }
    
    static updateUser(id, data= {}) {
        return axios.post(`${config.apiUrl}/users/${id}`, data);
    }
}