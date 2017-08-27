    <template>
      <div class="bigcontents">
         <div v-for="(item, index) in this.$store.state.backgrounddata.data" :key="index">
          <div class="bigbookname-content" v-if="item.name === onclickdatas">
            <div class="bigphotos_left">
            <div class="bigphotos">
              <span class="bigphoto"><img :src="item.image" class="bigphoto"/></span>
            </div>
              <star :score="item.gaden" :size="48" class="bigstar"></star><br/>
              <span class="icon-folder-download  bigphoto-font"><a :href="'./update/files/'+item.name+'.zip'">下载</a></span><br/>
            </div>
            <div class="bigbookname-introduce">
            <div class="introduce">
              <span class="introduce-page">图书类型：{{item.types}}</span><br/>
              <span class="introduce-page">作者：{{item.auther}}</span><br/>
              <span class="introduce-page">图书大小：{{item.size}}</span><br/>
              <span class="introduce-page">共{{item.num}}章</span><br/>
              <span class="introduce-name">名称：{{item.name}}</span><br/>
              <span class="introduce-read"><span class="icon-book"></span><a :href="'./update/files/'+item.name+'.pdf'">在线阅读</a></span><br/>
              <div class="reason">
                <span class="introduce-reason">简介：{{item.introduce}}</span>
              </div>
            </div>
            </div>
            </div>
          </div>
          <input type="hidden" v-bind="changes">
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
      components: {
        star
      },
      computed: {
        onclickdatas () {
          let math = 0
          let onclickdatas = this.$store.state.onclickdata.split('')
          for (let i = 0; i < this.datas.length; i++) {
            let dataslength = this.datas[i].name.split('')
            for (let y = 0; y < dataslength.length; y++) {
              for (let r = 0; r < onclickdatas.length; r++) {
                if (dataslength[y] === onclickdatas[r]) {
                  math++
                }
              }
            }
            if (math >= 2) {
              for (let o = 0; o < this.datas.length; o++) {
                if (this.datas[o].name === this.$store.state.onclickdata) {
                  return this.datas[o].name
                }
              }
              return this.datas[i].name
            }
          }
        }
      },
      methods: {
        downfile (name) {
          alert(name)
          this.$http.get('/downfile', {params: {values: name}}).then(Response => {
          }, Response => {
          })
        }
      }
    }
    </script>
    <style scoped>
    .bigbookname-content{
      width: 100%;
      height: 700px;
      float: left
    }
    .bigphotos{
      width: 375px;
      height: 499px;
      margin-left: 50px;
      margin-top: 100px;
    }
    .bigphoto{
      width: 375px;
      height: 499px;
    }
    .bigphoto-font{
      display: inline-block;
      width: 375px;
      height: 50px;
      line-height: 50px;
      margin-left: 50px;
      font-size: 25px;
    }
    .bigstar{
      display: inline-block;
      width: 375px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-left: 30px;
    }
    .bigphotos_left{
      height: 650px;
      float: left;
    }
    .introduce{
      flex: 1;
      float: left;
      margin-left: 50px;
      margin-top: 200px;
    }
    .bigbookname-introduce{
      float: left;
      margin-left: 50px;
    }
    .introduce-page{
      display: inline-block;
      font-size: 20px;
      height: 50px;
      width: 300px;
      line-height: 30px;
    }
    .introduce-name{
      display: inline-block;
      font-size: 20px;
      height: 50px;
      width: 350px;
      line-height: 30px;
    }
    .introduce-read{
      display: inline-block;
      font-size: 15px;
      height: 50px;
      width: 350px;
      line-height: 30px;
    }
    .reason{
     width: 800px;
    }
    </style>


