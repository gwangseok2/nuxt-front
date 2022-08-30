<template>
  <div>
    <ul v-for="cartitem in $store.state.cartItems" :key="cartitem.id">
      <li>{{ cartitem.id }}</li>
      <li><img :src="cartitem.imageUrl" alt="" /></li>
      <li>{{ cartitem.name }}</li>
      <li>{{ cartitem.price }}</li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
  data() {
    return {}
  },

  async fetch() {
    // await console.log(this)
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style lang="scss" scoped></style>
