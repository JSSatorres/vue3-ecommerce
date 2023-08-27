import { API_URL } from '../utils/constantsBack'

export async function registerApi(FormData) {
  try {
    const url = `${API_URL}/api/movies`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    }

    const response = await fetch(url, params)
    const result = response.json
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
