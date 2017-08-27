    <template>
    <div id="bookname">
      <div class="animation">
        <div class="all_animation">
        <ul class="animation_photos" ref="transforms" :style="'left: 0px; width:'+width">
          <li class="animation_photo" v-for="(items, index) in animation" :key="index">
            <img :src="items.name" class="photos">
            <p class="animation_text">{{items.introduce}}</p>
          </li>
        </ul>
        </div>
      </div>
       <div v-for="(item, index) in bookname" :key="index">
         <div class="contents">
          <div class="bookname-content">
            <span class="photo"><img :src="item.image" class="photo"/></span>
            <star :score="item.gaden" :size="48" class="star"></star>
            <router-link to="/forend"><span class="name" @click="lookfor(item.name)">{{item.name}}</span></router-link>
          </div>
       </div>
      </div>
    </div>
    </template>

    <script>
    import Vue from 'vue'
    import Resource from 'vue-resource'
    import star from '../star/star.vue'
    Vue.use(Resource)
    var k = 0
    export default {
      data () {
        return {
          bookname: [],
          animation: []
        }
      },
      computed: {
        width () {
          console.log(this.animation.length)
          return this.animation.length * 400 + 'px'
        }
      },
      created () {
        this.$http.get('/searchbook').then(Response => {
          Response = Response.body
          this.bookname = Response.data
          for (let i = 0; i < this.bookname.length; i++) {
            if (this.bookname[i].animations === '动画') {
              this.animation.push({'name': this.bookname[i].image, 'introduce': this.bookname[i].introduce})
              // console.log(this.animation)
            }
          }
          // console.log(this.bookname.name)
          this.$store.commit('transformdata', Response)
        })
      },
      mounted () {
        this.animations()
      },
      methods: {
        lookfor (name) {
          this.$store.commit('showUserdata', name)
        },
        animations () {
          this.$refs.transforms.style.left = '-' + (k * 400) + 'px'
          k++
          if (k === this.animation.length) {
            k = 0
          }
          setTimeout(this.animations, 4000)
          // console.log(k)
        }
      },
      components: {
        star
      }
    }
    </script>
    <style scoped>
    #book{
      font-size: 0;
    }
    .animation{
      float: left;
      height: 450px;
      width: 400px;
      margin-left: 50px;
    }
    .animation_photos{
      transition: all 2s;
      height: 350px;
      position: relative;
    }
    .all_animation{
      height: 350px;
      width: 400px;
      overflow: hidden;
    }
    .animation_photo{
      height: 350px;
      width: 400px;
      float: left;
    }
    .animation_text{
      color: gray;
      height: 350px;
      width: 145px;
      float: right;
      font-size: 12px;
      overflow: auto;
    }
    .photos{
      float: left;
      height: 350px;
      width: 250px;
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

