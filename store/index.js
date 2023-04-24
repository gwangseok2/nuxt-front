/* eslint-disable no-console */
// 객체 반환시 소괄호 사용 ({}) return{ a: 1 } === ({a:1})

import { fetchCartItems } from '@/api'
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

// 여러 컴포넌트 간에 공유되어야 하는 데이터를 이곳에 저장.
export const state = () => ({
  cartItems: [],
  storeCount: 0,
})

// 전부다 export로 꺼냄 첫번째 파라미터로 state를 받음 2번째 인자 2개이상 받을시 객체로 선언
export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    console.log(cartItem)
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    console.log(cartItems, 'asd')
    state.cartItems = cartItems
  },
  refreshCount(state, data) {
    data = data - 2
    state.storeCount = data
  },
}

// components에서 호출 할 때도 commit action 에서 mutation 호출 할 때도 commit
export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    console.log(data, '액션즈')
    commit(
      'setCartItems',
      // data.map((item) => ({
      //   ...item,
      //   imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      // }))
      data.map((item) => {
        console.log(item)
        return {
          // ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }
      })
    )
  },
  // store의 Context와 nuxt의 Context를 제공 따로 호출 할 필요 없음. 서버사이드에서 호출하고 싶을 때
  // 일종의 라이프 사이클 훅 같음.
  // 아니면 미리 데이터를 넣고 싶어서 dispatch만 모아둘 때 여러개의 액션 함수 처리
  // async nuxtServerInit(storeContext, nuxtContext) {
  // const { data } = await fetchCartItems()
  // console.log(data, '액션즈')
  // // store의 context인 commit을 호출.
  // storeContext.commit(
  //   'setCartItems',
  //   data.map((item) => ({
  //     ...item,
  //     imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  //   }))
  // )
  // await storeContext.dispatch(FETCH_CART_ITEMS)
  // },
}
