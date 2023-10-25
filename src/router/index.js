import { createRouter, createWebHistory } from 'vue-router'
import {useUser} from '@/stores/user'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'',
          component: Home
        },
        {
          path:'category/:id',
          component: Category,
        },
        {
          path:'category/sub/:id',
          component: SubCategory
        },
        {
          path:'detail/:id',
          component: Detail
        },
        {
          path:'cart',
          component: CartList
        },
        {
          path:'checkout',
          component:Checkout
        },
        {
          path:'pay/:id',
          component:Pay
        },
        {
          path:'member',
          component:Member,
          children:[
            {
              path:'',
              component:UserInfo
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component: Login
    }
  ],
  scrollBehavior(){
    return {top:0}
  }
})


// router.beforeEach((to,from,next)=>{
//   let obj = JSON.parse(localStorage.getItem('userInfo')) || {}

//   const userStore = useUser();
//   userStore.getUserInfo(obj);
//   if(to.path == '/login' && Object.keys(userStore.userInfo).length != 0)next('/');
//   else next();


//   // if(!userStore.userInfo){
//   //   let obj = JSON.parse(localStorage.getItem('userInfo')) || {}
//   //   // userStore.userInfo = ref(obj)
//   //   userStore.getUserInfo();
//   // }
// })
export default router
