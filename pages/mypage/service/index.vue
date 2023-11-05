<template>
  <div class="service">
    <ul>
      <li class="service-item flex-between">
        <span class="service-title">Push 설정 (전체)</span>
        <button class="service-button">버튼</button>
      </li>
      <li class="service-item flex-between">
        <span class="service-title">Push 설정 (전체)</span>
        <button class="service-button">버튼</button>
      </li>
      <li class="service-item flex-between">
        <span class="service-title">Push 설정 (전체)</span>
        <button class="service-button">버튼</button>
      </li>
      <li class="service-item flex-between">
        <span class="service-title">Push 설정 (전체)</span>
        <button class="service-button">버튼</button>
      </li>
      <li class="service-item flex-between">
        <span class="service-title">버전정보</span>
        <button class="service-version">현재 버전 1.0</button>
      </li>
      <li class="service-item flex-between">
        <span class="service-title">탈퇴하기</span>
        <button class="service-button">버튼</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service {
  ul {
    width: 100%;
  }
  &-item {
    padding: 0 4.4444444%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    color: $main-subfont-color;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    .service-version {
      color: #999;
      text-align: right;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.32px;
    }
  }
  &-item:nth-child(3),
  &-item:nth-child(4),
  &-item:nth-child(5) {
    height: 66px;
    border-bottom: 12px solid #f1f1f1;
  }

  line {
    width: 100%;
    height: 12px;
    background-color: #f1f1f1;
  }
}
</style>
