import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloword',
      components:{ //多组件后面加s
        default: HelloWorld,
        left:hi1,
        right:hi2
      }
    },
    {
      path: '/Hi',
      component: Hi,
      alias:'/goHi',
      children:[
        { path:'/', name: 'Hi',component:Hi },
        {
          path:'hi1', name: 'hi1',component:hi1,

        },
        { path:'hi2', name: 'hi2',component:hi2}
      ]
    },
    {
      path:'/params/:newsId/:newsTitle',
      name: "params",
      component:params

    },{
    path:'/gohome',
      redirect:'/'
    }
  ]
})
