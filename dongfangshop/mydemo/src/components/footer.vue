<template id="footer">
    <main>
        <!-- 底部导航栏 -->
        <!-- 底部选项渲染在这里 -->
        <router-view></router-view>
        <ul class="footer">
            <li>
                <p><img src="../../public/img/index.png" alt=""></p>
                <router-link to="/index">首页</router-link>
            </li>
            <li>
                <p><img src="../../public/img/sort.png" alt=""></p>
                <router-link to="/sort">分类</router-link>
            </li>
            <li>
                <p><img src="../../public/img/6fd52a48-e659-4169-9dc6-8d00e5f5621a.png" alt=""></p>
                <router-link to="/center"></router-link>
            </li>
            <li>
               <p> <img src="../../public/img/cart.png" alt=""></p>
                <router-link to="/cart">购物车</router-link>
            </li>
            <li>
               <p> <img src="../../public/img/person.png" alt=""></p>
                <router-link to="/person">我的</router-link>
            </li>
        </ul>

    </main>
</template>
    <!-- 全局样式 -->
    <style>
            *{
                margin: 0px;
                padding: 0px;
                list-style: none;
            }
    </style>
      <!-- 用scoped变成局部变量 -->
    <style scoped>
     .footer{
         width: 100%;
         background: #fff;
         position: fixed;
         bottom: 0px;
         left: 0px; 
     }
     .footer li{
         width: 20%;
         height: 40px;
         float: left;
         text-align: center;
         display: flex;
         flex-direction: column ;
     }
     .footer li p img{
        width: 20px;
        height: 20px;
     }
     .footer li p{
        width: 100%;
        height: 20px;
        text-align: center;
     }
      .footer li:nth-of-type(3){
        position: relative;
      }
     .footer li:nth-of-type(3) p{
        width: 100%;
        height: 100%;
     }
      .footer li:nth-of-type(3) p img{
        width: 70px;
        height: 70px;
        position: absolute;
        left: 5px;
        bottom: 0px;
     }
     .footer li a{
        color: #212121;
         font-size: 14px;
         font-family: '微软雅黑';
         text-decoration: none;
     }
     .footer .router-link-active{
        color: red;
     }
    </style>

    <script>
        // import $ from 'jquery';

        //     $('li').mouseenter(function(){
        //         console.log('aa')
        //          $(this).children('p').children('img').attr('src','../../public/img/indexred.png')
        //     })

            
        //     export default {
        //     };
    
    </script>

