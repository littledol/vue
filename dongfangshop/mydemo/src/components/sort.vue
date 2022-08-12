<!-- 组件的模板,模板要有一个id -->
<template id="sort">
    <main>
        <header class="sheader">
            <van-search v-model="value" shape="round" background="#fff" placeholder="搜索关键字/货号" />
            <img src="../assets/images/ne.png" alt="">
        </header>
        <section>
            <van-tree-select height="80vh" :items="items" :main-active-index.sync="active">
                <template #content>

                    <div class="moban" v-if="active === 0">
                        <div v-for="(item, index) in lists" :key="index" class="one">
                            <p>{{ item.title }}</p>
                            <ul>
                                <li v-for="(item, index) in item.shop" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{ item.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="moban" v-if="active === 1">
                        <div v-for="(item, index) in listtwo" :key="index" class="one">
                            <p>{{ item.title }}</p>
                            <ul>
                                <li v-for="(item, index) in item.shop" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{ item.name }}</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="moban" v-if="active === 2">
                        <div v-for="(item, index) in listthree" :key="index" class="one">
                            <p>{{ item.title }}</p>
                            <ul>
                                <li v-for="(item, index) in item.shop" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{ item.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="moban" v-if="active === 3">
                         <div v-for="(item, index) in listfour" :key="index" class="one">
                            <p>{{ item.title }}</p>
                            <ul>
                                <li v-for="(item, index) in item.shop" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{ item.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </van-tree-select>
        </section>


    </main>
</template>

<style>
.van-search {
    width: 90%;
}

.van-search input::placeholder {
    color: #cb5151;
    /* font-size: 15px; */
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
.sheader {
    width: 100%;
    display: flex;
    align-items: center;
}

.sheader img {
    width: 5%;
    height: 5%;
}

section {
    width: 100%;
}

.moban {
    width: 100%;
}

.moban ul {
    display: flex;
    flex-wrap: wrap;
}

.moban .s {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.moban .s .title {
    color: #414141;
    font-size: 3.5vw;
    line-height: 6vw;
    margin-left: 5vw;
}

.moban .s span {
    font-size: 3.6vw;
    margin-right: 5vw;
}

.moban ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
}

.moban ul li img {
    width: 100%;
}

.moban ul li .shop {
    color: #414141;
    font-size: 2.6vw;
    line-height: 6vw;
}
</style>

<!-- <script src="../../src/assets/js/vue"></script> 
<script src="js/vue.js"></script> -->
<script>

export default {
    data() {
        return {

            active: 1,
            items: [
                { text: '全球购' },
                { text: '食品饮料' },
                { text: '服饰鞋包' },
                { text: '滋补保健' },
                { text: '美妆个护' },
                { text: '家电数码' },
                { text: '家具家装' },
                { text: '家具厨具' },
                { text: '珠宝/收藏' },
                { text: '婴宠文教' },
                { text: '汽车/户外' },
                { text: '生活/旅行' },
            ],
            lists: [
                {
                    title: '美容彩妆',
                    shop: [
                        {
                            src: 'img/613dc01d-efa3-4ef5-8c74-2799129ed917.jpg',
                            name: '爽肤水/化妆水',
                        },
                        {
                            src: 'img/787dcf45-2714-4229-8441-37ee1efb1151.jpg',
                            name: '面膜',
                        },
                        {
                            src: 'img/2a54463a-84b1-4724-a9b1-496946c46d9e.jpg',
                            name: '卸妆洁面',
                        },
                        {
                            src: 'img/2278748d-c778-400f-a836-f02a726206d1.jpg',
                            name: '乳霜洁面',
                        },
                        {
                            src: 'img/3ee1df33-0979-4b53-88d3-e9900352c10b.jpg',
                            name: '精华露',
                        },
                        {
                            src: 'img/c6cba246-f0ec-4621-b81e-4097b1e2e1f8.jpg',
                            name: '身体护理',
                        },
                        {
                            src: 'img/2d09b7ec-e7bd-4374-bea8-0898c4d92319.jpg',
                            name: '彩妆防晒',
                        },
                        {
                            src: 'img/3a1c77da-f6d4-4df0-a468-82676299df8d.jpg',
                            name: '美容/美发工具',
                        },
                    ]
                },
                {
                    title: '个人洗护',
                    shop: [
                        {
                            src: 'img/613dc01d-efa3-4ef5-8c74-2799129ed917.jpg',
                            name: '洗发水',
                        },
                        {
                            src: 'img/e37ab842-868b-4cc9-a860-e82c3a6222f4.jpg',
                            name: '护发素',
                        },
                        {
                            src: 'img/53b61395-06f0-4ba4-859d-5ee335ccab3d.jpg',
                            name: '沐浴露',
                        },
                        {
                            src: 'img/29abb1c7-a66a-4230-90e6-d86e2b6810c1.jpg',
                            name: '磨砂/浴盐',
                        },
                    ]
                },
            ],


            listtwo: [
                {
                    title: '肉类/禽蛋',
                    shop: [
                        {
                            src: 'img/yu.jpg',
                            name: '海鲜水产',
                        },
                        {
                            src: 'img/jitui.jpg',
                            name: '禽类',
                        },
                        {
                            src: 'img/feiniu.jpg',
                            name: '肉类',
                        },
                    ]
                },
                {
                    title: '乳品',
                    shop: [
                        {
                            src: 'img/80723a86-b13b-4e27-9cfc-86189e4f3720.jpg',
                            name: '奶粉',
                        },
                        {
                            src: 'img/e37ab842-868b-4cc9-a860-e82c3a6222f4.jpg',
                            name: '牛奶',
                        },
                        {
                            src: 'img/53b61395-06f0-4ba4-859d-5ee335ccab3d.jpg',
                            name: '酸奶/乳制品',
                        }
                    ]
                },


            ],


            listthree: [
                {
                    title: '肉类/禽蛋',
                    shop: [
                        {
                            src: 'img/yu.jpg',
                            name: '海鲜水产',
                        },
                    ]
                },
                {
                    title: '乳品',
                    shop: [
                        {
                            src: 'img/80723a86-b13b-4e27-9cfc-86189e4f3720.jpg',
                            name: '奶粉',
                        },
                    ]
                },


            ],

        };
    },
};

</script>




 

