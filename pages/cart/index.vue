<template>
  <div>
    <h1>카트페이지 입니다.</h1>
    <ul v-for="cartitem in cartList" :key="cartitem.id">
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
export default {
  async asyncData({ store }) {
    const cartList = await store.state.cartItems
    return { cartList }
  },
}
</script>

<style lang="scss" scoped></style>
