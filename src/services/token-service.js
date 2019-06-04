import config from '../config'
import jwt from 'jsonwebtoken'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  getTokenPayload() {
    if(this.hasAuthToken()) {
      return jwt.decode(this.getAuthToken()) // {sub: user_id}
    }
  }
}

export default TokenService
