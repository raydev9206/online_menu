export default {
  api: {
    baseUrl: import.meta.env.VITE_API_URL,
    businnesId: '698239da-c486-4a91-9c9c-d657032f0d5f',
    specification: {
      list: '/specification/availables'
    },
    category: {
      list: '/category/search'
    },
    offer: {
      list: '/offer/availables'
    }
  }
}
