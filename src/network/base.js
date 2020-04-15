import axios from 'axios'

export function request(config, seccess, failure){
  const instance1 = axios.create({
    baseURL: 'http://59.110.124.156:3000',
    timeout: 5000
  })
  return instance1(config)
}