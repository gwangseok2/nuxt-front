<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <!-- 온클릭 이벤트 발동 했을 때이벤트 명 선언 부모 컴포넌트는 @search로 받아야 함-->
    <button type="button" @click="$emit('search')">검색</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: 3px solid #1f80fd;
  width: 500px;
  margin: 5px;
}
button {
  border: 1px solid #1f80fd;
  padding: 5px;
  color: #1f80fd;
  font-weight: bold;
}
</style>
