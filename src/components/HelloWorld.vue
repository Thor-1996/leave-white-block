<template>
  <div>
    <div style="display:flex">
      <div class="box">
        <div
          v-for="(line, lineIndex) in whole"
          :key="lineIndex"
          class="line"
        >
          <div
            v-for="(lattice, latticeIndex) in line"
            :key="latticeIndex"
            :class="['lattice', lattice.color]"
            @click="stepOn(lattice.color, lineIndex, whole)"
          >
          </div>
        </div>
      </div>
      <div>
        <button @click="start">开始</button>
        <button @click="pause">暂停</button>
        <button @click="stop">结束</button>
        <div class="grade">我的得分：{{ grade }}</div>
        <div class="remainTime">剩余时间：{{ remainTime }}</div>
        <p>Tip: 点击开始按钮后，点击最下方的黑块可得1分，点的越快分数越高，限时10秒~</p>
      </div>
    </div>
    <p style="width:100%;height:200px"></p>
    <p>
      网站备案号<a href="http://beian.miitbeian.gov.cn" target="_blank">湘ICP备19024509号-1</a>
    </p>
  </div>
</template>
<script>
const BLACK = 'BLACK'
const WHITE = 'WHITE'

let TIMER = null

export default {
  name: 'DoNotStepOnTheWhiteBlock',
  data () {
    return {
      remainTime: 10,
      grade: 0,
      WHITE: WHITE,
      BLACK: BLACK,
      lattice: 1,
      whole: [
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ],
        [
          {
            color: WHITE
          },
          {
            color: BLACK
          },
          {
            color: WHITE
          },
          {
            color: WHITE
          }
        ]
      ]
    }
  },
  watch: {
    remainTime (value) {
      if (value === 0) {
        alert(`游戏结束，你的总分为${this.grade}`)
        this.stop()
      }
    }
  },
  methods: {
    start () {
      clearInterval(TIMER)
      TIMER = setInterval(() => {
        this.remainTime--
      }, 1000)
    },
    stop () {
      clearInterval(TIMER)
      this.remainTime = 10
      this.grade = 0
    },
    pause () {
      clearInterval(TIMER)
    },
    stepOn (color, index, array = []) {
      if (!TIMER) {
        return
      }
      if (color === BLACK && index === (array.length - 1)) {
        this.whole.pop()
        const newLine = []
        let flag = Math.floor(Math.random() * 4)
        for (let i = 0; i < 4; i++) {
          if (i === flag) {
            newLine.push({
              color: BLACK
            })
          } else {
            newLine.push({
              color: WHITE
            })
          }
        }

        this.whole.unshift(newLine)
        this.grade++
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
button
  height 30px
.WHITE
  background-color white
.BLACK
  background-color black
.grade
  font-size 24px
  color rgba(0,0,0,.87)
  padding-left 15px
.remainTime
  font-size 24px
  color blue
  padding-left 15px
.box
  width 402px
  height 602px
  margin 0 auto
  .line
    width 400px
    height 100px
    display flex
  .lattice
    width 100px
    height 100px
    border 1px solid gray
  .lattice:hover
    cursor pointer
</style>
