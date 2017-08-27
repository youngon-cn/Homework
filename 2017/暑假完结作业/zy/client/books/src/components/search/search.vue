    <template>
    <div class="search">
        <div class="searchs">
                <form>
                <input type="text" v-model="search" class="content" placeholder="请输入你想搜索的书名">
                <router-link to="/forend"><label class="icon-search font" v-on:click="searchbook"></label></router-link>
                </form>
        </div>
    </div>
    </template>

    <script>
    export default {
      data () {
        return {
          datas: {},
          search: ''
        }
      },
      methods: {
        searchbook () {
          this.$store.commit('showUserdata', this.search)
        }
      }
    }
    </script>

    <style>
    .search{
        font-size: 0px;
        height: 150px;
        width: 100%;
    }
    .searchs{
        text-align:center;
        margin: 0 auto;
        width: 550px;
        height: 100px;
    }
    .content{
        margin-top: 50px;
        font-size: 20px;
        color: green;
        display: inline-block;
        height: 40px;
        width: 500px;
        border: 2px solid gray;
    }
    .font{
        margin-top: 50px;
        vertical-align: top;
        text-align: center;
        line-height: 40px;
        display: inline-block;
        height: 42px;
        width: 40px;
        font-size: 30px;
        margin-left: 5px; 
        color: greenyellow;
    }
    </style>


