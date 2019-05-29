import config from '../config'

const TasksApiService = {
  getTasks() {
    return fetch(`${config.API_ENDPOINT}/`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.text()
    )
  }
}

export default TasksApiService
