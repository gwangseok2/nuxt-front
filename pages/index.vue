<template>
  <div class="app">
    <main>
      <!-- :search-keyword="searchKeyword"
        @input="updateSearchkeyword" -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
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
    <aside class="right-float-btn" @click="$router.push('/cart')">
      <div>Cart To</div>
    </aside>
  </div>
</template>

<script>
import { fetchProductByKeyword, fetchProducts } from '../api/index'
import SearchInput from '@/components/SearchInput.vue'
export default {
  components: { SearchInput },
  async asyncData() {
    const response = await fetchProducts()
    // eslint-disable-next-line no-console
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    }))
    // eslint-disable-next-line no-console
    // console.log('구조분해 프로덕트', ...products)

    // 리턴값은 data와 결합된다 this로 접근가능.
    return { products }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`detail/${id}`)
    },

    // 맵을 이용해서 필터링을 쉽게 할 수 있지 않을까?... 생각해보자.
    async searchProducts() {
      const response = await fetchProductByKeyword(this.searchKeyword)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}`,
      }))
    },
  },
}
</script>

<style lang="scss" scoped>
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
.right-float-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  bottom: 50px;
  background: #1f80fd;
  color: #fff;
}
.right-float-btn div {
  text-align: center;
  line-height: 99px;
  font-size: 20px;
  font-weight: bold;
}
</style>
