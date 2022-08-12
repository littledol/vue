<template id="list">
    <main>
        <header class="lheader">
            <div class="zuo">
                <img src="../../src/assets/images/back.png" alt="">
                <!-- <router-link to="/index">首页</router-link> -->
                <!-- <router-link><p>返回</p></router-link> -->
                <p><router-link  to="/index">返回</router-link></p>
            </div>
            <div class="search">
                <van-search v-model="value" shape="round" background="#fff" placeholder="月饼" />
            </div>
            <img class="dhh" src="../../src/assets/images/dhh.png" alt="">
        </header>
        <div class="bq">
            <van-tabs v-model="active">
                <van-tab title="综合">
                    <section>
                        <div class="one">
                            <div class="le">
                                <img src="../../src/assets/images/15194966L.jpg" alt="">
                                <div class="p">团购进行中</div>
                            </div>
                            <div class="ri">
                                <div class="s">
                                    <p>西区老大房 烘培月饼鲜肉4盒组(鲜肉8只*4盒)[暖心选]哈哈哈哈哈哈哈哈哈</p>
                                </div>
                                <div class="x">
                                    <span class="price">￥119</span>
                                    <div class="leixing">
                                        <div class="zhijiang">直降</div>
                                        <div class="tuang">团购</div>
                                        <div class="surp">商城</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div v-for="(item,index) in list" :key="index" class="one">
                            <div class="le">
                                <img :src="item.src" alt="">
                                <div class="p">{{item.one}}</div>
                            </div>
                            <div class="ri">
                                <div class="s">
                                    <p>{{item.title}}</p>
                                </div>
                                <div class="x">
                                    <span class="price">{{item.price}}</span>
                                    <div class="leixing">
                                        <div class="zhijiang">{{item.two}}</div>
                                        <div class="tuang">{{item.three}}</div>
                                        <div class="surp">{{item.four}}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </van-tab>
                <van-tab title="销量">内容 2</van-tab>
                <van-tab title="新品">内容 3</van-tab>
                <van-tab title="价格">内容 4</van-tab>
                <van-tab title="筛选">内容 4</van-tab>
            </van-tabs>

        </div>
    </main>
</template>

<style>
.van-search {
    width: 120%;
}

.van-search input::placeholder {
    color: #cb5151;
}

.van-search .van-cell--borderless van-field {
    position: relative;
}

.van-search .van-icon-search {
    position: absolute;
    right: 7px;
}
</style>
<style scoped>
.lheader {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
}

.lheader .zuo {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.lheader .zuo img {
    width: 48%;
}

.lheader .zuo p {
    width: 50%;
    color: #414141;
    font-size: 3.4vw;
}

.lheader .dhh {
    margin-left: 17vw;
    width: 6%;
}

.bq {
    width: 100%;
}

section {
    width: 100%;
}

section .one {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1vw 0vw;
    /* align-items: center; */
}

.one .le {
    width: 30%;
    display: flex;
    flex-direction: column;
}

.one .le img {
    width: 100%;
}

.one .le .p {
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 3vw;
    background: rgba(226, 107, 102, .9);
}

.one .ri {
    width: 70%;
    margin-top: 1vw;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
}

.one .ri .s {
    padding: 0vw 4vw;
}

.one .ri .s p {
    color: #414141;
    font-size: 3.5vw;
    /* 多余部分出现点点 */
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.one .ri .x {
    width: 100%;
    margin-top: 6vw;
}

.one .ri .x .price {
    color: #f40c17;
    font-size: 5vw;
    font-weight: 600;
    margin-left: 2vw;
}

.ri .x .leixing {
    width: 100%;
    margin-top: 4vw;
    margin-left: 2vw;
    display: flex;
    flex-wrap: wrap;
}

.x .leixing .zhijiang {
    width: 10%;
    color: red;
    padding: 0 2vw;
    font-size: 1.9vw;
    border-radius: 1vw;
    border: 1px solid #d81c25;
}

.x .leixing .tuang {
    width: 10%;
    color: #fff;
    padding: 0 2vw;
    margin: 0 1vw;
    font-size: 1.9vw;
    border-radius: 1vw;
    background-color: #ff6e2a;
    border: 1px solid #ff6e2a;
}
.x .leixing .surp {
    width: 10%;
    color: #fff;
    padding: 0 2vw;
    margin: 0 1vw;
    font-size: 1.9vw;
    border-radius: 1vw;
    background-color: #ff0000;
    border: 1px solid #ff0000;
}
</style>

<script>
export default {
    data() {
        return {
            active: 0,
            list:[
                {
                    src:'img/15195312-L.jpg',
                    one:'疯狂抢购中',
                    title:'酥软月饼好吃的很，快阿里来抢购吧哈哈哈而且有很多料快了快了炫起来verydelicure',
                    price:'￥56',
                    two:'团购',
                    three:'折扣',
                    four:'超市'
                },
                 {
                    src:'img/main_1655440285689_114L.jpg',
                    one:'买一送一中',
                    title:'酥软月饼好吃的很，快阿里来抢购吧哈哈哈而且有很多料快了快了炫起来verydelicure',
                    price:'￥56',
                    two:'拼团',
                    three:'优惠',
                    four:'商城'
                }

            ]
        };
    },
};

</script>