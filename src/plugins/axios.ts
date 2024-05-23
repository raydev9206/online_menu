import axios from 'axios'

const config = {
  baseURL: 'https://publicatenestbe-production.up.railway.app/',
  timeout: 60 * 1000
}

const $axios = axios.create(config)

$axios.defaults.headers.post['Content-Type'] = 'application/json; encode=UTF-8'

export { $axios }
