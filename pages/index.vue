<template>
  <div class="app">
    <section class="flex-wrapper">
      <article>
        <h1 class="main-title">{{ currentLottoTurn + 1 }}회차 로또 추첨</h1>
        <LottoItem :lottoArray="lottoArray" :bonusNumber="bonus" />

        <button type="button" class="lotto-btn" @click="lottoResult">
          Draw Lotto!!
        </button>

        <h2 class="main-title">이전 회차 당첨번호</h2>
        <LottoItem
          :lottoArray="prevWinnerNumberArray"
          :bonusNumber="prevWinnerBonusNumber"
        />
        {{prevWinnerNumberArray}}
      </article>
      <article>
        <h2 class="sub-title">최근 10번 추첨 기록</h2>

        <ul class="git-hub-array">
          <li v-for="lotto in prevLottoArray" :key="lotto.id">
            <span class="lotto-title">{{ lotto.title }}</span>
            <span></span>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import { fetchProductByKeyword } from '../api/index'
import LottoItem from '@/components/lotto/LottoItem.vue'
import { lottoResult, getData, getLottoResult } from '@/api/lotto'
export default {
  components: { LottoItem },

  data() {
    return {
      searchKeyword: '',
      lottoArray: null,
      bonus: null,
      prevLottoArray: [],
      prevWinnerNumberArray: [],
      currentLottoTurn: undefined,
      prevWinnerBonusNumber: undefined,
    }
  },

  async created() {
    this.prevLottoArray = await getData(10)
  },

  mounted() {
    this.fetchPrevWinnderNumber()
  },

  methods: {
    async fetchPrevWinnderNumber() {
      const { drawNumber, numbers, bnusNo } = await getLottoResult()
      this.currentLottoTurn = drawNumber
      this.prevWinnerNumberArray = numbers
      this.prevWinnerBonusNumber = bnusNo
      console.log(this.currentLottoTurn, 'turn')
      console.log(this.prevLottoArray, 'nummbers')
    },

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
  font-size: clamp(24px, 5vw, 40px);
  text-align: center;
}

.sub-title {
  text-align: left;
  font-size: clamp(20px, 4vw, 36px);
  margin-bottom: 30px;
}

.git-hub-array {
  display: flex;
  flex-direction: column;
  text-align: left;
  & > li {
    padding: 5px 0;
    font-weight: 500;
    font-size: 18px;
  }
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
.flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 100px;
  & > article {
    flex: 1;
    // padding: 0 10px;
  }
  & > article:first-child {
    border-right: 1px solid #ececec;
  }
}
// .flex-wrapper::after {
//   content: '';
//   display: block;
//   position: absolute;
//   width: 3px;
//   height: 100%;
//   background-color: #000;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }
</style>
