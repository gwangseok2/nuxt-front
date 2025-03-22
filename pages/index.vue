<template>
  <div class="app">
    <main>
      <!-- :search-keyword="searchKeyword"
        @input="updateSearchkeyword" -->
      <!-- <ul>
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
      </ul> -->
      <h1 class="main-title">1112회 로또 추첨(추후 수정 예정)</h1>
      <LottoItem :lottoArray="lottoArray" :bonusNumber="bonus" />
    </main>

    <button type="button" class="lotto-btn" @click="lottoResult">
      Draw Lotto!!
    </button>

    <ul>
      <li>
        <h2 class="sub-title">최근 10번 추첨 기록</h2>
      </li>
      <li v-for="lotto in prevLottoArray" :key="lotto.id">
        <span>{{ lotto.title }}</span>
        <span></span>
      </li>
    </ul>
    <!-- <aside class="right-float-btn" @click="$router.push('/cart')">
      <div>Cart To</div>
    </aside> -->
  </div>
</template>

<script>
import { fetchProductByKeyword } from '../api/index'
import LottoItem from '@/components/lotto/LottoItem.vue'
import { lottoResult, getData } from '@/api/lotto'
export default {
  components: { LottoItem },

  data() {
    return {
      searchKeyword: '',
      lottoArray: null,
      bonus: null,
      prevLottoArray: [],
    }
  },

  async created() {
    this.prevLottoArray = await getData(10)
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

    lottoResult() {
      lottoResult().then(async (res) => {
        this.lottoArray = res.resultList
        this.bonus = res.bonus
        this.prevLottoArray = await getData()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-title {
  margin-top: 50px;
  font-size: 40px;
  text-align: center;
}

.sub-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.lotto-btn {
  background: 200px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: #394af8;
  outline: none;
  border: none;
  border-radius: 12px;
  display: block;
  padding: 20px;
  margin: 30px auto;
  &:hover {
    opacity: 0.8;
  }
}
</style>
