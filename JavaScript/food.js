//音乐播放器的实现
const lf=document.querySelectorAll('.lf img')
const ps=document.querySelectorAll('.lf p')
const audio = document.getElementById('mp3Btn')
const songsPic = document.getElementById('songsPic')

//播放完毕(未完成)
// audio.addEventListener('ended',function(){
//   this.src='../Image/播放.png'
// })
let songsNum=0
const songs=[
  { songName: 'スパークル', songDesc: '君の名は。', songImg: 'RADWIMPS - スパークル (movie ver.)' },
  { songName: '星茶会', songDesc: '星空总是这样明洁', songImg: '灰澈 - 星茶会' },
  { songName: '三葉のテーマ', songDesc: '三叶的主题曲', songImg: 'RADWIMPS - 三葉のテーマ' },
]

// 点击事件
lf[0].addEventListener('click',function(){
  songsNum=(songsNum+2)%songs.length
  ps[0].innerText=songs[songsNum].songName
  ps[1].innerText=songs[songsNum].songDesc
  songsPic.src=`../Image/${songs[songsNum].songImg}.jpg`
  audio.src=`../Sound/${songs[songsNum].songImg}.mp3`
  lf[1].src='../Image/播放.png'
})
lf[1].addEventListener('click',function(){
  if(audio.paused){ //如果当前是暂停状态
    audio.play()
    this.src='../Image/暂停.png'
  }else{
    audio.pause()
    this.src='../Image/播放.png'
  }
})
lf[2].addEventListener('click',function(){
  songsNum=(songsNum+1)%songs.length
  ps[0].innerText=songs[songsNum].songName
  ps[1].innerText=songs[songsNum].songDesc
  songsPic.src=`../Image/${songs[songsNum].songImg}.jpg`
  audio.src=`../Sound/${songs[songsNum].songImg}.mp3`
  lf[1].src='../Image/播放.png'
})




// 1. 初始数据
const data = [
  { url: '../Image/美食1.jpg', title: '酥炸茄盒', color: 'rgb(100, 67, 68)' },
  { url: '../Image/美食2.jpg', title: '番茄炖牛肉', color: 'rgb(43, 35, 26)' },
  { url: '../Image/美食3.jpg', title: '草莓焦糖炖蛋白', color: 'rgb(36, 31, 33)' },
  { url: '../Image/美食4.jpg', title: '孜然肥羊卷', color: 'rgb(139, 98, 66)' },
  { url: '../Image/美食5.jpg', title: '豆沙粽~', color: 'rgb(67, 90, 92)' },
  { url: '../Image/美食6.jpg', title: '皮蛋瘦肉粥', color: 'rgb(166, 131, 143)' },
]
// 获取元素
const img = document.querySelector('.slider-wrapper img')
const p = document.querySelector('.slider-footer p')
const footer = document.querySelector('.slider-footer')
// 1. 右按钮业务
// 1.1 获取右侧按钮 
const next = document.querySelector('.next')
let i = 0  // 信号量 控制播放图片张数
// 1.2 注册点击事件

next.addEventListener('click', function () {
  // console.log(11)
  i++
  // 1.6判断条件  如果大于8 就复原为 0
  // if (i >= 8) {
  //   i = 0
  // }
  i = i >= data.length ? 0 : i
  // 1.3 得到对应的对象
  // console.log(data[i])
  // 调用函数
  toggle()
})

// 2. 左侧按钮业务
// 2.1 获取左侧按钮 
const prev = document.querySelector('.prev')
// 1.2 注册点击事件
prev.addEventListener('click', function () {
  i--
  // 判断条件  如果小于0  则爬到最后一张图片索引号是 7
  // if (i < 0) {
  //   i = 7
  // }
  i = i < 0 ? data.length - 1 : i
  // 1.3 得到对应的对象
  // console.log(data[i])
  // 调用函数
  toggle()
})

// 声明一个渲染的函数作为复用
function toggle() {
  // 1.4 渲染对应的数据
  img.src = data[i].url
  p.innerHTML = data[i].title
  footer.style.backgroundColor = data[i].color
  // 1.5 更换小圆点    先移除原来的类名， 当前li再添加 这个 类名
  document.querySelector('.slider-indicator .active').classList.remove('active')
  document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
}



// 3. 自动播放模块
let timerId = setInterval(function () {
  // 利用js自动调用点击事件  click()  一定加小括号调用函数
  next.click()
}, 1000)


// 4. 鼠标经过大盒子，停止定时器
const slider = document.querySelector('.slider')
// 注册事件
slider.addEventListener('mouseenter', function () {
  // 停止定时器
  clearInterval(timerId)
})

// 5. 鼠标离开大盒子，开启定时器
// 注册事件
slider.addEventListener('mouseleave', function () {
  // 停止定时器
  if (timerId) clearInterval(timerId)
  // 开启定时器
  timerId = setInterval(function () {
    // 利用js自动调用点击事件  click()  一定加小括号调用函数
    next.click()
  }, 1000)
})