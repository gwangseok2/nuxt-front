<template>
  <div class="mypage">
    <h1 class="mypage-title">마이페이지</h1>
    <div class="mypage-profile">
      <figure class="mypage-profile-user-image"></figure>
      <span class="mypage-profile-user-name">{{ username }}</span>
    </div>
    <ul class="mypage-list">
      <li
        v-for="item in menuList"
        :key="item.id"
        class="mypage-list-item"
        @click="moveToMenuPage(item.path)"
      >
        <img :src="item.icon" :alt="item.icon" class="mypage-list-item-icon" />
        <span>{{ item.text }}</span>
        <span class="mypage-list-item-btn"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.29289 14.7071C4.68342 15.0976 5.31658 15.0976 5.70711 14.7071L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289L5.70711 5.29289C5.31658 4.90237 4.68342 4.90237 4.29289 5.29289C3.90237 5.68342 3.90237 6.31658 4.29289 6.70711L7.58579 10L4.29289 13.2929C3.90237 13.6834 3.90237 14.3166 4.29289 14.7071Z"
              fill="#BFBFBF"
            /></svg
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '송광석',
      menuList: [
        {
          id: 0,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '내 심사 내역',
          path: '',
        },
        {
          id: 1,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '내 상품 판매 내역',
          path: '',
        },
        {
          id: 2,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '내정보 관리',
          path: 'profile',
        },
        {
          id: 3,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '보관함',
          path: '',
        },
        {
          id: 4,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '내가 쓴 글',
          path: '',
        },
        {
          id: 5,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '알림설정',
          path: '',
        },
        {
          id: 6,
          icon: 'https://cdn.icon-icons.com/icons2/3788/PNG/512/love_wedding_valentine_heart_navigation_location_pin_map_icon_232555.png',
          text: '고객센터',
          path: '',
        },
      ],
    }
  },
  methods: {
    moveToMenuPage(path) {
      if (!path) return
      this.$router.push(`mypage/${path}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.mypage {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 4.444444%;
  font-family: 'Pretendard';
  background-color: #fff;

  // title
  &-title {
    font-size: 22px;
    height: 48px;
    line-height: 48px;
    color: $main-font-color;
    margin-bottom: 12px;
    font-weight: 600;
  }

  // profile
  &-profile {
    color: $main-font-color;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 32px;
    letter-spacing: -0.4px;
    &-user-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #000;
      margin-right: 14px;
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    &-item {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 16px;
      padding: 16px 0;
      box-sizing: border-box;
      color: $main-subfont-color;
      font-weight: 500;
      position: relative;
      &-icon {
        display: block;
        width: 28px;
        margin-right: 8px;
      }
      &-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
  }
}
</style>
