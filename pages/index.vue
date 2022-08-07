<template>
  <div class="app">
    <main>
      <div>
        <input type="text" />
      </div>

      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="flex item"
          @click="moveToDetail(product.id)"
        >
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="product-image"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}$</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    // eslint-disable-next-line no-console
    console.log(response)
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    // eslint-disable-next-line no-console
    // console.log('구조분해 프로덕트', ...products)
    return { products }
  },

  data() {
    return {}
  },

  methods: {
    moveToDetail(id) {
      this.$router.push(`detail/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: 1px solid #ccc;
  width: 500px;
}
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
