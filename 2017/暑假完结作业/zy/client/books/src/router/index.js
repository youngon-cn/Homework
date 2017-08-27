import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goodbook1 from '../components/goodbook/goodBook1.vue'
import goodbook2 from '../components/goodbook/goodBook2.vue'
import goodbook3 from '../components/goodbook/goodBook3.vue'
import goodbook4 from '../components/goodbook/goodBook4.vue'
import goodbook5 from '../components/goodbook/goodBook5.vue'
import goodbook6 from '../components/goodbook/goodBook6.vue'
import leaveword from '../components/goodbook/leaveword.vue'
import forend from '../components/forend/forend.vue'
import nve from '../components/nve/nve.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: 'nve',
      component: Hello,
      children: [
        {
          path: 'nve',
          name: 'nve',
          redirect: 'nve/goodbook1',
          component: nve,
          children: [
            {
              path: 'goodbook1',
              component: goodbook1
            },
            {
              path: 'goodbook2',
              component: goodbook2
            },
            {
              path: 'goodbook3',
              component: goodbook3
            },
            {
              path: 'goodbook4',
              name: 'goodbook4',
              component: goodbook4
            },
            {
              path: 'goodbook5',
              name: 'goodbook5',
              component: goodbook5
            },
            {
              path: 'goodbook6',
              name: 'goodbook6',
              component: goodbook6
            },
            {
              path: 'leaveword',
              name: 'leaveword',
              component: leaveword
            }
          ]
        },
        {
          path: 'forend',
          name: 'forend',
          component: forend
        }
      ]
    }
  ]
})
