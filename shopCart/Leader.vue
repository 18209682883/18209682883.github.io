<template>
    <div class="leader">
        <header>
            <van-icon name="hot" />
            <van-search v-model="value" placeholder="请输入搜索关键词" @click="$router.push('/home/search')"/>
            <van-icon name="chat" />
        </header>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            
        </van-pull-refresh>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            value:'',
            count: 0,
            isLoading: false,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
         },
    }
};
</script>

<style scoped>
    .leader{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        display: flex;
        align-items: center;
        height: 54px;
        justify-content: space-around;
        background: chocolate;
    }
    header .van-search{
        width: 80%;
        background: chocolate;
    }
    .van-icon{
        font-size: 25px;
        color: #fff;
    }
    .van-pull-refresh{
    flex: 1;
    height: 100%;
    }
</style>
