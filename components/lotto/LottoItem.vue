<template>
  <ul class="lotto-wrapper" v-if="bonusNumber">
    <li class="title">당첨번호:</li>
    <li v-for="lotto in lottoArray" :key="lotto" class="lotto-item">
      {{ lotto }}
    </li>
    <li class="bar">/</li>
    <li class="lotto-item">
      <b class="bonus"> {{ bonusNumber }} </b>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    lottoArray: {
      type: Array,
      default: () => [12, 15, 4, 6, 9, 43],
    },
    bonusNumber: {
      type: Number,
      default: 45,
    },
  },
}
</script>

<style lang="scss" scoped>
.lotto-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  margin-top: 20px;
  .title {
    font-size: 35px;
  }
  .bar {
    font-size: 80px;
  }
  & > .lotto-item {
    height: 100px;
    line-height: 99px;
    border: 2px solid #593af8;
    border-radius: 50%;
    text-align: center;
    width: 100px;
    font-size: 22px;
    color: #000;
    font-weight: bold;
  }
}
</style>
