<template>
  <div>
    <h1>카트페이지 입니다.</h1>
    <ul v-for="cartitem in cartList" :key="cartitem.id">
      <li>{{ cartitem.id }}</li>
      <li><img :src="cartitem.imageUrl" alt="" /></li>
      <li>{{ cartitem.name }}</li>
      <li>{{ cartitem.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    let cartList = await store.state.cartItems
    cartList = cartList.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    return { cartList }
  },
}
</script>

<style lang="scss" scoped></style>
