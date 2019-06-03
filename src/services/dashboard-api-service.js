import TokenService from './token-service'
import config from '../config'

const DashboardApiService = {
  getUserByUsername(username) {
    return fetch(`${config.API_ENDPOINT}/users/${username}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  getUserTasks(userId) {
    return fetch(`${config.API_ENDPOINT}/tasks/${userId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default DashboardApiService
