<template>
  <div class="detail wrapper">
    <h2 class="detail-title">약관명 이용약관</h2>
    <select class="detail-select">
      <option>2023.12.30</option>
    </select>
    <div class="detail-box">
      <h3>제1장</h3>
      <h3>제2장</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste numquam
        ex tenetur ipsum neque nesciunt vel dolores. Quod quam alias consequatur
        commodi incidunt omnis suscipit assumenda error nisi! Nihil,
        accusantium.
      </p>
      <h3>제3장</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste numquam
        ex tenetur ipsum neque nesciunt vel dolores. Quod quam alias consequatur
        commodi incidunt omnis suscipit assumenda error nisi! Nihil,
        accusantium.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.detail {
  &-title {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 22px;
    font-weight: 600;
    line-height: 130%; /* 28.6px */
    letter-spacing: -0.44px;
    margin-bottom: 24px;
  }
  &-select {
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    background: #fff;
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    width: 118px;
    height: 38px;
    box-sizing: border-box;
    padding: 0 12px;
  }
  &-box {
    margin-top: 16px;
    padding-top: 24px;
    border-top: 1px solid #e8e8e8;
    h3 {
      font-size: 14px;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.28px;
      margin-bottom: 16px;
    }
    p {
      color: $main-subfont-color;
      font-size: 14px;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
      letter-spacing: -0.28px;
      margin-bottom: 48px;
    }
  }
}
</style>
