<template>
  <div>
    <h1>카트페이지 입니다.</h1>
    <ul v-for="cartitem in $store.state.cartItems" :key="cartitem.id">
      <li>{{ cartitem.id }}</li>
      <li><img :src="cartitem.imageUrl" alt="" /></li>
      <li>{{ cartitem.name }}</li>
      <li>{{ cartitem.price }}</li>
    </ul>
    <div>
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'
export default {
  // async asyncData({ store }) {
  //   const cartList = await store.state.cartItems
  //   return { cartList }
  // },

  async asyncData({ store }) {
    await store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style lang="scss" scoped></style>
