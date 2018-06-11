import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../views/AboutMe'
import Login from '../views/Login'
import Register from '../views/Register'
import ForgetPassword from '../views/Forgetpassword'
import Mine from '../views/Mine'
import Setting from '../views/Setting'
import ModifyPassword from '../views/ModifyPassword'
import HelppingCenter from '../views/HelppingCenter'
import Profile from '../views/Profile'
import Index from '../views/Index'
import Materials from '../views/Materials'
import Worker from '../views/Worker'
import MaterialsDetail from '../views/MaterialsDetail'
import GoodsDetail from '../views/GoodsDetails'
import OrderConfirm from '../views/OrderConfirm'
import OrderDetail from '../views/OrderDetails'
import AddAddress from '../views/AddAddress'
import UpdateAddress from '../views/UpdateAddress'
import MyAddress from '../views/MyAddress'
import MyCollection from '../views/MyCollection'
import OrderList from '../views/MyOrders'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/addAddress',
      name: 'AddAddress',
      component: AddAddress,
      meta: {requireAuth: true}
    },
    {
      path: '/updateAddress',
      name: 'UpdateAddress',
      component: UpdateAddress,
      meta: {requireAuth: true}
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/materials',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/myAddress',
      name: 'MyAddress',
      component: MyAddress,
      meta: {requireAuth: true}
    },
    {
      path: '/myCollection',
      name: 'MyCollection',
      component: MyCollection,
      meta: {requireAuth: true}
    },
    {
      path: '/materials',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {requireAuth: true}
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/orderConfrim',
      name: 'OrderConfirm',
      component: OrderConfirm,
      meta: {requireAuth: true}
    },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail,
      meta: {requireAuth: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {requireAuth: true}
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: ModifyPassword
    },
    {
      path: '/helppingCenter',
      name: 'helppingCenter',
      component: HelppingCenter
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {requireAuth: true}
    },
    {
      path: '/materialsDetail',
      name: 'materialsDetail',
      component: MaterialsDetail
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/worker',
      name: 'Worker',
      component: Worker
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router

