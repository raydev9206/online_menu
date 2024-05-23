/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '@/config/config'
import { $axios } from '@/plugins/axios'

const useSpecification = () => {
  const URL_SPECIFICATION = config.api.specification

  /**
   * Fetches all specifications with the given query parameters.
   * @param params - The query parameters for the request.
   * @returns A Promise that resolves to the data returned by the API, or undefined if an error occurred.
   */
  async function getAll(params: Object) {
    try {
      const res = await $axios.get(`${URL_SPECIFICATION.list}/${params}`)
      return res.data.data
    } catch (error) {
      console.log(error)
      return 'error'
    }
    return
  }

  return { getAll }
}

export default useSpecification
