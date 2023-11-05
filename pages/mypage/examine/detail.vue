<template>
  <div class="examine wrapper">
    <div class="examine-top">
      <h2 class="examine-top-title">심사항목</h2>
      <p class="examine-top-description">울트라슈퍼머시기</p>
      <button type="button" class="flex-between">
        상세
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
        >
          <path
            d="M5 6L9 10L5 14"
            stroke="#222222"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- 심사현황 ul에 cancel 클래스 존재시 opacity처리 -->
    <template>
      <ul class="examine-status">
        <li class="examine-status-item active">심사 접수</li>
        <li class="bar"></li>
        <li class="examine-status-item">심사중</li>
        <li class="bar"></li>
        <li class="examine-status-item">심사 완료</li>
      </ul>
    </template>

    <template>
      <div class="examine-text">
        <div class="examine-text-box">
          <!-- 심사 완료 일 때. -->
          <h3>심사가 완료되었습니다.</h3>
          <div class="examine-text-box-status reject">결과: 반려</div>
          <p class="examine-text-box-reject">
            반려 사유 반려 사유 반려 사유 반려 사유 반려 사유 반려 사유
          </p>

          <!-- 심사 완료가 아닐 때. -->
          <p class="examine-text-box-description">
            관리자에게 회원님의 커뮤니티 심사를<br />
            요청하고 있습니다.
          </p>
        </div>
      </div>
    </template>

    <template>
      <div class="examine-list">
        <div class="examine-list-nav flex-between">
          <h3 class="examine-list-nav-title">진행내역</h3>
          <button type="button">
            커뮤니티 삭제
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                d="M5 6L9 10L5 14"
                stroke="#222222"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul class="examine-list-box">
          <li class="examine-list-box-item">
            <span class="examine-list-box-item-date">2023.07.04</span>
            <span>회원님이 심사요청을 하셨습니다.</span>
          </li>
          <li class="examine-list-box-item">
            <span class="examine-list-box-item-date">2023.07.04</span>
            <span>회원님이 심사요청을 하셨습니다.</span>
          </li>
          <li class="examine-list-box-item">
            <span class="examine-list-box-item-date">2023.07.04</span>
            <span>회원님이 심사요청을 하셨습니다.</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.examine {
  &-top {
    position: relative;
    &-title {
      color: #222;
      font-size: 16px;
      font-weight: 500;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
    }
    &-description {
      color: #666;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      line-height: 18.2px;
      letter-spacing: -0.28px;
    }
    button {
      color: #222;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.28px;
      padding: 4px 9px;
      border-radius: 6px;
      background: #f5f5ff;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  // 심사 상태 step
  // status.cancel 일 경우 opacity처리
  &-status {
    &.cancel li {
      opacity: 0.5;
    }
    margin-top: 24px;
    display: flex;
    align-items: center;

    &-item {
      width: 24.3902439024%;
      height: 38px;
      line-height: 38px;
      color: $main-font-color;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
      border: 1px solid #e8e8e8;
      background: #fff;
    }

    &-item.active {
      border: 1px solid #4a4ee7;
      color: #4a4ee7;
      font-weight: 600;
    }

    .bar {
      width: 13.414634%;
      height: 1px;
      background: #e8e8e8;
    }
    .bar.active {
      background-color: #4a4ee7;
    }
  }

  &-text {
    width: 100%;
    border-radius: 14px;
    background-color: #f5f5ff;
    margin-top: 24px;
    &-box {
      padding: 24px 16px;
      h3 {
        color: #444;
        text-align: center;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.28px;
      }
      &-status {
        padding: 8px 16px;
        border-radius: 14px;
        background-color: #fff;
        color: #4882f5;
        font-size: 16px;
        font-weight: 600;
        margin-top: 8px;
        width: 130px;
        margin: 8px auto 0;
        text-align: center;
      }

      &-reject {
        display: none;
      }

      &-status.reject + &-reject {
        display: block;
        color: #999;
        text-align: center;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.6px;
        letter-spacing: -0.28px;
        margin-top: 12px;
      }
      &-status.reject {
        color: #d74343;
      }
      &-description {
        color: #444;
        text-align: center;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
      }
    }
  }

  // 진행내역
  &-list {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #e8e8e8;
    &-nav {
      &-title {
        color: #222;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.32px;
      }
      button {
        display: flex;
        align-items: center;
        gap: 3px;
        color: #222;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.28px;
        padding: 4px 9px;
        background-color: #f1f1f1;
        border-radius: 6px;
      }
    }
    &-box {
      margin-top: 17px;
      &-item {
        font-size: 14px;
        font-weight: 400;
        color: #666;
        letter-spacing: -0.28px;
        margin-bottom: 12px;
        &-date {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
