<template id="detail">
    <main>
        <header class="dheader">
            <div class="l"><img src="../../src/assets/images/zjt.png" alt=""></div>
            <div class="j">
                <div class="z"><img src="../../src/assets/images/shou.png" alt=""></div>
                <div class="y"><img src="../../src/assets/images/fen.png" alt=""></div>
            </div>
        </header>
        <div class="pic">
            <img src="../../src/assets/images/15194966L.jpg" alt="">
        </div>
        <div class="vidpic">
            <div class="huohao">货号 1519-4966</div>
            <ul>
                <li class="vi">
                    <img src="../../src/assets/images/you.png" alt="">
                    <p>视频</p>
                </li>
                <li class="pi">
                    <p>图片</p>
                </li>
            </ul>
            <div class="n">1/4</div>
        </div>
        <div class="s">
            <p>西区老大房 烘培月饼鲜肉4盒组(鲜肉8只*4盒)[暖心选]哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="shoumai">
            <div class="sle">
                <p> 距离结束仅剩：2天14小时3分 </p>
                <div class="three">
                    <span class="zhe">6.8折</span>
                    <span class="price">￥119</span>
                    <span class="yuanjia">￥176</span>
                </div>
                <div class="zjtg">
                    <div class="zhijiang">直降</div>
                    <div class="tuang">团购</div>
                </div>
            </div>
            <div class="sri">
                <p>1197人已团购</p>
            </div>
        </div>
        <div class="san">
            <div class="one">
                <span>规格:</span>
                <p>请选择 数量</p>
                <img src="../../src/assets/images/right.png" alt="">
            </div>
            <div class="one">
                <span>送至:</span>
                <p>广州市番禺区李村33号</p>
                <img src="../../src/assets/images/right.png" alt="">
            </div>
            <div class="one">
                <span>物流:</span>
                <p>预计 08月 15日 24:00 前送达</p>
                <img src="../../src/assets/images/right.png" alt="">
            </div>

        </div>

        <div class="pro">
            <div class="mb">
                <img src="../../src/assets/images/squer.png" alt="">
                <p>正品保障</p>
            </div>
            <div class="mb">
                <img src="../../src/assets/images/squer.png" alt="">
                <p>指定配送公司配送</p>
            </div>
            <div class="mb">
                <img src="../../src/assets/images/squer.png" alt="">
                <p>东东客服</p>
            </div>
            <div class="mb">
                <img src="../../src/assets/images/squer.png" alt="">
                <p>商品售出，无质量问题，不接受7天无理由退换货</p>
            </div>
        </div>

        <div class="dafen">
            <p class="l">用户评价 (5686)</p>
            <div class="ri">
                 <p class="r">99%好评</p>
                 <img src="../../src/assets/images/right.png" alt="">
            </div>
           
        </div>

        <div class="pingjia">
            
        </div>
        <div class="test">
            <h3>This is detail!</h3>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
            <van-goods-action-icon icon="star" text="已收藏" color="red" />
            <van-goods-action-icon icon="shop-o" text="店铺" badge="7" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    background-color: #efefef;
}

.dheader {
    /* width: 100%; */
    padding: 2vw 2vw;
    display: flex;
    justify-content: space-between;
}

.dheader .l {
    width: 9vw;
    height: 9vw;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
}

.dheader .l img {
    width: 90%;
    height: 90%;
}

.dheader .j {
    width: 20vw;
    height: 9vw;
    display: flex;
    justify-content: space-between;
}

.dheader .j .z {
    width: 9vw;
    height: 9vw;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.dheader .j .z img {
    width: 7vw;
    height: 7vw;
}

.dheader .j .y {
    width: 9vw;
    height: 9vw;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dheader .j .y img {
    width: 7vw;
    height: 7vw;
    text-align: center;
}

.pic {
    width: 100%;
    text-align: center;
}

.pic img {
    width: 90%;
}

.vidpic {
    padding: 3vw 3vw;
    display: flex;
    justify-content: space-between;
}

.vidpic .huohao {
    text-align: center;
    width: 27%;
    height: 5vw;
    line-height: 5vw;
    font-size: 3vw;
    border-radius: 2vw;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
}

.vidpic ul {
    width: 24%;
    display: flex;
    align-items: center;
    margin-right: 10vw;
}

.vidpic ul .vi {
    width: 55%;
    background: #fff;
    /* color: #fff; */
    font-size: 3vw;
    border-radius: 3vw;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: row;

}

.vidpic ul .vi img {
    width: 20%;
}

.vidpic ul .vi p {
    width: 60%;
}

.vidpic ul .pi {
    text-align: center;
    width: 45%;
    background: #f96565;
    color: #fff;
    font-size: 3vw;
    border-radius: 3vw;
}

.vidpic .n {
    text-align: center;
    font-size: 3.5vw;
    height: 5vw;
    line-height: 5vw;
    width: 7%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 2vw;
}

.s {
    padding: 0vw 3vw;
}

.s p {
    color: #414141;
    font-size: 4.3vw;
    /* 多余部分出现点点 */
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.shoumai {
    padding: 2vw 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.shoumai .sle {
    width: 50%;
    display: flex;
    flex-direction: column;
}

.shoumai .sle p {
    font-size: 2vw;
    color: red;
}

.sle .three{
    margin-top: 3vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vw;
}
.sle .three .zhe {
    width: 18%;
    background-color: #f96565;
    font-size: 10px;
    border-radius: 2px;
    /* margin-left: 18px; */
    display: block;
    color: #fff;
    padding: 1px 3px 0 3px;
    height: 14px;
    line-height: 14px;
}
.sle .price {
    width: 25%;
    color: #f40c17;
    font-size: 5vw;
    font-weight: 600;
}

.sle .yuanjia {
    width: 25%;
    color: #666;
    font-size: 4vw;
    text-decoration: line-through;
}
.sle .zjtg{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.sle .zjtg .zhijiang{
    width: 15%;
    color: red;
    padding: 0 2vw;
    font-size: 1.9vw;
    border-radius: 1vw;
    border: 1px solid #d81c25;
}
.sle .zjtg .tuang{
    width: 15%;
    color: #fff;
    padding: 0 2vw;
    margin: 0 2vw;
    font-size: 1.9vw;
    border-radius: 1vw;
    background-color: #ff6e2a;
    border: 1px solid #ff6e2a;
}
.shoumai .sri p{
    font-size: 2vw;
    /* color: #666; */
}
.san {
    padding: 2vw 3vw;
    margin: 2vw 0vw;
}
.san .one{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 3vw;
    border-bottom: 0.01vw solid #ebedf0;
}
.san .one span{
    width: 15%;
   font-size: 4vw;
   color: #666;
    line-height: 14vw;
}
.san .one p{
    width: 70%;
   font-size: 3.5vw;
    
}
.san .one img{
    width: 8%;
    height: 4vh;
}
.pro{
    width: 100%;
    background: #fff;
    /* display: flex; */
    /* justify-content: space-between; */
}
.pro .mb{
    padding: 3vw 3vw;
    display: flex;
    flex-wrap: wrap;
}
.pro .mb img{
    width: 5%;
}
.pro .mb p{
    margin-left: 2vw;
    font-size: 2vw;
}
.dafen {
    /* padding: 0vw 3vw; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin:3vw 0vw;
}
.dafen .l{
    font-size: 4vw;
}
.dafen .ri{
    width: 25%;
    display: flex;
    flex-direction: row;
}
.dafen .ri .r{
    font-size: 3.5vw;
}
.dafen .ri img{
    width: 34%;
    height: 6vw;
}
.test{
    width: 100%;
    height: 20vh;
}
</style>