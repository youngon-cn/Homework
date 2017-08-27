    // The Vue build version to load with the `import` command
    // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import Resource from 'vue-resource'
    import Vuex from 'vuex'

    Vue.use(Vuex)
    Vue.use(Resource)
    Vue.config.productionTip = false
    const vuexs = new Vuex.Store({
      state: {
        valus: '',
        backgrounddata: '',
        onclickdata: ''
      },
      mutations: {
        showUserName (state, msg) {
          state.valus = msg
        },
        transformdata (state, msg) {
          state.backgrounddata = msg
          console.log(state.backgrounddata.data)
        },
        showUserdata (state, msg) {
          state.onclickdata = msg
          alert(state.onclickdata)
        }
      }
    })

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store: vuexs,
      template: '<App/>',
      components: { App }
    })

