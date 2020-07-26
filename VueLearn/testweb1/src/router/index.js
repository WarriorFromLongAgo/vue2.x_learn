import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Jump from '@/components/Jump'
import Home from '@/components/Home'
import bookShop from '@/components/bookShop'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default new Router({
  routes: [
    {
      path: '/',
      name: '你好',
      hidden: true,
      component: HelloWorld
    }, {
      path: '/test',
      name: '测试',
      component: Test,
      hidden: true
    }, {
      path: '/jump',
      name: '测试Jump',
      component: Jump,
      hidden: true
    }, {
      path: '/home',
      name: '测试Home',
      component: Home,
      hidden: true
    }, {
      path: '/homework',
      component: Home,
      name: '文章管理',
      iconCls: 'fa fa-file-text-o',
      children: [
        {
          path: '/articleList',
          name: '文章列表',
          component: Home,
          meta: {
            keepAlive: true
          }
        }, {
          path: '/postArticle',
          name: '发表文章',
          component: Home,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/blogDetail',
          name: '博客详情',
          component: Home,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }, {
          path: '/editBlog',
          name: '编辑博客',
          component: Home,
          hidden: true,
          meta: {
            keepAlive: false
          }
        }
      ]
    }, {
      path: '/bookShop',
      name: '书籍列表',
      component: bookShop,
      hidden: true
    }

  ]
})
