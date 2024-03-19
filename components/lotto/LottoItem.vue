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
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 20px;
  .title {
    font-size: 35px;
  }
  .bar {
    font-size: min(10vw, 80px);
  }
  & > .lotto-item {
    flex-shrink: 0;
    border: 2px solid #593af8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(10vw, 100px);
    height: min(10vw, 100px);
    font-size: 22px;
    color: #000;
    font-weight: bold;
  }
}
</style>
