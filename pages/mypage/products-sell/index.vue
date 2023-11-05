<template>
  <div class="products-sell">
    <div class="products-sell-datepicker">
      <img src="" alt="<" />
      <span>2023</span>
      <img src="" alt=">" />
    </div>
    <template>
      <div
        v-for="item in dummyData"
        :key="item.month"
        class="products-sell-list"
      >
        <h2 class="products-sell-list-month">{{ item.month }}</h2>
        <ul class="products-sell-list-box">
          <li
            v-for="(title, idx) in item.titleList"
            :key="idx"
            class="row-title"
            :class="{ price: title === '수익금' }"
          >
            <span>{{ title }}</span>
          </li>
          <li
            v-for="(row, idx) in item.rowData"
            :key="`row-${idx}`"
            class="row-data"
          >
            <span>{{ row.title }}</span>
            <span>{{ row.sellCount }}</span>
            <span>{{ row.moneyCount }}</span>
            <span>{{ row.totalMoney }}</span>
            <span>{{ row.myMoney }}</span>
          </li>
        </ul>
      </div>
    </template>

    <template>
      <p class="null-message">상품 판매 내역이 없습니다.</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dummyData: [
        {
          month: '9월',
          titleList: ['상품명', '판매수량', '수수료', '판매총액', '수익금'],
          rowData: [
            {
              title: '상품명1',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명2',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명3',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
          ],
        },
        {
          month: '10월',
          titleList: ['상품명', '판매수량', '수수료', '판매총액', '수익금'],
          rowData: [
            {
              title: '상품명4',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명5',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명6',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
          ],
        },
        {
          month: '11월',
          titleList: ['상품명', '판매수량', '수수료', '판매총액', '수익금'],
          rowData: [
            {
              title: '상품명',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
            {
              title: '상품명',
              sellCount: 5,
              moneyCount: 10,
              totalMoney: 100000,
              myMoney: 50000,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.products-sell {
  padding: 16px 0 38px;
  &-datepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 26px;
    border-bottom: 1px solid #e8e8e8;
    span {
      margin: 0 12px;
    }
  }
  &-list {
    padding: 24px 0 0 0;
    &-month {
      padding-left: 16px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
      margin-bottom: 16px;
    }
    &-box {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      margin-bottom: 24px;
      .row-title {
        background: #f7f7f7;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.28px;
        width: 20%;
        height: 36px;
        line-height: 36px;
      }
      .row-title.price {
        color: #4a4ee7;
      }

      .row-data {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #666;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.28px;
        border-bottom: 1px solid #e8e8e8;
        span {
          display: inline-block;
          width: 20%;
          padding: 13px 0;
        }
        span:last-child {
          color: #4a4ee7;
        }
      }
      .row-data:last-child {
        color: #4a4ee7;
      }
    }
  }
  .null-message {
    color: #999;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.28px;
    margin-top: 48px;
  }
}
</style>
