
<template>
    <div class="game-wrapper">
        <h1>
            가위바위보 모션
        </h1>
        <figure id="computer-banner" :style="computedStyleObject"></figure>

        <div>
            <button @click="select('가위')">가위</button>
            <button @click="select('바위')">바위</button>
            <button @click="select('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <p>현재 점수{{ score }}점</p>
    </div>
</template>

<script>
    const imgRotate = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    }

    const computerChocie = (Img) => {
        return Object.entries(imgRotate).find(function (v) {
            return v[1] === Img;
        })[0];
    }
    export default {

        data() {
            return {
                Img: imgRotate.가위,
                interver : null,
                score:0,
                result:'',
                check:true,
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
            this.changeHand();
        },

        beforeDestroy() {
            clearInterval(this.intervel);
        },

        methods: {

            changeHand() {

                this.interval = setInterval(() => {
                if(this.Img === imgRotate.바위) {
                        // alert('hi');
                        this.Img = imgRotate.가위
                    } else if (this.Img === imgRotate.가위) {
                        this.Img = imgRotate.보
                    } else if (this.Img === imgRotate.보) {
                        this.Img = imgRotate.바위
                    }
                },100);

            },

            select(choice) {
                
                clearInterval(this.interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChocie(this.Img)];
                const diff = myScore - cpuScore;

                if (diff === 0) {
                    this.result = '비겼습니다.';
                } else if ([-1, 2].includes(diff)) {
                    this.result = '이겼습니다.';
                    this.score += 1;
                } else {
                    this.result = '졌습니다.';
                    this.score -= 1;
                }
                
                if(this.check === true) {
                    this.check = false;
                    setTimeout(() => {
                        this.changeHand();
                        this.check = true;
                    },1000);
                }
                
            }
        },


    }
</script>

<style scoped>
    #computer-banner {
        width: 142px;
        height: 200px;
        border: 1px solid #1f80fd;
        margin: 0 auto;
    }
    .game-wrapper {
        max-width: 1024px;
        margin: 0 auto;
        text-align: center;
        
    }
    button {
        width: 50px;
        background-color: #1f80fd;
        color: #fff;
        font-size:15px;
    }
</style> 