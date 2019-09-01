//配置路由相关信息
import Vue from 'vue'
import router from 'vue-router'


// import about from '../components/about'
// import home from "../components/home";
// import ours from "../components/ours";

//路由懒加载方式
const home = () => import('../components/home');
const about = () => import('../components/about');
const ours = () => import('../components/ours');
const HomeMessage = () => import('../components/HomeMessage');
const HomeNews = () => import('../components/HomeNews');
const Profile = () => import('../components/Profile');

//通过Vue.use(插件) 安装插件
Vue.use(router)


//创建Router对象
const routers = new router({
  routes: [
    { //配置路由和组件之间的应用关系
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      children: [ //路由的嵌套使用
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about/:userId',
      meta: {
        title: '关于'
      },
      component: about
    },
    {
      path: '/ours',
      meta: {
        title: '我们'
      },
      component: ours
    },
    {
      path: '/profile',
      meta: {
        title: '档案'
      },
      component: Profile
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

//导航守卫
//前置钩子（hook 回调的意思） 跳转之前执行
routers.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  next()
})

//后置钩子 跳转之后执行
routers.afterEach((to, from) => {
  console.log(to)
})

export default routers

