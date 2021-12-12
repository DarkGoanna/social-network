import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'dba584c2-162e-4040-93e2-d7fb7943260c'
  }
});

export const usersAPI = {
  getUsers: (count, pageNumber = 1) => instance.get(`users?count=${count}&page=${pageNumber}`)
    .then(response => response.data),

  follow: id => instance.post(`follow/${id}`).then(response => response.data),
  unfollow: id => instance.delete(`follow/${id}`).then(response => response.data),
}