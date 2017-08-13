    import Vue from 'vue'
    import Router from 'vue-router'
    import Hello from '@/components/Hello'
    import goods from '../components/goods/goods.vue'
    import ratings from '../components/ratings/ratings.vue'
    import seller from '../components/seller/seller.vue'
    Vue.use(Router)

    export default new Router({
      routes: [
        {
          path: '/',
          redirect: 'goods',
          name: 'Hello',
          component: Hello,
          children: [
            {
              path: 'goods',
              name: 'goods',
              component: goods
            },
            {
              path: 'ratings',
              name: 'ratings',
              component: ratings
            },
            {
              path: 'seller',
              name: 'seller',
              component: seller
            }
          ]
        }
      ],
      linkActiveClass: 'active'
    })
