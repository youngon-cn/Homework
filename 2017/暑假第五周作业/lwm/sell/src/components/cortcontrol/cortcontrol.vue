        <template>
        <div class="cartcontrol">
            <div class="cart-decrease" v-show="foods.count>0" @click="decreasrCart">-</div>
            <div class="cart-count" v-show="foods.count>0">{{foods.count}}</div>
            <div class="cart-add" @click.stop="addCart">+</div>
        </div>
        </template>
        <script>
        import Vue from 'vue'
        export default {
          props: {
            foods: {
              type: Object
            }
          },
          methods: {
            addCart (event) {
              if (!event._constructed) {
                return
              }
              if (!this.foods.count) {
                Vue.set(this.foods, 'count', 1)
              } else {
                this.foods.count++
              }
            },
            decreasrCart (event) {
              if (!event._constructed) {
                return
              }
              if (this.foods.count) {
                this.foods.count--
              }
            }
          }
        }
        </script>
        <style>
        .cartcontrol{
          font-size: 0px;
        }
        .cart-decrease{
          line-height: 24px;
          font-size: 24px;
          display: inline-block;
          padding: 6px;
        }
        .cart-count{
          display: inline-block;
        }
        .cart-add{
          padding: 6px;
          color: rgb(0, 160, 220);
          line-height: 24px;
          font-size: 24px;
          display: inline-block;
        }
        .cart-count{
          vertical-align: top;
          width: 15px;
          padding-top: 6px;
          line-height: 24px;
          text-align: center;
          font-size: 10px;
          color: rgb(147, 153, 159)
        }
        </style>


