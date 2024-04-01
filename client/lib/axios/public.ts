import axios from 'axios'
import { getSession } from 'next-auth/react'

const api = axios.create({
    baseURL: process.env.API_URL,
})

api.interceptors.request.use(async (config: any) => {
    const session = await getSession();
    console.log('using ', `Bearer ${process.env.PUBLIC_ACCESSTOKEN}`)
    config.headers.Authorization = `Bearer ${process.env.PUBLIC_ACCESSTOKEN}`
    return config
})

export default api;