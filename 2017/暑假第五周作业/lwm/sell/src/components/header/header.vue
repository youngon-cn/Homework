    <template>
      <div id="header">
        <div class="content-wrapper">
          <div class="avatar">
            <img width="64" height="64" :src="seller.avatar">
          </div>
          <div class="content">
            <div class="title">
              <span class="brand"></span>
              <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
              {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div v-if="seller.supports" class="support">
              <span class="icon" :class="classMap[seller.supports[0].type]"></span>
              <span class="text">{{seller.supports[0].description}}</span>
            </div>
            <div v-if="seller.supports"   class="support-count" @click="showDetail">
              <span class="count">{{seller.supports.length}}个</span>
              <i class="icon-keyboard_arrow_right:before"></i>
            </div>
          </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
          <span class="bulletin-title"></span>
          <span class="bulletim-text">{{seller.bulletin}}</span>
        </div>
        <div class="background">
          <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <transition name="fade">
        <div v-show="detailshow" class="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{seller.name}}</h1>
              <div class="star-wrapper">
              <star :size="48"  :score="seller.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text-iformation">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul v-if="seller.supports" class="supports">
                <li class="supports-item" v-for="(item, index) in seller.supports" :key="index">
                  <span class="icons" :class="classMap[seller.supports[index].type]"></span>
                  <span class="texts">{{seller.supports[index].description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text-iformation">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletins">
                <p class="contents">{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close">
            <li class="icon-close" @click="hideDetail">x</li>
          </div>
        </div>
        </transition>
      </div>
    </template>
    <script>
    import star from '../star/star.vue'
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data () {
        return {
          detailshow: false
        }
      },
      methods: {
        showDetail () {
          this.detailshow = true
        },
        hideDetail () {
          this.detailshow = false
        }
      },
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      },
      components: {
        star
      }
    }
   // console.log(this.seller)
    </script>

    <style scoped>
    #header{
      cursor: pointer;
      overflow: hidden;
      background: rgba(7, 17, 27, 0.5);
      position: relative;
      color: white;
    }
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px; 
      font-size: 0px;
    }
    .avatar{
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
    }
    .avatar img{
      border-radius: 2px;
    }
    .content{
      display: inline-block;
      margin-left: 16px;
    }
    .title{
      margin: 2px 0 8px 0;
    }
    .brand{
      width: 35px;
      height: 18px;
      vertical-align: top;
      display: inline-block;
      background: url('brand@2x.png');
      background-size: 30px 18px;
      background-repeat:no-repeat;  
    }
    .name{
      margin-left: 6px;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      width: 200px;
    }
    .description{
      font-size: 12px;
      font-weight: 200px;
      margin-bottom: 10px;
      margin-left: 22px;
    }
    .icon{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 4px;
      background-size: 10px 12px!important;
      background-repeat: no-repeat!important; 
      margin-left: 22px;
    }
    .decrease{
      background: url('decrease_1@2x.png');
    }
    .discount{
      background: url('discount_1@3x.png');
    }
    .guarantee{
      background: url('guarantee_1@2x.png');
    }
    .invoice{
      background: url('invoice_1@2x.png');
    }
    .special{
      background: url('special_1@2x.png');
    }
    .text{
      font-size: 10px;
      line-height: 12px;
      vertical-align: top;
    }
    .support-count{
      position: absolute;
      right: 12px;
      bottom: 15px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
    }
    .count{
      vertical-align: top;
      font-size:10px; 
    }
    .icon-keyboard_arrow_right:before{
      font-size: 10px;
    }
    .bulletin-wrapper{
      white-space: nowrap!important;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      background: rgba(7, 17, 27, 0.2);
    }
    .bulletin-title{
      margin-top: 8px;
      vertical-align: top;
      display: inline-block;
      width: 22px;
      height: 12px;
      background: url('bulletin@2x.png');
      background-size: 22px 12px;
      background-repeat: no-repeat; 
    }
    .bulletim-text{
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }
    .background{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail{
      position: fixed;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      left: 0px;
      top: 0px;
      opacity: 1;
      background: rgba(7, 17, 27, 0.8);
    }
    .fade-enter, .fade-enter-active {
       transition: all 1s ease;
       opacity: 0;
       background: rgba(7, 17, 27, 0);
    }
    .fade-enter-to {
       opacity: 1;
       background: rgba(7, 17, 27, 0.8);
    }
    .clearfix{
      display: inline-block;
    }
    .clearfix::after{
      content: ".";
      display: block;
      height: 0px;
      line-height: 0px;
      clear: both;
      visibility: hidden;
    }
    .detail-wrapper{
      width: 100%;
      min-height: 100%;
    }
    .detail-main{
      margin-top: 64px;
      padding-bottom:64px;
    }
    .name{
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      font-weight: 700
    }
    .star-wrapper{
      margin-top: 18px;
      padding: 2px 0;
      text-align: center;
    }
    .detail-close{
      position: relative;
      width:32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
    .title{
      display: flex;
      width: 80%;
      margin: 28px auto 24px auto;
    }
    .line{
      flex: 1;
      position: relative;
      top: -6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .text-iformation{
      padding: 0 12px;
      font-size: 14px;
    }
    .supports{
      width: 80%;
      margin: 0 auto;
    }
    .supports-item{
      padding: 0 12px;
      margin-bottom: 12px;
      font-size: 0px;
    }
    .supports-item:last-child{
      margin-bottom: 0;
    }
    .icons{
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: top;
      margin-right: 6px;
      background-size: 16px 16px!important;
      background-repeat: no-repeat;
    }
     .decrease{
      background: url('decrease_2@2x.png');
    }
    .discount{
      background: url('discount_2@3x.png');
    }
    .guarantee{
      background: url('guarantee_2@2x.png');
    }
    .invoice{
      background: url('invoice_2@2x.png');
    }
    .special{
      background: url('special_2@2x.png');
    }
    .texts{
      line-height: 16px!important;
      font-size: 12px!important;
    }
    .bulletins{
      width: 80%;
      margin: 0 auto; 
    }
    .contents{
      padding: 0 12px;
      line-height: 24px;
      font-size: 12px;
    }
    </style>

