import { rootState } from './../redux-store'
// auth
export const isAuthorized = (state:rootState) => state.auth.isAuthorized
export const isAuthFinished = (state:rootState) => state.auth.authFinished
export const getAuthName = (state:rootState) => state.auth.login
export const getAuthID = (state:rootState) => state.auth.id

// dilog
export const getMassages = (state:rootState) => state.dilogsPage.massages

// people
export const getPeople = (state:rootState) => state.peopleList.people
export const getTotalCount = (state:rootState) => state.peopleList.totalCount
export const getCountOnPage = (state:rootState) => state.peopleList.countOnPage
export const getActive = (state:rootState) => state.peopleList.active
export const isLoading = (state:rootState) => state.peopleList.isLoading
export const getChangingFolowingStatus = (state:rootState) => state.peopleList.changingFolowingStatus

// profile
export const getCurrentProfile = (state:rootState) => state.profilePage.currentProfile
export const getOwnerStatus = (state:rootState) => state.profilePage.isOwner