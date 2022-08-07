<template>
  <div>
    <h2>{{ $route.name }}페이지</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',

  async created() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response.data)
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 28px;
  text-align: center;
}
</style>
