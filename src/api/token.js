import { CONSTANTS } from '../utils/constants'

export function setTokenApi(token) {
  localStorage.setItem(CONSTANTS.TOKEN, token)
}

export function getTokenApi() {
  return localStorage.getItem(CONSTANTS.TOKEN)
}

export function deleteTokenApi() {
  return localStorage.removeItem(CONSTANTS.TOKEN)
}
