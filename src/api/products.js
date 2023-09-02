import { CONSTANTS } from '../utils/constants'

export async function getProductsApi(limit = 20) {
  console.log(limit)
  try {
    const response = await fetch(`${CONSTANTS.API_URL}/api/products?pagination[limit]=${limit}`)
    // `${CONSTANTS.API_URL}api/products?_sort=created_at&_limit=${limit}`
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
