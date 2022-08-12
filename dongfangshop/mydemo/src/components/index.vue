<!-- 组件的模板,模板要有一个id -->
<template id="index">
    <main>
        <div class="iheader">
            <div class="top">
                <div class="iico">
                    <img src="../assets/images/favico.png" alt="">
                </div>
                <div class="search">
                    <div class="input">
                        <input type="text" placeholder="五五购物节">
                    </div>
                    <span>
                        <img src="../assets/images/search.png" alt="">
                    </span>
                </div>
                <div class="news">
                    <a href=""><img src="../assets/images/new.png" alt=""></a>
                    <span><img src="../assets/images/yousj.png" alt=""></span>
                </div>
            </div>
        </div>
        <div class="allmenu">
            <div class="menu">
                <div>推荐</div>
                <div><img src="../assets/images/5d8dba8f-c521-4a82-aaff-79bd43e712ba.png" alt=""></div>
                <div>TV直播</div>
                <div>团购</div>
                <div>全球购</div>
                <div>逛好店</div>
                <div>生活美食</div>
            </div>
        </div>
        <div class="zhixiang">

        </div>
        <div class="nav">
            <div class="shu"></div>
            <div class="jiantou">
                <img src="../assets/images/jiantou.png" alt="">
            </div>
        </div>
        <div class="menus">
            <h3>全部节目</h3>
            <div class="all">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="lunbo">
            <div class="pic">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img src="../assets/images/83b2f849-ffba-4aa3-a02a-7c1d2da70c0c.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item><img src="../assets/images/83b2f849-ffba-4aa3-a02a-7c1d2da70c0c.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item><img src="../assets/images/83b2f849-ffba-4aa3-a02a-7c1d2da70c0c.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item><img src="../assets/images/83b2f849-ffba-4aa3-a02a-7c1d2da70c0c.jpg" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="five">
            <div>
                <a href="">
                    <img src="../assets/images/24fdb8c4-a56c-4d73-8b35-4e107a3165f5.png" alt="">
                </a>
                <p>百万补贴</p>
            </div>
            <div>
                <a href="">
                    <img src="../assets/images/24fdb8c4-a56c-4d73-8b35-4e107a3165f5.png" alt="">
                </a>
                <p>百万补贴</p>
            </div>
            <div>
                <a href="">
                    <img src="../assets/images/24fdb8c4-a56c-4d73-8b35-4e107a3165f5.png" alt="">
                </a>
                <p>百万补贴</p>
            </div>
            <div>
                <a href="">
                    <img src="../assets/images/24fdb8c4-a56c-4d73-8b35-4e107a3165f5.png" alt="">
                </a>
                <p>百万补贴</p>
            </div>
            <div>
                <a href="">
                    <img src="../assets/images/24fdb8c4-a56c-4d73-8b35-4e107a3165f5.png" alt="">
                </a>
                <p>百万补贴</p>
            </div>
        </div>
        <div class="count">
            <div class="zheko">
                <div class="left"></div>
                <div class="right">
                    <div>
                        <a href=""><img src="../assets/images/15218261L.jpg" alt=""></a>
                        <span><img src="../assets/images/b8a0ae9a-f218-4c86-b44b-20be0bf5ae48.png" alt=""></span>
                        <span>￥ 137</span>
                    </div>
                    <div>
                        <a href=""><img src="../assets/images/main_1639633463494_809L.jpg" alt=""></a>
                        <span><img src="../assets/images/b8a0ae9a-f218-4c86-b44b-20be0bf5ae48.png" alt=""></span>
                        <span>￥ 137</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="taocan">
            <div class="gg">
                <div class="one">   
                        <img class="h" src="../assets/images/4b08d517-760c-4b87-95eb-15b559128e4a.png" alt="">
                    <div class="c">
                        <div class="cl">
                                <img class="da" src="../assets/images/b7e566f5-5ed5-4ecf-8103-ab4a6e9625ae.png" alt="">
                                <img class="xiao" src="../assets/images/2ff16919-e17c-47b4-bd05-2a8e6bfe517d.jpg" alt="">  
                                
                        </div>
                        <div class="cr">
                              <img class="da" src="../assets/images/cb32c589-bd52-44c7-84f4-c4bf53949736.png" alt="">
                              <img class='xiao' src="../assets/images/8ee8b28d-24c6-45af-b52c-1b8a8fe340a5.jpg" alt="">
                              
                        </div>
                    </div>
                </div>
                <div class="two">
                        <img class="h" src="../assets/images/d0454009-f36d-4798-a6a6-3f9ca9947ada.png" alt="">
                    <div class="c">
                        <div class="cl">
                                <img class="s" src="../assets/images/080aa1a7-abef-444d-aa0f-d315b9f2e7c9.jpg" alt="">
                                <img class="x" src="../assets/images/21b047c3-8143-44d8-be07-4a0f4ed2ad14.png" alt="">
                        </div>
                        <div class="cr">
                                <img class="s" src="../assets/images/783da8df-4c39-4aee-9c75-a65eaac2694b.jpg" alt="">
                                <img class="x" src="../assets/images/c4dbcb1b-4013-4dd3-8b3f-93775a875f5b.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="two">
                        <img class="h" src="../assets/images/86476bf5-e4cb-4f83-b28f-3104d83bb9c3.png" alt="">
                    <div class="c">
                        <div class="cl">
                                <img class="s" src="../assets/images/6c452a2a-0644-4d1a-b793-13aa0dc9c104.jpg" alt="">
                                <img class="x" src="../assets/images/c23693af-222c-467a-8a28-3c717fd7c2b3.png" alt="">
                        </div>
                        <div class="cr">
                                <img class="s" src="../assets/images/a766d342-d830-44dc-b228-fd555a47438b.jpg" alt="">
                                <img class="x" src="../assets/images/546139b3-7f9b-4f8f-a398-1f849b67ae37.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="two">
                        <img class="h" src="../assets/images/d0454009-f36d-4798-a6a6-3f9ca9947ada.png" alt="">
                    <div class="c">
                        <div class="cl">
                                <img  src="../assets/images/c29fefc1-d454-4544-ae95-6582f657bbc3.jpg" alt="">
                                <img  src="../assets/images/df1527a1-f952-4ba0-864e-caae3f07f51e.png" alt="">
                        </div>
                        <div class="cr">
                                <img src="../assets/images/9da1b62d-76af-4bfb-909c-6bfe5c80ab00.jpg" alt="">
                                <img src="../assets/images/36e8a5d3-878a-4b91-93bb-a4402eb23eb8.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="argue">
            <div class="arc">
                <div class="title">
                    <img src="../assets/images/790c4301-f73b-4350-a272-3763e1fcad7d.png" alt="">
                </div>
                <div class="cen">
                    <div>
                        <img src="../assets/images/main_1657763875703_648L.jpg" alt="">
                        <p class="xian">￥ 118</p>
                        <p class="yuan">188</p>
                    </div>
                    <div>
                        <img src="../assets/images/main_1657763875703_648L.jpg" alt="">
                        <p class="xian">￥ 118</p>
                        <p class="yuan">188</p>
                    </div>
                    <div>
                        <img src="../assets/images/main_1657763875703_648L.jpg" alt="">
                        <p class="xian">￥ 118</p>
                        <p class="yuan">188</p>
                    </div>
                    <div>
                        <img src="../assets/images/main_1657763875703_648L.jpg" alt="">
                        <p class="xian">￥ 118</p>
                        <p class="yuan">188</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="things">
            <div class="give">
                <img src="../assets/images/f18ad5d6-ee7d-4fa5-9b25-52afbbc12a9b.png" alt="">
            </div>
            <div class="list">
                <div class="moban">
                    <div class="listh">
                         <!-- <router-link to="/index">首页</router-link> -->
                <!-- <router-link><p>返回</p></router-link> -->
                <!-- <p><router-link  to="/index">返回</router-link></p> -->
                        
                        <router-link  to="/list"><img src="../assets/images/15194966L.jpg" alt=""></router-link>
                    </div>
                    <div class="descri">
                        <div class="wenzi">
                            <p>西区老大房 烘培月饼鲜肉4盒组(鲜肉8只*4盒)[暖心选]哈哈哈哈哈哈哈哈哈</p>
                        </div>
                        <div class="zhong">
                            <div class="left">
                                ￥
                                <span class="price">119</span>
                                <span class="zhe">6.8折</span>
                            </div>
                            <div class="right">
                                <img src="../assets/images/tuangou.png" alt="">
                            </div>
                        </div>
                        <div class="foot">
                            <div class="leixing">
                                <div>直降</div>
                                <div>团购</div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="moban" v-for="(item,index) in list" :key="index">
                    <div class="listh">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="descri">
                        <div class="wenzi">
                            <p>{{item.title}}</p>
                        </div>
                        <div class="zhong">
                            <div class="left">
                                ￥
                                <span class="price">{{item.price}}</span>
                                <span class="zhe">{{item.count}}</span>
                            </div>
                            <div class="right">
                                <img src="../assets/images/tuangou.png" alt="">
                            </div>
                        </div>
                        <div class="foot">
                            <div class="leixing">
                                <div>直降</div>
                                <div>团购</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="test">
                 <router-link to="/list">列表页</router-link>
                 <router-link to="/detail">详情页</router-link>
        </div>
    </main>
</template>

  <style scoped>
  main {
      background: rgb(241, 242, 243)
  }
  
  .iheader {
      width: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      height: 45px;
      background: rgb(216, 28, 37);
      z-index: 10000;
  }
  
  .iheader .top {
      padding: 2vw 3vw;  
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .iheader .iico img {
      width: 30px;
      height: 30px;
  }
  
  .iheader .top .search {
      width: 242.6px;
      height: 30px;
      margin: 0px 5px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
  }
  
  .iheader .search .input {
      width: 206.6px;
      height: 20px;
      margin: 0px 5px;
  }
  
  .iheader .top .input input {
      width: 206.6px;
      height: 20px;
      border: none;
  }
  
  .iheader .top .input input::placeholder {
      font-size: 13px;
  }
  
  .iheader .top .search span {
      margin-top: 3px;
      position: absolute;
      right: 5px;
  }
  
  .iheader .top .input span img {
      width: 16px;
      height: 16px;
  }
  
  .iheader .news {
      width: 50px;
      height: 30px;
      margin-right: 2vw;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .iheader .news a img {
      width: 26px;
      height: 25.6px;
  }
  
  .iheader .news span img {
      width: 22px;
      height: 22px;
      margin-left: 3px;
  }
  
  .allmenu {
      width: 100%;
      height: 44px;
      background: rgb(216, 28, 37);
      position: fixed;
      top: 44px;
      left: 0px;
      display: flex;
      align-items: center;
      z-index: 99;
  }
  
  .allmenu .menu {
      padding: 0px 5px;
      display: flex;
      flex-wrap: nowrap;
  }
  
  .allmenu .menu div:nth-of-type(2) img {
      width: 56.13px;
      height: 19.76px;
  }
  
  .allmenu .menu div {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
      padding: 0px 10px;
      display: flex;
      flex: 1 0 auto;
      align-items: center;
  }
  
  .zhixiang {
      width: 21px;
      height: 6px;
      color: #fff;
  }
  
  .nav {
      width: 15%;
      height: 42px;
      background: rgb(216, 28, 37);
      position: fixed;
      top: 44px;
      right: 0px;
      border: 1px solid rgb(216, 28, 37);
      z-index: 1001;
      display: flex;
      align-items: center;
      flex-direction: row;
      /* justify-content: center; */
  }
  
  .nav .shu {
      width: 2px;
      height: 18px;
      background: #fff;
  }
  
  .nav .jiantou {
      margin-left: 15px;
  }
  
  .nav .jiantou img {
      width: 20px;
      height: 20px;
  }
  
  .menus {
      padding: 0px 5px;
      background: #d81c25;
      z-index: 1000;
  }
  
  .lunbo {
     width: 100%;
      background: #d81c25;
      margin-top: 57px;
  }
   .pic{
     padding: 0px 10px;
   }
  .lunbo {
   height: 41vw;
      overflow: hidden;
  }
  
  .five {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px 0px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
  }
  
  .five div {
      width: 20%;
      text-align: center;
  }
  
  .five div img {
      width: 54px;
      height: 54px;
  }
  
  .five div p {
      color: #2c3e50;
      font-size: 13px;
      font-weight: 700;
      text-align: center;
  }
  
  .count {
      width: 100%;
      height: 151.11px;
      margin-bottom: 10px;
  }
  
  .count .zheko {
      width: 100%;
      height: 141.38px;
      padding: 0px 10px 10px;
      background-image: url('../assets/images/01079c3a-86c6-477e-88c9-c3b5eb8a1585.png');
      background-size: 100% 100%;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .count .zheko .left {
      width: 50%;
      height: 112.15px;
  }
  
  .count .zheko .right {
    width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .zheko .right a img {
      width: 78.08px;
      height: 78.08px;
  }
  
  .zheko .right div {
      width: 50%;
      height: 123px;
      display: flex;
      flex-direction: column;
      background: #fff;
      margin-right: 15px;
      border-radius: 5px;
      text-align: center;
  }
  
  .count .zheko .right span {
      text-align: center;
  }
  
  .count .zheko .right span img {
      width: 46.84px;
      height: 15.61px;
  }
  
  .zheko .right span {
      text-align: center;
      color: #f40c17;
      display: block;
      font-size: 14px;
      font-weight: 900;
  }
  
  .taocan {
      width: 100%;
  }
  
  .taocan .gg {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
  }
  
  .taocan .one {
    display: flex;
    flex-direction: column;
      width: 50%;
      height: 46.64vw;
      background: #fff;
  }
  
  .taocan .h{
      width: 100%;
  }
  
  .taocan .c {
      width: 100%;
      display: flex;
  }
  .taocan .cl {
    width: 50%;
    position: relative;
  }
  .taocan .cr {
    width: 50%;
      position: relative;
  }
  .taocan .cl .da{
      width: 100%;
  }
  .taocan .cl .xiao{
      width: 97%;
      position: absolute;
      top: 6vw;
      left: 0.5vw;
      border-radius: 10px;
  }
     .taocan .cr .da{
      width: 100%;
  }
  .taocan .cr .xiao {
    width: 94%;
      position: absolute;
      top: 6vw;
      left: 0.5vw;
      border-radius: 10px;
  }
  .taocan .two {
      width: 50%;
      height: 46.64vw;
      background: #fff;
  }
   .taocan .two .h{
      width: 100%; 
  }
   .taocan .two .c{
    width: 100%;
   }
   .taocan .two .cl{
    width: 50%;
    display: flex;
    flex-direction: column;
   }
    .taocan .two .cr{
    width: 50%;
    display: flex;
    flex-direction: column;
   }
   .taocan .two .cl img{
    width: 100%;
   }
  .taocan .two .cr img{
    width: 100%;
   }

  .argue {
      width: 100%;
  }
  
  .argue .arc {
      padding: 0px 10px;
      background: url('../assets/images/73c09af7-144b-4763-b56a-039cd58931d8.jpg');
      background-size: 100% 100%;
  }
  
  .argue .title {
      display: flex;
      flex-direction: row-reverse;
      padding-top: 20px;
  }
  
  .argue .title img {
      width: 36%;
  }
  .argue .cen {
    width: 100%;
      margin-top: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .argue .cen div {
     width: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 3px;
      background: #fff;
  }
  .argue .cen div img {
      width: 100%; 
  }
  
  .argue .cen div .xian {
      color: #f40c17;
      font-size: .4rem;
      text-align: center;
      line-height: .42666667rem;
      font-weight: 700;
      font-family: DIN-Medium !important;
  }
  
  .argue .cen div .yuan {
      color: #bbb;
      margin-top: 7px;
      margin-bottom: 5px;
      text-align: center;
      font-size: .26666667rem;
      line-height: .37333333rem;
      min-height: 0.37333333rem;
      text-decoration: line-through;
  }
  
  .things {
      width: 100%;
  }
  .things .give {
      padding: 0px 10px;
      text-align: center;
  }
  
  .things .give img {
      width: 38%;
  }
  .things .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .things .list .moban{
    width: 50%;
  }
  .things .list .listh img{
      width: 100%;
  }
  
  .things .list .descri {
    width: 100%;
    background: #fff;
  }
  .things .descri .wenzi{
    width: 95%;
    margin-left: 2vw;
  }
   .things .descri .wenzi p{
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
  .things .zhong{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .things .left{
    color: #f40c17;
    margin-left: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .things .left .price{
    color: #f40c17;
    font-size: 5vw;
    font-weight: 600;
  }
  .things .left .zhe{
    background-color: #f96565;
    font-size: 10px;
    border-radius: 2px;
    margin-left: 18px;
    display: block;
    color: #fff;
    padding: 1px 3px 0 3px;
    height: 14px;
    line-height: 14px;
  }
  .things .right{
    width: 12%;
    margin-right: 3vw;
  }
  .things .right img{
    width: 100%;
   
  }
  
  .things .foot{
    width: 100%;
    margin: 5px 0px;
  }
   .things .foot .leixing{
    display: flex;
    flex-direction: row;
   }
  .things .foot .leixing div{
    width:16%;
    padding: 0 2px;
    height: 15px;
    margin-left: 5px;
    background: #fff;
    border: 1px solid #f26459;
    border-radius: 2px;
    font-family: PingFangSC-Regular;
    font-size: 11px;
    color: #f40c17;
    text-align: center;
    line-height: 15px;
    font-weight: 400;
  }
  .test {
      width: 100%;
      height: 60px;
      background: #d81c25;
  }
  </style>

  <style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    overflow: hidden;
}

.my-swipe .van-swipe-item img {
    width: 100%;
 
}

.pic .van-swipe__indicators {
    bottom: 80px;
}
</style>

  <script>
// import $ from 'jquery' ;
// $(function () {  
//     alert(123);  
//  }); 
// export default {
// };



export default {
    data() {
        return {
            images: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
            list:[{
                    src:'img/main_1657679195824_166L.jpg',
                    title:'恐龙 全棉磨绒四件套反季买赠超值组',
                    price:'360',
                    count:'8.6折'
                   },
                   {
                     src:'img/main_1616382516289_427L.jpg',
                     title:' 通惠 东北紫灵芝片50克*10袋[暖心选]',
                     price:'145',
                     count:'7.3折'
                   }
            ]
        };
    },
};

//   export default {
//            data(){
//           return {
            
//                liebiao:[{
//                          src:'/img/sj02.png',
//                          title:'宝石',
//                          one:'高',
//                          two:'给',
//                          three:'发',
//                          four:'放',
                        
//                }]
//           }
//      }
//     }
</script>