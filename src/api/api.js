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

export const profileAPI = {
  getProfile: (profileID) => instance.get(`profile/${profileID}`)
    .then(response => response),

  setProfileInfo: (data) => instance.put('profile/', data)
    .then(response => response),

  getStatus: (profileID) => instance.get(`profile/status/${profileID}`)
    .then(response => response.data),

  updateStatus: (status) => instance.put('profile/status/', { status })
    .then(response => {
      if (response.data.resultCode === 0) {
        return status;
      }
    }),

  setPhoto: (photo) => {
    const formData = new FormData();
    formData.append('image', photo);

    return instance.put('profile/photo', formData, { "Content-Type": "multipart/form-data" })
      .then(response => {
        if (response.data.resultCode === 0) {
          return response.data.data.photos;
        }
      })
  }
}

export const authAPI = {
  authMe: () => instance.get('auth/me').then(response => {
    if (response.data.resultCode === 0) {
      return response.data.data;
    }
  }),

  login: (email, password) => instance.post('auth/login', { email, password })
    .then(response => response.data),

  logout: () => instance.delete('auth/login').then(response => response.data),
}