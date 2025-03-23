<template>
  <ul class="lotto-wrapper" v-if="bonusNumber">
    <li class="title">당첨번호 :</li>
    <li v-for="lotto in lottoArray" :key="lotto" class="lotto-item">
      {{ lotto }}
    </li>
    <li class="bar">+</li>
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
  max-width: 89.33%;
  margin: 0 auto;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 20px;
  .title {
    font-size: clamp(15px, 4vw, 22px);
    margin-right: 5px;
    flex-shrink: 0;
  }
  .bar {
    font-size: min(10vw, 15px);
  }
  & > .lotto-item {
    display:flex;
    flex-shrink: 0;
    border: 2px solid #593af8;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: clamp(30px, 4vw, 55px);
    height: clamp(30px, 4vw, 55px);
    font-size: clamp(15px, 2vw, 22px);
    color: #000;
    font-weight: bold;
  }
}
</style>
