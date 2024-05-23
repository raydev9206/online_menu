/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '@/config/config'
import { $axios } from '@/plugins/axios'
import { ref } from 'vue'

const useCategory = () => {
  const URL_CATEGORY = config.api.category
  const businnesId = config.api.businnesId
  /**
   * Fetches all Categorys with the given query parameters.
   * @param params - The query parameters for the request.
   * @returns A Promise that resolves to the data returned by the API, or undefined if an error occurred.
   */
  async function getAll() {
    try {
      const res = await $axios.post(URL_CATEGORY.list, { businnesId: businnesId, search: '' })
      return res.data.data
    } catch (error) {
      console.log(error)
      return 'error'
    }
    return
  }

  return { getAll }
}

export default useCategory
