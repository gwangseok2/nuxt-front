<template>
  <div>
    <h1>카트페이지 입니다.</h1>
    <CartList></CartList>
    <div>
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue'
// import { FETCH_CART_ITEMS } from '@/store'
export default {
  components: { CartList },
}
</script>

<style lang="scss" scoped></style>
