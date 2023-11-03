<template>
  <div class="profile">
    <figure
      class="profile-img"
      :style="{
        'background-image':
          'url(https://image.jtbcplus.kr/data/contents/jam_photo/202206/13/a01e3a0a-fe86-452a-a0bd-ee43bffb3b45.jpg)',
      }"
    ></figure>
    <ul class="profile-info-list">
      <li class="profile-info-list-item">
        <span>닉네임</span>
        <span>스깅</span>
      </li>
      <li class="profile-info-list-item">
        <span>이메일 주소</span>
        <span>abcd@gmail.com</span>
      </li>
      <li class="profile-info-list-item">
        <span>휴대폰 번호</span>
        <span>010 8240 7107</span>
      </li>
      <li class="profile-info-list-item">
        <span>연령대</span>
        <span>없음</span>
      </li>
      <li class="profile-info-list-item">
        <span>성별</span>
        <span>없음</span>
      </li>
    </ul>

    <hr />

    <div class="profile-sns">
      <h2 class="profile-sns-title">SNS 계정 연동</h2>
      <ul class="profile-sns-list">
        <li class="profile-sns-list-item">
          <span>
            <img src="" alt="kakao" />
            카카오 계정 연결
          </span>
          <div>버튼</div>
        </li>
        <li class="profile-sns-list-item">
          <span>
            <img src="" alt="google" />
            구글 계정 연결
          </span>
          <div>버튼</div>
        </li>
        <li class="profile-sns-list-item">
          <span>
            <img src="" alt="naver" />
            네이버 계정 연결
          </span>
          <div>버튼</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.profile {
  font-family: 'Pretendard';
  padding: 0 4.444444%;
  &-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 20px auto 24px;
  }

  &-info-list {
    margin-bottom: 24px;
    &-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      padding: 16px 0;
      letter-spacing: -0.32px;
      span:first-child {
        font-weight: 600;
        color: $main-font-color;
      }
      span:last-child {
        font-weight: 400;
        color: $main-subfont-color;
      }
    }
  }
  hr {
    margin-bottom: 24px;
  }
  &-sns {
    &-title {
      color: #999;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.24px;
      height: 37px;
      line-height: 37px;
    }
    &-list {
      &-item {
        height: 54px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        span:first-child {
          display: flex;
          align-items: center;
        }
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
          display: block;
        }
      }
    }
  }

  //   background-color: #000;
}
</style>
