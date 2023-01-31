import axios from 'axios'

const BASE_URL = 'https://real-puce-clownfish-boot.cyclic.app/api/'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
