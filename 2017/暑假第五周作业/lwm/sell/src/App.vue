    <template>
      <div id="app">
        <v-header :seller="seller"></v-header>
        <router-view :sellers="seller"></router-view>
      </div>
    </template>
    <script>
    import header from './components/header/header.vue'
    const ERR_OK = 0
    export default {
      name: 'app',
      data () {
        return {
          seller: {}
        }
      },
      created () {
        this.$http.get('/api/seller').then(Response => {
          Response = Response.body
          if (Response.errno === ERR_OK) {
            this.seller = Response.data
            console.log(this.seller.avatar)
          }
        })
      },
      components: { 'v-header': header }
    }
    </script>
    <style>
    </style>
