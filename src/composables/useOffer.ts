/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '@/config/config'
import { $axios } from '@/plugins/axios'
import { ref } from 'vue'

const useOffer = () => {
  const URL_OFFER = config.api.offer
  /**
   * Fetches all Categorys with the given query parameters.
   * @param params - The query parameters for the request.
   * @returns A Promise that resolves to the data returned by the API, or undefined if an error occurred.
   */
  async function getAll(categoryId: string) {
    try {
      const res = await $axios.get(`${URL_OFFER.list}/${categoryId}`)
      const offers = res.data.data
      const groupedOffers = offers.reduce((acc: any, offer: any) => {
        const { es } = offer.subcategory
        if (!acc[es]) {
          acc[es] = []
        }
        acc[es].push(offer)
        return acc
      }, {})
      return groupedOffers
    } catch (error) {
      console.log(error)
      return 'error'
    }
    return
  }

  return { getAll }
}

export default useOffer
