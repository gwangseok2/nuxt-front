
<template>
    <div>
        <h1>
            가위바위보 모션
        </h1>
        <figure id="computer-banner" :style="computedStyleObject"></figure>
    </div>
</template>

<script>
    const imgRotate = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };
    export default {

        data() {
            return {
                Img: imgRotate.가위,
                interver : null,
            }
        },
        
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.Img} 0`,
                };
            },
        },

        mounted() {
            this.interval = setInterval(() => {
                if(this.Img === imgRotate.바위) {
                    // alert('hi');
                    this.Img = imgRotate.가위
                } else if (this.Img === imgRotate.가위) {
                    this.Img = imgRotate.보
                } else if (this.Img === imgRotate.보) {
                    this.Img = imgRotate.바위
                }
            },500);
        },

        methods: {
            
        },

    }
</script>

<style scoped>
    #computer-banner {
        width: 142px;
        height: 200px;
        border: 1px solid #1f80fd;
        /* transition: all 0.5s; */
    }
</style> 