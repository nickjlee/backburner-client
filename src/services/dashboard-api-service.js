import TokenService from './token-service'
import config from '../config'

const DashboardApiService = {
  getUserByUsername() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getUserTasks() {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postNewTask(text, due_date, reward, xp) {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        text,
        due_date,
        reward,
        xp
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  deleteTask(taskId) {
    return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  },

  getUserRewards() {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postReward(reward) {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        reward
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  updateUserXp(gained_xp) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        gained_xp: Number(gained_xp)
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default DashboardApiService
