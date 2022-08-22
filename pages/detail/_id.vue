<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index'
export default {
  async asyncData({ params }) {
    const id = params.id
    const response = await fetchProductById(id)
    // eslint-disable-next-line no-console
    console.log(response, '리스뽄스')
    const product = response.data
    return { product }
  },
  data() {
    return {
      pang: 1,
    }
  },
  methods: {
    async addToCart() {
      const res = await createCartItem(this.product)
      // eslint-disable-next-line no-console
      console.log(res)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
button {
  border: 1px solid #ccc;
  font-size: 14px;
  font-weight: bold;
}
</style>
