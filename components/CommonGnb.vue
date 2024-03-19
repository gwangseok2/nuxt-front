<template>
  <header>
    <ul class="nav-list">
      <li
        v-for="item in gnbData"
        :key="item.id"
        @click="router.push(item.path)"
        :class="item.className"
      >
        {{ item.name }}
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

  computed: {
    gnbData() {
      return [
        { id: 0, path: '/', name: 'Lotto Draw', className: 'logo' },
        { id: 1, path: '/lotto', name: 'Start Lotto', className: '' },
      ]
    },
  },

  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal)
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
  height: 60px;
  background: linear-gradient(72deg, #4252f6, #cbfdff);
  .nav-list {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: Catamaran;
    color: #fff;
    padding: 0 30px;
    & > .logo {
      font-weight: 800;
      margin-right: 50px;
      font-size: 28px;
      opacity: 0.7;
    }
    & > li {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
