<template>
  <div>
    <TestCompo />
    <table>
      <thead>
        30일
      </thead>

      <!-- <tr>
        <td>{{ mockData[0].goldPrice }}</td>
      </tr>
      <tr>
        <td>{{ mockData[0].vipPrice }}</td>
      </tr>
      <tr>
        <td>{{ mockData[0].platinumPricePrice }}</td>
      </tr> -->
    </table>
    <br />
    <hr />
    <div v-for="(item, idx) in mockData" :key="idx">
      {{ item.realPrice }}
    </div>
    <button type="button" @click.prevent="mostPriceFilter()">정렬</button>
  </div>
</template>

<script>
import TestCompo from '@/components/study/test-compo.vue'
export default {
  components: { TestCompo },
  data() {
    return {
      testArr: [
        { grade: 'user', name: 'userPriceArr' },
        { grade: 'gold', name: 'goldPriceArr' },
        { grade: 'vip', name: 'vipPriceArr' },
        { grade: 'vip', name: 'platinumPriceArr' },
      ],

      mockData: [
        {
          goodsNo: 10977,
          realPrice: 23850,
          salePrice: 26500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
        {
          goodsNo: 10977,
          realPrice: 23850,
          salePrice: 26500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
        {
          goodsNo: 10977,
          realPrice: 21850,
          salePrice: 26500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
        {
          goodsNo: 10977,
          realPrice: 71850,
          salePrice: 26500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
        {
          goodsNo: 10977,
          realPrice: 51850,
          salePrice: 56500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
        {
          goodsNo: 10977,
          realPrice: 21850,
          salePrice: 16500,
          sellDisRate: 10.0,
          optionLevel: 0,
          saleDiscountRate: 0.0,
          saleDiscountPrice: 23850,
          allLevelEventYn: 'N',
          goldPriceArr: [23980, 22000],
          goldRate: 1.0,
          goldEventYn: 'Y',
          vipPriceArr: [30980, 31000],
          vipRate: 1.0,
          vipEventYn: 'Y',
          platinumPriceArr: [20980, 21000],
          platinumRate: 12.0,
          platinumEventYn: 'N',
          userPriceArr: [10000, 11000],
          userRate: 12.0,
          userEventYn: 'N',
        },
      ],
    }
  },
  methods: {
    mostPriceFilter() {
      this.mockData = this.mockData.reduce((prev, el) => {
        return prev.realPrice >= el.realPrice ? prev : el
      })
      this.mockData.map((el) => console.log(el.realPrice))

      console.log(Array.isArray(...this.mockData))
      console.log(Math.max(...this.mockData.map((o) => o.realPrice)))
    },
  },
}
</script>

<style lang="scss" scoped></style>
