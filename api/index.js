import axios from 'axios'
const instance = axios.create({
  // baseURL: process.env.BASE_URL,

  baseURL: process.env.BASE_URL,
})
function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

// function fetchProductByKeyword(keyword) {
//   return instance.get(`/products?name_like=${keyword}`)
// }

// 위의 방식에서 axios 내에 있는 params로 바꾼 버전
function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

// carts
function fetchCartItems() {
  return instance.get('/carts')
}

function createCartItem(cartItem) {
  // 두번째 인자 값은 payload 던져줄 값.
  return instance.post('/carts', cartItem)
}

export {
  fetchProductById,
  fetchProductByKeyword,
  createCartItem,
  fetchCartItems,
}
