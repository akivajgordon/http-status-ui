import { API_HOST } from './config'
const API = (path: string) => `${API_HOST}${path}`

export const postJSON = async (url: string, body: any) => {
  const response = await fetch(API(url), {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  return await response.json()
}

export const ping = async () => {
  return (await fetch(API('/ping'), { credentials: 'include' })).json()
}
