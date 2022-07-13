<template>
    <div>

    </div>
</template>

<script>
    export default {

        data() {
            return {

                // 현재 페이지
                thisPageNum : 1,

                // 한 페이지에 보여줄 데이터
                onePageData: 16,
                
                // 빈 배열
                pageList : [],
                
            }
        },

        computed: {
            startPage() {
                return ((this.thisPageNum - 1) * this.onePageData);
            },

            endPage() {
                return (this.startPage + this.onePageData);
            },

            thisPage() {
                return Math.ceil(this.pageList.length / this.onePageData);
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>