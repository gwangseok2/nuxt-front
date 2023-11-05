<template>
  <div class="row-component">
    <template v-if="rowData">
      <ul class="row-component-list" v-for="item in rowData" :key="item.id">
        <li class="row-component-list-item">
          <h2>{{ item.rowTitle }}</h2>
          <p>
            <span>심사 신청일</span>
            <span class="bar"></span>
            <span>{{ item.addDate }}</span>
          </p>
        </li>
        <li class="row-component-list-button" :class="item.class">
          {{ item.buttonText }}
        </li>
      </ul>
    </template>

    <template>
      <p class="null-message">{{ message }}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      default: Object,
    },
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.row-component {
  padding: 32px 4.44444% 0;
  &-list {
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 16px;
    &-item {
      h2 {
        color: #444;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
        margin-bottom: 4px;
      }
      p {
        span {
          color: #999;
          font-feature-settings: 'clig' off, 'liga' off;
          font-size: 12px;
          font-weight: 400;
          line-height: 140%; /* 16.8px */
          letter-spacing: -0.24px;
        }
        .bar {
          display: inline-block;
          width: 1px;
          height: 9px;
          transform: translateY(4px);
          border-radius: 10px;
          background: #d9d9d9;
          margin: 0 4px;
        }
      }
    }
    &-button {
      display: flex;
      width: 90px;
      height: 36px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      border: 1px solid #e8e8e8;
      background: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
    }
    .cancel,
    .add {
      color: #666;
      border-radius: 10px;
      border: 1px solid #e8e8e8;
      background: #fff; /* 19.6px */
    }
    .check {
      color: #d74343;
    }
    .finish {
      color: #4a4ee7;
    }
  }
  .null-message {
    margin-top: 64px;
    color: #999;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.28px;
  }
}
</style>
