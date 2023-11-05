<template>
  <div class="qna">
    <div class="qna-tab">
      <div
        v-for="(tab, index) in tabList"
        :key="`tab-${index}`"
        @click="clickTab(index)"
        :class="{ active: tab.isActive }"
      >
        {{ tab.text }}
      </div>
    </div>

    <!-- list Component -->
    <template v-if="tab === 0">
      <div class="qna-list">
        <h1>문의 내역 컴포넌트</h1>
        <ul class="qna-list-box">
          <li class="qna-list-box-date">2023.7.26 00:00:00</li>
          <li class="qna-list-box-title">
            타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀타이틀 타이틀
            타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 ...
          </li>
          <li class="qna-list-box-description">
            내용티비 내용티비내용티비내용티비내용티비
          </li>

          <li class="qna-list-box-img">이미지영역</li>

          <li class="qna-list-box-answer">
            <ul class="qna-list-box-answer-box">
              <li class="qna-list-box-answer-box-date">
                <img src="" alt="이미지" />
                <span>2023.7.27 00:00</span>
              </li>
              <li class="qna-list-box-answer-box-description">
                답변내용 답변내용 답변내용 답변내용 답변내용 답변내용 답변내용
                답변내용 답변내용 답변내용 답변내용 답변내용 답변내용 답변내용
                답변내용 답변내용 답변내용
              </li>
            </ul>
          </li>
          <li class="qna-list-box-status finish">답변완료</li>
        </ul>
        <ul class="qna-list-box">
          <li class="qna-list-box-date">2023.9.26 00:00:00</li>
          <li class="qna-list-box-title">
            타이asdasds틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀타이틀
            타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 ...
          </li>
          <li class="qna-list-box-status">미답</li>
        </ul>
      </div>
    </template>

    <!-- addComponent -->
    <template v-if="tab === 1">
      <div class="qna-add">
        <input
          type="text"
          name="title"
          placeholder="제목"
          class="qna-add-input"
        />
        <div class="qna-add-title-length">0 / 50</div>

        <h2>내용</h2>
        <textarea class="qna-add-input" maxlength="2000" placeholder="내용">
내용내용내용내용내용내용내용내용내용내용내용내용</textarea
        >
        <div class="qna-add-description-length">0 / 50</div>

        <ul class="qna-add-photo-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </template>

    <!-- modal -->
    <template v-if="false">
      <div class="modal wrapper">
        <div class="navigator flex-between">
          <div>백버튼</div>
          <div>X</div>
        </div>
        <div class="photo-area">
          <figure>사진영역</figure>
          <ul class="dot-list">
            <li class="dot-list-item active"></li>
            <li class="dot-list-item"></li>
            <li class="dot-list-item"></li>
            <li class="dot-list-item"></li>
            <li class="dot-list-item"></li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { id: 0, text: '문의 내역', isActive: true },
        { id: 1, text: '문의 하기', isActive: false },
      ],
      tab: 0,
    }
  },
  methods: {
    clickTab(idx) {
      this.tabList = this.tabList.map((el) => {
        return el.id === idx
          ? {
              ...el,
              isActive: true,
            }
          : {
              ...el,
              isActive: false,
            }
      })
      this.tab = idx
    },
  },
}
</script>

<style lang="scss" scoped>
.qna {
  width: 100%;
  padding: 0 16px;

  &-tab {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    div {
      width: 100%;
      height: 48px;
      line-height: 48px;
      letter-spacing: -0.32px;
      color: #aaa;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.32px;
    }
    .active {
      border-bottom: 1px solid #000;
      color: #222;
    }
  }

  // 리스트 컴포넌트
  .qna-list {
    padding-top: 28px;
    &-box {
      padding: 20px 0;
      &-date {
        color: #aaa;
        text-align: right;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 12px;
        font-weight: 400;
        line-height: 100%; /* 12px */
        letter-spacing: -0.24px;
        margin-bottom: 4px;
      }
      &-title {
        color: #222;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 14px;
        font-weight: 500;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
        margin-bottom: 4px;
      }
      &-description {
        color: #666;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
      }

      &-img {
        margin-top: 12px;
        width: 100%;
        min-height: 164px;
        max-height: 164px;
        background-color: #000;
        border-radius: 6px;
        overflow: hidden;
      }
      &-status {
        color: #d74343;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: -0.24px;
        margin-top: 18px;
      }
      &-status.finish {
        color: #4a4ee7;
      }
      &-answer {
        margin-top: 24px;
        &-box {
          padding-left: 14px;
          border-left: 2px solid #4a4ee7;
          &-date {
            display: flex;
            align-items: center;
            span {
              color: #aaa;
              font-feature-settings: 'clig' off, 'liga' off;
              font-size: 12px;
              font-weight: 400;
              letter-spacing: -0.24px;
              margin-left: 8px;
            }
            margin-bottom: 8px;
          }
        }
      }
    }
  }

  // 문의 추가 컴포넌트
  .qna-add {
    padding-top: 48px;
    &-input {
      width: 100%;
      padding-bottom: 6px;
      border-bottom: 2px solid #f1f1f1;
      margin-bottom: 8px;
      font-size: 20px;
    }
    &-input::placeholder {
      color: #bfbfbf;
    }
    h2 {
      color: #999;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.24px;
      margin-bottom: 6px;
    }
    textarea {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px; /* 28px */
    }
    &-title-length,
    &-description-length {
      text-align: right;
      margin-bottom: 30px;
      color: #bfbfbf;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.24px;
    }
    &-photo-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-content: space-around;
      margin-bottom: 120px;
      grid-gap: 8px;
      li {
        width: 20.54054054vw;
        height: 20.54054054vw;
        background-color: lightgreen;
        position: relative;
        // margin: 0 auto 8px;
      }
      li:after {
        content: 'x';
        color: #fff;
        text-align: center;
        line-height: 18px;
        display: block;
        position: absolute;
        top: 2px;
        right: 2px;
        width: 18px;
        height: 18px;
        background-color: #000;
        border-radius: 50%;
      }
    }
  }

  // 모달 컴포넌트
  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 11;
    .navigator {
      width: 100%;
      height: 48px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
    .photo-area {
      width: 100%;
      figure {
        margin: 116px auto 0;
        display: block;
        max-width: 328px;
        min-height: 328px;
        border-radius: 14px;
        background: #d9d9d9;
        overflow: hidden;
        margin-bottom: 24px;
      }
      .dot-list {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        gap: 6px;

        &-item {
          min-width: 6px;
          min-height: 6px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.4);
        }
        &-item.active {
          width: 16px;
          border-radius: 7px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
