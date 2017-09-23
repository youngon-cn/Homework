        <template>
        <div class="star" :class="starType">
            <span v-for="(itemClass,index) in itemClasses" class="star-item" :class="[itemClass, star]" :key="index" ></span>
        </div>
        </template> 

        <script>
        const LENGTH = 5
        const CLS_ON = 'on'
        const CLS_HALF = 'half'
        const CLS_OFF = 'off'
        export default {
          data () {
            return {
              star: ''
            }
          },
          props: {
            size: {
              type: Number
            },
            score: {
              type: Number
            }
          },
          computed: {
            starType () {
              return 'star-' + this.size
            },
            itemClasses () {
              let result = []
              let score = Math.floor(this.score * 2) / 2
              let hasDecimal = score % 1 !== 0
              let interger = Math.floor(score)
              this.star = 'star' + this.size
              for (let i = 0; i < interger; i++) {
                result.push(CLS_ON + this.size)
              };
              if (hasDecimal) {
                result.push(CLS_HALF + this.size)
              };
              while (result.length < LENGTH) {
                result.push(CLS_OFF + this.size)
              };
              // console.log(result)
              return result
            }
          }
        }
        </script scoped>

        <style>
        .star{
            font-size: 0px;
        }
        .star-item{
        display: inline-block;
        background-repeat:no-repeat; 
        }
        .star48{
            width: 20px;
            height: 20px;
            margin-right: 22px;
            background-size: 20px 20px!important;
        }
        .on48{
            background: url('star48_on@2x.png')
        }
        .half48{
            background: url('star48_half@2x.png')
        }
        .off48{
            background: url('star48_off@2x.png')
        }
        .star48:last-child{
            margin-right: 0px;
        }
        .star36{
            width: 15px;
            height: 15px;
            margin-right: 16px;
            background-size: 15px 15px!important;
        }
        .on36{
            background: url('star36_on@2x.png')
        }
        .half36{
            background: url('star36_half@2x.png')
        }
        .off36{
            background: url('star36_off@2x.png')
        }
        .star36:last-child{
            margin-right: 0px;
        }
        .star24{
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px!important;
        }
        .on24{
            background: url('star24_on@2x.png')
        }
        .half24{
            background: url('star24_half@2x.png')
        }
        .off24{
            background: url('star24_off@2x.png')
        }
        .star24:last-child{
            margin-right: 0px;
        }
        </style>


