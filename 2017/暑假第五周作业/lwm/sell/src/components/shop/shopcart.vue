        <template>
          <div class="shopcart">
            <div class="content">
              <div class="content-left">
                  <div class="logo-wrapper">
                      <div class="logo" :class="{'heightlight': totalcount>0}">
                          <span class="font" :class="{'heightlight': totalcount>0}">卖</span>
                      </div>
                      <div class="num" v-show="totalcount>0">{{totalcount}}</div>
                  </div>
                  <div class="price" :class="{'heightcolor': totalcount>0}">{{totalPrice}}元</div>
                  <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
              </div>
              <div class="content-right">
                  <div class="pay" :class="payclass">
                      {{payDes}}
                  </div>
              </div>
            </div>
          </div>
        </template>
        <script>
        export default {
          props: {
            selectfood: {
              type: Array,
              default () {
                return [
                  {
                    price: 5,
                    count: 1
                  }
                ]
              }
            },
            deliveryPrice: {
              type: Number,
              default: 0
            },
            minPrice: {
              type: Number,
              default: 0
            }
          },
          computed: {
            totalPrice () {
              let total = 0
              this.selectfood.forEach((food) => {
                total += food.price * food.count
              })
              return total
            },
            totalcount () {
              let count = 0
              this.selectfood.forEach((food) => {
                count += food.count
              })
              return count
            },
            payDes () {
              if (this.totalPrice === 0) {
                return '￥' + this.minPrice + '元起送'
              } else if (this.totalPrice < this.minPrice) {
                let diff = this.minPrice - this.totalPrice
                return '还差￥' + diff + '元'
              } else {
                return '去结算'
              }
            },
            payclass () {
              if (this.totalPrice < this.minPrice) {
                return 'not-enough'
              } else {
                return 'enough'
              }
            }
          }
        }
        </script>
        <style scoped>
        .shopcart{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 40;
            width: 100%;
            height: 48px;
        }
        .content{
            display: flex;
            background: #141d27;
            font-size: 0;
        }
        .content-left{
            flex: 1;
        }
        .logo-wrapper{
            position: relative;
            top: -10px;
            margin: 0 12px;
            padding: 6px;
            display: inline-block;
            width: 56px;
            height: 56px;
            box-sizing: border-box;
            vertical-align: top;
            border-radius: 50%;
            background: #141d27;
        }
        .num{
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #fff;
            background: rgb(240, 20, 20);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
        .logo{
            text-align: center;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #2b343c;
        }
        .heightlight{
            background: rgb(0, 160, 220);
        }
        .font{
            font-size: 24px;
            color: #80858a;
            line-height: 44px;
        }
        .heightlight{
            color: #fff;
        }
        .price{
            display: inline-block;
            vertical-align: top;
            line-height: 24px;
            margin-top: 12px; 
            box-sizing: border-box;
            padding-right: 12px;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 16px;
            font-weight: 700px;
            color: rgba(255, 255, 255, 0.4);
        }
        .heightcolor{
            color: #fff;
        }
        .desc{
            display: inline-block;
            vertical-align: top;
            line-height: 24px;
            margin: 12px 0 0 12px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.4);
        }
        .content-right{
           flex: 0, 0, 105px;
           width: 105px;
        }
        .pay{
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);
            font-weight: 700;
            background: #2b333b;
        }
        .not-enough{
            background: #2b333b;
        }
        .enough{
            background: #00b43c;
            color: #fff;
        }
        </style>


