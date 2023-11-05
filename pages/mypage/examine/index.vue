<template>
  <div class="examine">
    <div class="examine-tab wrapper">
      <div
        v-for="(tab, index) in tabList"
        :key="`tab-${index}`"
        :class="{ active: tab.isActive }"
        @click="clickTab(index)"
      >
        {{ tab.text }}
      </div>
    </div>

    <template v-if="tab === 0">
      <RowList
        :rowData="dumyData"
        :message="'심사를 신청한 포트폴리오가 없습니다.'"
      />
    </template>

    <template v-if="tab === 1">
      <RowList
        :rowData="dumyData2"
        :message="'심사를 신청한 커뮤니티가 없습니다.'"
      />
    </template>
  </div>
</template>

<script>
import RowList from '@/pages/mypage/components/RowList.vue'
export default {
  components: {
    RowList,
  },
  data() {
    return {
      tabList: [
        { id: 0, text: '포트폴리오', isActive: true },
        { id: 1, text: '커뮤니티', isActive: false },
      ],
      tab: 0,
      dumyData: [
        {
          id: 0,
          rowTitle: '울트라슈퍼모맨텀 7월',
          addDate: new Date().toLocaleString(),
          buttonText: '심사 접수',
          class: 'add',
        },
        {
          id: 1,
          rowTitle: '울트라슈퍼모맨텀 8월',
          addDate: new Date().toLocaleString(),
          buttonText: '심사중',
          class: 'check',
        },
        {
          id: 2,
          rowTitle: '울트라슈퍼모맨텀 9월',
          addDate: new Date().toLocaleString(),
          buttonText: '심사 완료',
          class: 'finish',
        },
        {
          id: 3,
          rowTitle: '울트라슈퍼모맨텀 9월',
          addDate: new Date().toLocaleString(),
          buttonText: '심사요청취소',
          class: 'cancel',
        },
      ],
      dumyData2: [
        {
          id: 0,
          rowTitle: '퀀트스터디1기 ',
          addDate: new Date().toLocaleString(),
          buttonText: '심사 접수',
          class: 'add',
        },
        {
          id: 1,
          rowTitle: '퀀트스터디11기',
          addDate: new Date().toLocaleString(),
          buttonText: '심사중',
          class: 'check',
        },
        {
          id: 2,
          rowTitle: '퀀트스터디사기',
          addDate: new Date().toLocaleString(),
          buttonText: '심사 완료',
          class: 'finish',
        },
        {
          id: 3,
          rowTitle: '울트라슈퍼모맨텀 9월',
          addDate: new Date().toLocaleString(),
          buttonText: '심사요청취소',
          class: 'cancel',
        },
      ],
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
.examine {
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
</style>
