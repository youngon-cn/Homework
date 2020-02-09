class Food {
  element = []
  width = 20
  height = 20
  color = 'pink'
  x = 0
  y = 0
  constructor(width?: number, height?: number, color?: string) {
    this.width = width || 20
    this.height = height || 20
    this.color = color || 'pink'
    this.x = 0
    this.y = 0
  }
  //随机创建食物对象,渲染到map上
  init(map: HTMLElement) {
    this.remove()
    //创建div、设置css样式
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.width = `${this.width}px`
    div.style.height = `${this.height}px`
    div.style.backgroundColor = this.color
    //食物随机位置(map.offsetWidth/this.width总共多少份)

    this.x =
      Math.floor((Math.random() * map.offsetWidth) / this.width) * this.width
    this.y =
      Math.floor((Math.random() * map.offsetHeight) / this.height) * this.height
    //position/left/top/位置

    div.style.left = `${this.x}`
    div.style.top = `${this.y}`
    //追加给map
    map.appendChild(div)
    this.element.push(div)
  }
  remove() {
    this.element.forEach((item, i) => {
      item.parentNode.removeChild(item)
    })
    this.element.length = 0
  }
}

class Snake {
  element = []
  width = 20
  height = 20
  direction = 'right'
  obj = []
  constructor(width?: number, height?: number, direction?: string) {
    this.width = width || 20
    this.height = height || 20
    this.direction = direction || 'right' //设定初始蛇移动方向
    this.obj = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: '#F06868' },
      { x: 1, y: 2, color: '#F06868' }
    ]
  }
  //随机创建蛇对象,渲染到map上
  init(map: HTMLElement) {
    this.remove()
    for (let i = 0; i < this.obj.length; i++) {
      //创建div、设置css样式/追加给map
      const div = document.createElement('div')
      map.appendChild(div)
      div.style.position = 'absolute'
      div.style.width = this.width + 'px'
      div.style.height = this.height + 'px'
      div.style.backgroundColor = this.obj[i].color
      //position/left/top/位置
      div.style.left = this.obj[i].x * this.width + 'px'
      div.style.top = this.obj[i].y * this.height + 'px'
      this.element.push(div)
    }
  }
  move(food: Food, map: HTMLElement) {
    //蛇节移动
    for (let i = this.obj.length - 1; i > 0; i--) {
      this.obj[i].x = this.obj[i - 1].x
      this.obj[i].y = this.obj[i - 1].y
    }
    //蛇头移动方向
    switch (this.direction) {
      case 'right':
        this.obj[0].x += 1
        break
      case 'left':
        this.obj[0].x -= 1
        break
      case 'top':
        this.obj[0].y -= 1
        break
      case 'bottom':
        this.obj[0].y += 1
        break
    }
    let headX = this.obj[0].x * this.width
    let headY = this.obj[0].y * this.height
    //吃到食物增长
    if (headX == food.x && headY == food.y) {
      const last = this.obj[this.obj.length - 1]
      this.obj.push({
        x: last.x,
        y: last.y,
        color: last.color
      })
      food.init(map) // 调用函数,重新绘制food
    }
  }
  remove() {
    // 从最大值开始删除，采用递减的方法，删除节点
    for (let i = this.element.length - 1; i >= 0; i--) {
      this.element[i].parentNode.removeChild(this.element[i])
    }
    this.element.length = 0
  }
}

class Game {
  timeId = null
  snake: Snake
  food: Food
  map: HTMLElement
  constructor(map: HTMLElement) {
    this.food = new Food()
    this.snake = new Snake()
    this.map = map
  }
  init() {
    this.food.init(this.map)
    this.snake.init(this.map)
    this.runSnake(this.food, this.map)
    this.bindKey()
  }
  runSnake(food: Food, map: HTMLElement) {
    // setInterval(全局变量，时间) / 小蛇移动速度 / 让小蛇动起来
    this.timeId = setInterval(() => {
      this.snake.move(food, map)
      if (this.isGameOver()) return
      this.snake.init(map)
    }, 150)
  }
  // 键盘事件,控制方向
  bindKey() {
    document.addEventListener(
      'keydown',
      (e: KeyboardEvent) => {
        switch (e.keyCode) {
          case 37:
            if (this.snake.direction === 'right') return
            this.snake.direction = 'left'
            break
          case 38:
            if (this.snake.direction === 'bottom') return
            this.snake.direction = 'top'
            break
          case 39:
            if (this.snake.direction === 'left') return
            this.snake.direction = 'right'
            break
          case 40:
            if (this.snake.direction === 'top') return
            this.snake.direction = 'bottom'
            break
        }
      },
      false
    )
  }
  isGameOver() {
    const maxX = this.map.offsetWidth / this.snake.width
    const maxY = this.map.offsetHeight / this.snake.height
    const head = this.snake.obj[0]
    //超出地图范围"game over"
    if (head.x < 0 || head.x >= maxX || head.y < 0 || head.y >= maxY) {
      clearInterval(this.timeId)
      alert('game over')
      return true
    }
  }
}
