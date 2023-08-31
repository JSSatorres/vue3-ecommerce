import { CONSTANTS } from '../utils/constants'

export async function registerApi(FormData) {
  try {
    const url = `${CONSTANTS.API_URL}/api/auth/local/register`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    }

    const response = await fetch(url, params)
    const result = response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function loginApi(FormData) {
  try {
    const url = `${CONSTANTS.API_URL}/api/auth/local`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    }

    const response = await fetch(url, params)
    const result = response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
