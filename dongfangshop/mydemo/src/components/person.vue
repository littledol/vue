<!-- 组件的模板,模板要有一个id -->
<template id="person">
    <main>
        <header class="pheader">
            <div class="setnew">
                <img src="../assets/images/setting.png" alt="">
                <img src="../assets/images/news.png" alt="">
            </div>
            <div class="mid">
                <div class="pic">
                    <img src="../assets/images/default_not_login_head.png" alt="">
                </div>
                <div class="log">
                    <p>
                        <a href="">登录/</a>
                        <a href="">注册</a>
                    </p>
                    <div class="sign">
                        <img src="../assets/images/cal.png" alt="">
                        <a href="">签到</a>
                    </div>
                </div>
            </div>
            <div class="vip">
                <a href="">会员俱乐部 ></a>
            </div>
        </header>
        <div class="benefit">
            <div class="beleft">
                <div class="bepic">
                    <img src="../assets/images/giftRed.png" alt="">
                </div>
                <div class="beartic">
                    <div>满件满元选礼</div>
                    <p>
                        <a href="">
                            精选商品叠加优惠专属福利
                        </a>
                    </p>
                </div>
            </div>
            <div class="beright">
                <div class="more">
                  <a href="">查看更多</a>
                </div>
            </div>
        </div>
        <div class="wallet">
          <div class="wa">
             <span>我的钱包</span>
          </div>
          <div class="llet">
            <div>
                  <a href="">0</a>
                  <a href="">积分</a>
                  <p>1分=1元</p>
            </div>
            <div>
                  <a href="">0</a>
                  <a href="">积分</a>
                  <p>1分=1元</p>
            </div>
            <div>
                  <a href="">0</a>
                  <a href="">积分</a>
                  <p>1分=1元</p>
            </div>
            <div>
                  <a href="">0</a>
                  <a href="">积分</a>
                  <p>1分=1元</p>
            </div>
          </div>
        </div>
        <div class="fuli">
           <div class="six">
            <div>
              <a href="">
                <img src="../assets/images/shoucang.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
            <div>
              <a href="">
                <img src="../assets/images/fapiao.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
            <div>
              <a href="">
                <img src="../assets/images/kefu.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
            <div>
              <a href="">
                <img src="../assets/images/activity.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
            <div>
              <a href="">
                <img src="../assets/images/bill.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
            <div>
              <a href="">
                <img src="../assets/images/advice.png" alt="">
              </a>
              <p>东东客服</p>
            </div>
           </div>
        </div>
          <div class="history">
            <span></span>
            <a href="">近一个月 浏览足迹</a>
            <span></span>
          </div>

          <div class="mind">
              <div class="tishi">
                <img src="../assets/images/yinying.png" alt="">
                <div>登录以后才能浏览近期的足迹哟</div>
                <img src="../assets/images/yinying.png" alt="">
              </div>
          </div>

          <!-- <div class="test">

          </div> -->
    </main>
</template>

<style scoped>
    main{
      background: #f1f1f3;
    }
    .pheader{
        width: 100%;
        height: 174px;
        background: url('../assets/images/header_bg.png');
        background-size: 100% 174px;
    }
    .pheader .setnew{
        padding-top: 10px;
        margin: 0% 5%;
        display: flex;
        justify-content: space-between;
    }
    .pheader .setnew img{
        width: 25px;
        height: 25px;
    }
    .pheader .mid{
        padding-top: 16px;
        margin: 0% 5%;
        height: 84px;
        display: flex;
        justify-content: flex-start;
    }
    .pheader .mid .pic{
        width: 84px;
        height: 84px;
        margin-right: 20px;
    }
     .pheader .mid .pic img{
        width: 76px;
        height: 76px;
        display: block;
        border-radius: 50%;
        border: 3px solid orange;
     }
     .pheader .mid .log a{
        color: #fff;
     }
     .pheader .mid .log p{
        margin-top: 10px;
      }
      .pheader .mid .log .sign{
        width: 62px;
        height: 22px;
        margin-top: 3px;
        background: #ed6753;
      }
     .pheader .mid .log img{
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding: 0px 5px;
     }
      .pheader .mid .log .sign a{
        font-size: 12px;
        vertical-align: middle;
      }
      .pheader .vip{
        height: 40px;
        padding: 0% 5%;
        display: flex;
        justify-content: end;
        background: rgba(0, 0, 0, 0.1);
      }
      .pheader .vip a{
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
      }
      .benefit{
        width: 100%;
        height: 66px;
        margin: 10px 0px;
        padding: 0px 16px;
        background: #fff;
        display: flex;
        justify-content: space-between;
      }
      .benefit .beleft{
        display: flex;
        justify-content: flex-start;
      }
      .benefit .beleft .bepic{
        width: 54px;
        height: 54px;
        margin-right: 10px;
      }
      .benefit .bepic img{
        width: 54px;
        height: 54px;
      }
      .benefit .beleft .beartic div{
        font-size: 16px; 
        padding-top: 10px;
        text-align: left;
      }
      .benefit .beartic p a{
        color: #666;
        font-size: 12px;
      }
      .benefit .beright{
         width: 70px;
         height: 30px;
         margin-top: 15px;
         margin-right: 30px;
      }
      .benefit .beright .more{
        width: 70px;
        height: 30px;
        text-align: center;
        border-radius: 999px;
        border-color: rgb(244, 35, 24);
        background: red;
        line-height: 27px;
      }
      .benefit .beright .more a{
        color: #fff;
        font-size: 12px;
      }
      .wallet{
        width: 100%;
        margin-bottom: 10px;
        background: #fff;

      }
      .wallet .wa{
        width: 100%;
        padding: 15px;
        border-bottom: 1px solid #ebedf0;;
      }
      .wallet .wa span{
        color: #414141;
        font-size: 13px;
        line-height: 20px;
      }
      .wallet .llet{
          display: flex;
          flex-direction: row;
      }
      .wallet .llet div{
        width: 25%;
        height: 68.6px;
        padding-top: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      .wallet .llet a{
        color: #414141;
        font-size: 13px;
        margin: 2px 0px;
      }
      .wallet .llet p{
        color: #7f7f7f;
        font-size: 13px;
      }
      .fuli{
        width: 100%;
        margin: 10px 0px;
        background: #fff;
      }
      .fuli .six{
        width: 100%;
        height: 174px;
        display: flex;
        flex-wrap: wrap;
      }
      .fuli .six div{
        width: 25%;
        height: 87px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      .fuli .six div img{
        width: 24px;
        height: 24px;
        margin-top: 10px;
      }
      .fuli .six div p{
        width: 100%;
        color: #414141;
        font-size: 12px;
        margin-top: 10px;
        display: block;
        text-align: center;
      }
      .history{
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        /* text-align: center; */
      }
      .history span{
        width: 3px;
        height: 3px;
        color: #414141;
        margin: 10px;
      }
      .history a{
        color: #414141;
        font-size: 14px;
      }

      .mind{
        width: 100%;
        height: 50px;
        background: #f1f1f3;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .mind .tishi{
        width: 251px;
        height: 21px;
        display: flex;
        align-items: center;
         justify-content: center;
      }
      .mind .tishi img{
        width: 14px;
        height: 2px;
      }
      .mind .tishi div{
        text-align: center;
        width: 168px;
        height: 21px;
        font-size: 12px;
        color: #414141;
      }

      /* .test{
        width: 100%;
        height: 60px;
      } */
</style>