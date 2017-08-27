  <template>
    <div>
    <div id="bookname">
       <div v-for="(item, index) in datas" :key="index">
         <div v-if="item.types === '人物'">
         <div class="contents">
          <div class="bookname-content">
            <span class="photo"><img :src="item.image" class="photo"/></span>
            <star :score="item.gaden" :size="48" class="star"></star>
            <router-link to="/forend"><span class="name" @click="lookfor(item.name)">{{item.name}}</span></router-link>
          </div>
       </div>
      </div>
    </div>
    </div>
    </div>
    </template>

    <script>
    import star from '../star/star.vue'
    export default {
      data () {
        return {
          datas: this.$store.state.backgrounddata.data
        }
      },
      created () {
        // alert(this.datas)
        if (this.datas === undefined) {
          // console.log('p')
          this.$http.get('/searchbook').then(Response => {
            Response = Response.body
            this.datas = Response.data
          })
        }
      },
      components: {
        star
      },
      methods: {
        lookfor (name) {
          this.$store.commit('showUserdata', name)
        }
      }
    }
    </script>
    <style scoped>
     #book{
      font-size: 0;
    }
    .contents{
      float: left;
      height: 450px;
      width: 400px;
    }
    .bookname-content{
      float: right;
      height: 450px;
      width: 250px;
    }
    .star{
      height: 30px;
      width: 250px;
      text-align: center;
    }
    .photo{
      display: inline-block;
      height: 350px;
      width: 250px;
    }
    .name{
      display: block;
      width: 250px;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      text-align: center;
    }
    .name:hover{
      color: greenyellow;
    }

    </style>