<template>
    <header>
        <nuxt-link :to="{ path: '/' }"><h1>토이</h1></nuxt-link>
        <ul>
            <li>{{ message }}</li>
            <li><button @click="changeData">워딩반전버튼</button></li>
            <li>{{ watch }}</li>
        </ul>
    </header>
</template>

<script>
    export default {
        name:'CommonGnb',
        
        data() {
            return {
                message:'감시하냐?',
                watch: '감시전',
            }
        },
        
        watch: {
            message(newVal, oldVal) {
                console.log(newVal, oldVal);
                this.watch = '감시후'
            }
        },
        
        methods: {
            changeData() {
                this.message = this.message.split('').reverse().join('');
            }
        }

    }
</script>

<style lang="scss" scoped>
    header {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        background-color: #1f80fd;
        color: #fff;
        font-weight: bold;
        box-sizing: border-box;
        padding: 0 21vw;
        justify-content: space-between;
        ul {
            list-style: none;
            display: flex;
            width: 70%;
            justify-content: space-between;
            align-items: center;
            li button {
                border: 4px solid #fff;
                color:#111;
            }
        }
    }
</style>