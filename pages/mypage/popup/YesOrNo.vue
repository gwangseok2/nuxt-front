<template>
  <div class="dimd">
    <ul class="confirm-modal">
      <li>
        작성하신 모든 내용이 삭제 됩니다.<br />
        계속 하시겠습니까?
      </li>
      <li>확인</li>
      <li>취소</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.confirm-modal {
  display: flex;
  flex-wrap: wrap;
  padding: 24px 16px 16px;
  width: 80.55555%;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  li {
    font-weight: 600;
  }
  li:first-child {
    color: #222;
    font-size: 16px;
    font-weight: 500;
    width: 50%;
    width: 100%;
    line-height: 22.4px;
  }
  li:nth-child(2),
  li:nth-child(3) {
    margin-top: 24px;
    width: 48.449612403%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    border-radius: 14px;
  }

  li:nth-child(2) {
    background: #edeeff;
    color: #4a4ee7;
  }
  li:nth-child(3) {
    background: #4a4ee7;
    color: #fff;
    margin-left: auto;
  }
}
</style>
