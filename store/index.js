/* eslint-disable no-console */
// 객체 반환시 소괄호 사용 ({}) return{ a: 1 } === ({a:1})
// 여러 컴포넌트 간에 공유되어야 하는 데이터를 이곳에 저장.
export const state = () => ({
  cartItems: [],
})

// 전부다 export로 꺼냄 첫번째 파라미터로 state를 받음 2번째 인자 2개이상 받을시 객체로 선언
export const mutations = {
  addCartItem(state, { cartItem, pang }) {
    console.log(pang, cartItem)
    state.cartItems.push(cartItem)
  },
}
