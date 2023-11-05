<template>
  <div class="policy">
    <ul>
      <li class="policy-item">
        <span>퀀트마켓 이용약관</span>
        <button>에로우버튼</button>
      </li>
      <li class="policy-item">
        <span>퀀트마켓 이용약관</span>
        <button>에로우버튼</button>
      </li>
    </ul>
    <div class="bottom-box wrapper">
      <h2 class="bottom-box-title">서비스 이용 동의 현황</h2>
      <p class="bottom-box-item">
        <span>회원 마케팅 수신동의</span>
        <button>버튼</button>
      </p>
      <p class="bottom-box-text">마케팅 수신 동의</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.policy {
  &-item {
    @include listItem;
  }
  &-item:nth-child(2) {
    height: 66px;
    border-bottom: 12px solid #f1f1f1;
  }
  .bottom-box {
    &-title {
      color: $main-font-color;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 16px */
      letter-spacing: -0.32px;
      margin: 32px 0 16px;
    }
    &-item {
      @include listItem($color: #222);
      padding: 0;
    }
    &-text {
      color: $main-subfont-color;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.28px;
      margin-top: 8px;
    }
  }
}
</style>
