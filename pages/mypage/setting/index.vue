<template>
  <div class="setting wrapper">
    <ul>
      <li class="setting-item flex-between">
        <span class="setting-title">Push 설정 (전체)</span>
        <button class="setting-button">버튼</button>
      </li>
      <li class="setting-item flex-between">
        <span class="setting-title">구독중인 상품</span>
        <button class="setting-button">버튼</button>
      </li>
      <li class="setting-item flex-between">
        <span class="setting-title">내가 만든 포트폴리오</span>
        <button class="setting-button">버튼</button>
      </li>
      <li class="setting-item flex-between">
        <span class="setting-title">라운지</span>
        <button class="setting-button">버튼</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.setting {
  &-item {
    color: #222;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    height: 54px;
  }
}
</style>
