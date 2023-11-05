<template>
  <div class="posting">
    <div class="posting-tab wrapper">
      <div
        v-for="(tab, index) in tabList"
        :key="`tab-${index}`"
        :class="{ active: tab.isActive }"
        @click="clickTab(index)"
      >
        {{ tab.text }}
      </div>
    </div>
    <!-- list Component -->
    <template v-if="tab === 0">
      <div class="posting-list">
        <ul class="posting-list-box">
          <li class="flex-between">
            <span class="posting-list-box-title">시황종복에 쓴 의견</span>
            <span class="posting-list-box-status">
              <img src="" alt="하트" />
              <span class="number">3</span>
              <img src="" alt="채팅" />
              <span class="number">4</span>
            </span>
          </li>
          <li class="posting-list-box-date">2023.7.26 00:00:00</li>
          <li class="posting-list-box-description">
            내용티비 내용티비내용티비내용티비내용티비
          </li>
          <li class="posting-list-box-img">이미지영역</li>
          <li class="comment-list-box-add-view show">더 보기</li>
        </ul>
        <ul class="posting-list-box">
          <li class="flex-between">
            <span class="posting-list-box-title">시황종복에 쓴 의견</span>
            <span class="posting-list-box-status">
              <img src="" alt="하트" />
              <span class="number">3</span>
              <img src="" alt="채팅" />
              <span class="number">4</span>
            </span>
          </li>
          <li class="posting-list-box-date">2023.7.26 00:00:00</li>
          <li class="posting-list-box-description">
            내용티비 내용티비내용티비내용티비내용티비
          </li>
          <li class="posting-list-box-img">이미지영역</li>
          <li class="comment-list-box-add-view">더 보기</li>
        </ul>
      </div>
    </template>

    <!-- list Component -->
    <template v-if="tab === 1">
      <div class="comment-list">
        <ul class="comment-list-box">
          <li class="flex-between">
            <span class="comment-list-box-title">시황종복에 쓴 댓글</span>
            <span class="comment-list-box-status">
              <img src="" alt="하트" />
              <span class="number">3</span>
              <img src="" alt="채팅" />
              <span class="number">4</span>
              <span class="edit" @click="openEditModal(1)">...</span>
            </span>
          </li>
          <li class="comment-list-box-date">2023.7.26 00:00:00</li>
          <li class="comment-list-box-description">
            내용티비 내용티비내용티비내용티비내용티비
          </li>
          <li class="comment-list-box-img">이미지영역</li>
          <li class="comment-list-box-add-view show">더 보기</li>
        </ul>
        <ul class="comment-list-box">
          <li class="flex-between">
            <span class="comment-list-box-title">시황종복에 쓴 댓글</span>
            <span class="comment-list-box-status">
              <img src="" alt="하트" />
              <span class="number">3</span>
              <img src="" alt="채팅" />
              <span class="number">4</span>
            </span>
          </li>
          <li class="comment-list-box-date">2023.7.26 00:00:00</li>
          <li class="comment-list-box-description">
            내용티비 내용티비내용티비내용티비내용티비
          </li>
          <li class="comment-list-box-img">이미지영역</li>
          <li class="comment-list-box-add-view">더 보기</li>
        </ul>
      </div>
    </template>

    <!-- edit modal -->
    <template>
      <div class="edit dimd">
        <ul v-if="editListShow" class="edit-modal">
          <li class="edit-modal-item" @click="openSetEdit('edit', 1)">
            수정하기
          </li>
          <li class="edit-modal-item" @click="openSetEdit('delete', 2)">
            삭제하기
          </li>
          <li class="edit-modal-item" @click="openSetEdit('comment', 3)">
            댓글달기
          </li>
        </ul>
        <div v-if="editShow" class="edit-post">
          <h2 class="edit-post-title flex-between">
            글쓰기
            <img src="" alt="X" />
          </h2>
          <div class="edit-post-menu">
            <ul class="edit-post-menu-box">
              <li class="edit-post-menu-box-item active">시황 종목</li>
              <li class="edit-post-menu-box-item">퀀트 전략</li>
              <li class="edit-post-menu-box-item">제태크</li>
              <li class="edit-post-menu-box-item">아몰랑</li>
              <li class="edit-post-menu-box-item">아몰랑2</li>
            </ul>
          </div>
          <input
            type="text"
            name="title"
            placeholder="제목"
            class="edit-post-input"
          />
          <div class="edit-post-title-length">0 / 50</div>

          <h3>내용</h3>
          <textarea class="edit-post-input" maxlength="2000" placeholder="내용">
내용내용내용내용내용내용내용내용내용내용내용내용</textarea
          >
          <div class="edit-post-description-length">0 / 50</div>

          <ul class="edit-post-photo-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <ul v-if="deleteShow" class="edit-delete">
          <li>
            작성하신 모든 내용이 삭제 됩니다.<br />
            계속 하시겠습니까?
          </li>
          <li>확인</li>
          <li>취소</li>
        </ul>

        <div v-if="commentShow" class="edit-comment">
          <h2 class="edit-comment-title flex-between">
            글쓰기
            <img src="" alt="X" />
          </h2>
          <input
            type="text"
            name="title"
            placeholder="댓글을 입력해주세요"
            class="edit-comment-input"
          />
          <div class="edit-comment-title-length">0 / 200</div>
          <ul class="edit-comment-photo-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
        { id: 0, text: '내 의견', isActive: true },
        { id: 1, text: '댓글', isActive: false },
      ],
      tab: 0,
      editShow: false,
      deleteShow: false,
      commentShow: false,
      editListShow: true,
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

    openEditModal(id) {
      this.isEditShow = true
    },

    openSetEdit(type, id) {
      this.editListShow = false
      if (type === 'edit' && id) this.editShow = true

      if (type === 'delete' && id) this.deleteShow = true

      if (type === 'comment' && id) this.commentShow = true
    },
  },
}
</script>

<style lang="scss" scoped>
.posting {
  &-tab {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
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
      color: #222;
      position: relative;
    }
    .active::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -1.5px;
      width: 95%;
      left: 50%;
      transform: translateX(-50%);
      height: 2px;
      background-color: #222;
    }
  }
}

// 리스트 컴포넌트
.posting-list,
.comment-list {
  &-box {
    padding: 24px 4.4444444%;
    border-bottom: 1px solid #f1f1f1;
    &-date {
      color: #aaa;
      text-align: left;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 12px;
      font-weight: 400;
      line-height: 100%; /* 12px */
      letter-spacing: -0.24px;
      margin-bottom: 11px;
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

    &-status {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
      span {
        color: #aaa;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.24px;
        margin-right: 14px;
      }
      span:last-child {
        margin-right: 0;
      }
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
    &-add-view {
      color: #aaa;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 14px;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: -0.28px;
      display: none;
      margin-top: 14px;
    }
    &-add-view.show {
      display: block;
    }
  }
}

.edit {
  &-modal {
    padding: 40px 24px;
    width: 100%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    height: 221px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    &-item {
      color: #666;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
      height: 50px;
    }
  }

  // 글쓰기
  &-post,
  &-comment {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 38px 24px 60px;
    background-color: #fff;
    max-height: 90vh;
    overflow-y: scroll;
    &-title {
      color: $main-font-color;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    &-menu {
      position: relative;
      width: 100%;
      height: 42px;
      margin-bottom: 40px;
      &-box {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        position: absolute;
        &-item {
          text-align: center;
          flex-shrink: 0;
          flex-basis: 90px;
          height: 42px;
          line-height: 42px;
          border-radius: 10px;
          border: 1px solid #e8e8e8;
          color: #999;
          margin-right: 8px;
          font-size: 14px;
        }
        .active {
          color: #4a4ee7;
          border: 1px solid #4a4ee7;
        }
      }
    }
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
    h3 {
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

  // 삭제하기
  &-delete {
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
}
</style>
