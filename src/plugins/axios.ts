import axios from 'axios'

const config = {
  baseURL: import.meta.env.VITE_API_URL ?? 'https://publicate-nest-be.onrender.com/',
  timeout: 60 * 1000
}

const $axios = axios.create(config)

$axios.defaults.headers.post['Content-Type'] = 'application/json; encode=UTF-8'

export { $axios }
