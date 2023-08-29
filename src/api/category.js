import { CONSTANTS } from '../utils/constants'

export async function getCategoriesApi() {
  try {
    const response = await fetch(`${CONSTANTS.API_URL}/api/categories`)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
