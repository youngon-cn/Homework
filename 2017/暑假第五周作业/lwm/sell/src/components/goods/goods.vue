    <template>
    <div class="goods">
      <div class="menu-wrapper" ref="mount">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item" :class="{'currnt': currentIndex === index}" @click="selectMenu(index, $event)">
            <span class="text">
             <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span> {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foods">
        <ul>
          <li v-for="(items, index) in goods" :key="index" class="food-list foodlisthook">
            <h1 class="title">{{items.name}}</h1>
            <ul>
              <li v-for="(food, index) in items.foods" class="food-item" :key="index">
              <div class="icons">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span clss="count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old"  v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <cortcontrol :foods="food"></cortcontrol>
                </div>
              </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart :selectfood="selectFoods" :delivery-price="4" :min-price="20"></shopcart>
    </div>
    </template>
    
    <script>
    import cortcontrol from '../cortcontrol/cortcontrol.vue'
    import Bscroll from 'better-scroll'
    import shopcart from '../shop/shopcart.vue'
    const ERR_OK = 0
    export default {
      props: {
        sellers: {
          type: Object
        }
      },
      data () {
        return {
          goods: {},
          listHeight: [],
          scrollY: 0
        }
      },
      components: {
        shopcart,
        cortcontrol
      },
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        this.$http.get('/api/goods').then((Response) => {
          Response = Response.body
          if (Response.errno === ERR_OK) {
            this.goods = Response.data
            this.$nextTick(() => {
              this._initScroll()
              this._calculateh()
            })
          }
        })
      },
      computed: {
        currentIndex () {
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i]
            let height2 = this.listHeight[i + 1]
            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
              return i
            }
          }
          return 0
        },
        selectFoods () {
          let foods = []
          this.goods.forEach((good) => {
            good.foods.forEach((food) => {
              if (food.count) {
                foods.push(food)
              }
            })
          })
          return foods
        }
      },
      methods: {
        selectMenu (index, event) {
          if (!event._constructed) {
            return
          }
          let foodList = this.$refs.foods.getElementsByClassName('foodlisthook')
          let el = foodList[index]
          this.foodsScroll.scrollToElement(el, 300)
        },
        _initScroll () {
          this.meunScroll = new Bscroll(this.$refs.mount, {
            click: true
          })
          this.foodsScroll = new Bscroll(this.$refs.foods, {
            probeType: 3,
            click: true
          })
          this.foodsScroll.on('scroll', (pos) => {
            this.scrollY = Math.abs(Math.round(pos.y))
          })
        },
        _calculateh () {
          let foodList = this.$refs.foods.getElementsByClassName('foodlisthook')
          let height = 0
          this.listHeight.push(height)
          for (let i = 0; i < foodList.length; i++) {
            let item = foodList[i]
            height += item.clientHeight
            console.log(height)
            this.listHeight.push(height)
          }
        }
      }
    }
    </script>

    <style scoped>
    .goods{
       display: flex;
       position: absolute;
       width: 100%;
       top: 214px;
       bottom: 46px;
       overflow: hidden;
    }
    .menu-wrapper{
       flex: 0 0 80px;
       width: 80px;
       background: #f3f5f7;
    }
    .foods-wrapper{
       flex: 1;
    }
    .menu-item{
       display: table;
       width: 56px;
       height: 54px;
       line-height: 14px;
       padding: 0 12px;
    }
    .currnt{
      background: white;
      position: relative;
      margin-top: -1px;
      z-index: 10;
      font-weight: 700;
    }
    .icon{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 2px;
      background-size: 10px 12px!important;
      background-repeat: no-repeat!important; 
    }
    .decrease{
      background: url('decrease_3@2x.png');
    }
    .discount{
      background: url('discount_3@3x.png');
    }
    .guarantee{
      background: url('guarantee_3@2x.png');
    }
    .invoice{
      background: url('invoice_3@2x.png');
    }
    .special{
      background: url('special_3@2x.png');
    }
    .text{
      font-size: 12px;
      display: table-cell;
      width: 56px;
      vertical-align: middle;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    .foods-wrapper{
      flex: 1;
    }
    .title{
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item{
      height: 96px;
      padding-bottom: 18px;
      display: flex;
      margin: 18px!important;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    .food-item:last-child{
      border-bottom: ""!important;
      margin-bottom: 0;
    }
    .icons{
      flex: 0 0 57px;
    }
    .content{
      cursor: pointer;
      position: relative;
      margin-left: 10px;
      flex: 1;
    }
    .name{
      margin: 2px 0 8px 0;
      height: 14px;
      line-height: 14px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .desc{
      margin-bottom: 8px;
      line-height: 12px;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .extra{
      line-height: 10px;
      font-size: 10px;
      color: rgb(147, 153, 159);
      line-height: 10px;
    }
    .count{
      margin-right: 12px; 
    }
    .price{
      font-weight: 700px;
      line-height: 24px;
    }
    .cartcontrol-wrapper{
      z-index: 100;
      position: absolute;
      right: -3px;
      bottom: 5px;
    }
    .now{
      color: rgb(240, 20, 20);
      margin-right: 8px;
      font-size: 14px;
    }
    .old{
      text-decoration: line-through;
      font-size: 1px;
      color: rgb(147, 153, 159)
    }

    </style>


