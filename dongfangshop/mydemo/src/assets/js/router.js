// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'


// 引入组件到路由router配置中
import footer from '../../components/footer.vue'
import index from '../../components/index.vue'
import sort from '../../components/sort.vue'
import hot from '../../components/hot.vue'
import cart from '../../components/cart.vue'
import person from '../../components/person.vue'
import list from '../../components/list.vue'
import detail from '../../components/detail.vue'
//配置路由路径后才能正常引入组件
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: footer,
            children: [
                {
                    path: '/index',
                    component: index,
                },
                {
                    path: '/sort',
                    component: sort,
                },
                {
                    path: '/hot',
                    component: hot,
                },
                {
                    path: '/cart',
                    component: cart,
                },
                // {
                //     path:'/person',
                //     component:person,
                // },
            ],
            redirect: 'index'
        },
        {
            path: '/list',
            component: list,
        },
        {
            path: '/detail',
            component: detail,
        },
        {
            path: '/person',
            component: person,
        },
        {
            path: '/*',
            component: index,
        },
    ]
})













// 导出
export default router;