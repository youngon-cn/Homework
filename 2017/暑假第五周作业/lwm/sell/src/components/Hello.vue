    <template>
    <div>
        <div class="tab">
          <div class="tab-item">
            <router-link to="/goods">商品</router-link>
          </div>
          <div class="tab-item">
            <router-link to="/ratings" >评论</router-link>
          </div>
          <div class="tab-item">
            <router-link to="/seller" >商家</router-link>
          </div>
        </div>
        <router-view :seller="seller"></router-view>
    </div>
    </template>

    <script>
    export default {}
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="stylus" rel="stylesheet/stylus">
      .tab{
      position: relative
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .tab:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: block;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
    }
    .tab-item {
      flex: 1;
      text-align: center;
    }
    .active{
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
    }
    .active:active,.active:visited {
      font-size: "";
      text-decoration: underline;
      color: rgb(240,20, 20);
    }
    </style>
