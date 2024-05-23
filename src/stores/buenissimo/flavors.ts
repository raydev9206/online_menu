import type IFlavors from '@/interfaces/buenissimo/IFlavors'
import axios from 'axios'
import { ref, type Ref } from 'vue'

const URL_API = import.meta.env.VITE_URL_API
const useFlavors = () => {
  const allFlavors: Ref<IFlavors[]> = ref([])

  const getAllFlavors = async () => {
    console.log('asdasd')
    try {
      const resp = await axios.get(`${URL_API}specifications`)
      allFlavors.value = resp.data
      return resp.data
    } catch (error) {
      console.log(error)
    }
    return []
  }

  return {
    allFlavors,
    getAllFlavors
  }
}

export default useFlavors
