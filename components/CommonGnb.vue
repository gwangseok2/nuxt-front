<template>
  <header>
    <nuxt-link :to="{ path: '/' }"><h1>빌드테스트02</h1></nuxt-link>
    <ul>
      <nuxt-link :to="{ path: '/detail/product_game' }" tag="li"
        >가위바위보게임</nuxt-link
      >
      <li>{{ message }}</li>
      <li><button @click="changeData">워딩반전버튼</button></li>
      <li>{{ watch }}</li>
      <li>
        <nuxt-link :to="{ path: '/study' }">스터디 페이지</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'CommonGnb',

  data() {
    return {
      message: '감시하냐?',
      watch: '감시전',
    }
  },

  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.watch = '감시후'
    },
  },

  methods: {
    changeData() {
      this.message = this.message.split('').reverse().join('')
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #1f80fd;
  color: #fff;
  font-weight: bold;
  box-sizing: border-box;
  padding: 0 21vw;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    li button {
      border: 1px solid #fff;
      color: #fff;
      border-radius: 8px;
    }
  }
}
</style>
