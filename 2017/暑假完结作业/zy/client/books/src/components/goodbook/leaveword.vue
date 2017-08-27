    <template>
    <div class="leaveword">
      <div class="write_word">
          <form>
              <div class="look_text"><textarea v-model="searchs"  class="look_text"></textarea></div>
              <div class="look_people"><input type="text" placeholder="姓名" v-model="lookfor"><p @click="lookforbook" class="getup">提交</p></div>
          </form>
      </div>
      <div class="word_top">
          <div class="require_data" v-for="(item, index) in words" :key="index" v-if="item.word !== null">
              <li class="require_text">{{item.word}}</li>
              <li class="require_name">{{item.name}}</li> 
          </div>
      </div>
    </div>
    </template>
    
    <script>
    export default {
      data () {
        return {
          searchs: '',
          lookfor: '',
          words: ''
        }
      },
      created () {
        this.$http.post('/getup').then(Response => {
          // console.log(this.bookname.name)
          Response = Response.body
          this.words = Response.data
        })
      },
      methods: {
        lookforbook () {
          console.log(this.searchs)
          this.$http.post('/getup', {search: this.searchs, lookfor: this.lookfor}, {emulateJSON: true}).then(Response => {
            // console.log(this.bookname.name)
            Response = Response.body
            this.words = Response.data
          })
          this.searchs = ''
          this.lookfor = ''
        }
      }
    }
    </script>
    <style>
    *{
      margin: 0px;
      padding: 0px;
    }
    .leaveword{
      border: 1px gray solid;
      height: 818px;
      width: 1024px;
      margin: 0 auto;
    }
    .word_top{
      height: 668px;
      width: 1024px;
      overflow-y: auto;
    }
    .write_word{
      height: 150px;
      width: 1024px;
    }
    .look_text{
      font-size: 25px;
      color: gray;
      height: 128px;
      width: 1024px;
    }
    .look_people{
      height: 22px;
      width: 1024px;
      border: solid orange 1px;
    }
    .getup{
        cursor: pointer;
        width: 40px;
        height: 22px;
        background: orange;
        float: right;
    }
    .require_data{
       height: 50px;
       width: 1022px;
       border-bottom: 1px solid gray;
       display: flex;
    }
    .require_text{
       font-size: 18px;
       color: gray;
       line-height: 50px;
       flex: 1;
    }
    .require_name{
       font-size: 20px;
       text-align: center;
       line-height: 50px;
       flex: 0 0 100px;
    }
    </style>


