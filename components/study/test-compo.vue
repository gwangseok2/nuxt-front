<template>
  <div>
    <h1 style="font-size: 40px">랜더링 테스트</h1>
    <button @click="counter()">데이터 속성 + 버튼</button>
    <div v-if="count < 1">컴포넌트 테스트</div>
    <div v-else>슬라이드</div>
    {{ count }}

    <h1 style="font-size: 40px">스토어 랜더링 테스트</h1>
    <button @click="refresh()">새로고침</button>
    <div v-if="$store.state.storeCount < 1">컴포넌트 테스트</div>
    <div v-else>슬라이드</div>
    {{ $store.state.storeCount }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      num: 0,
    }
  },

  async fetch() {
    await this.$store.commit('refreshCount', 1)
  },

  methods: {
    counter() {
      this.count = this.count + 1
    },
    refresh() {
      this.$store.commit('refreshCount', 4)
    },
  },
}
</script>

<style lang="scss" scoped></style>
