import axios from 'axios';
import { profilePhotosType, profileType } from '../store/redusers/profile-reduser';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'dba584c2-162e-4040-93e2-d7fb7943260c'
  }
});

export enum resultCodeEnum {
  Success = 0,
  Error = 1,
}
type commonResponseType = {
  data: any
  resultCode: number
  messages: Array<string>
}
type userType = {
  name: string,
  id: number,
  photos: {
    small: string,
    large: string
  },
  status: string,
  followed: boolean
}
type getUserType = {
  items: Array<userType>
  totalCount: number
  error: string
}
export const usersAPI = {
  getUsers: (count:number, pageNumber:number = 1) => instance.get<getUserType>(`users?count=${count}&page=${pageNumber}`)
    .then(response => response.data),

  follow: (id:number) => instance.post<commonResponseType>(`follow/${id}`).then(response => response.data),
  unfollow: (id:number) => instance.delete<commonResponseType>(`follow/${id}`).then(response => response.data),
}


type setPhotoType = {
  data: {
    photos: profilePhotosType
  }
  resultCode: number
  messages: Array<string>
}
export const profileAPI = {
  getProfile: (profileID:number) => instance.get<profileType>(`profile/${profileID}`)
    .then(response => response),

  setProfileInfo: (data:profileType) => instance.put<commonResponseType>('profile/', data)
    .then(response => response),

  getStatus: (profileID:number) => instance.get<string>(`profile/status/${profileID}`)
    .then(response => response.data),

  updateStatus: (status:string) => instance.put<commonResponseType>('profile/status/', { status })
    .then(response => {
      if (response.data.resultCode === resultCodeEnum.Success) {
        return status;
      }
    }),

  setPhoto: (photo:any) => {
    const formData = new FormData();
    formData.append('image', photo);

    return instance.put<setPhotoType>('profile/photo', formData, { headers:{"Content-Type": "multipart/form-data"} })
      .then(response => {
        if (response.data.resultCode === resultCodeEnum.Success) {
          return response.data.data.photos;
        }
      })
  }
}


export type userDataType = {
  id: number | null
  email: string | null
  login: string | null
}
type authMeType = {
  data: userDataType
  resultCode: number
  messages: Array<string>
}
export type loginType = {
  data: {
    userId: number
  }
  resultCode: number
  messages: Array<string>
}
export const authAPI = {
  authMe: () => instance.get<authMeType>('auth/me').then(response => response.data),
  
  login: (email:string, password:string) => instance.post<loginType>('auth/login', { email, password })
    .then(response => response.data),

  logout: () => instance.delete<commonResponseType>('auth/login').then(response => response.data),
}