    <template>
    <div id="Hello">
    <div>
      <search></search>
    </div>
     <div>
     <router-view></router-view>
     </div>
    </div>
    </template>
    <script>
    import search from './search/search.vue'
    export default {
      data () {
        return {
          bookname: {}
        }
      },
      components: {
        search
      }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>
