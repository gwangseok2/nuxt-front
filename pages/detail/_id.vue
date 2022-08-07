<template>
  <div>
    <h1>상세페이지</h1>
    <div>
      <div>
        <img :src="product.imageUrl" :alt="product.name" />
        <p>name: {{ product.name }}</p>
        <p>price: {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'
export default {
  async asyncData({ params }) {
    const id = params.id
    const response = await fetchProductById(id)
    // eslint-disable-next-line no-console
    console.log(response, '리스뽄스')
    const product = response.data
    return { product }
  },
  //   created() {
  //     const id = this.$route.params.id
  //     // eslint-disable-next-line no-console
  //     console.log(id)
  //     fetchProductById(id);
  //   },
}
</script>

<style lang="scss" scoped></style>
