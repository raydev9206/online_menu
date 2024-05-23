import type IProducts from '@/interfaces/buenissimo/IProducts'
import axios from 'axios'
import { ref, type Ref } from 'vue'

const URL_API = import.meta.env.VITE_URL_API
const useProducts = () => {
  const allProducts: Ref<IProducts[]> = ref([])

  const getAllProducts = async () => {
    try {
      const resp = await axios.get(`${URL_API}Products`)
      allProducts.value = resp.data
      return resp.data
    } catch (error) {
      console.log(error)
    }
    return []
  }

  return {
    allProducts,
    getAllProducts
  }
}

export default useProducts
