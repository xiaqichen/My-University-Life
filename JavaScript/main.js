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
  { songName: '神のまにまに', songDesc: '大家都深爱着地球', songImg: 'ワンダーランズ×ショウタイム - 神のまにまに (feat. 天馬司&鳳えむ&草薙寧々&神代類&初音ミク)' },
  { songName: 'I Walk This Earth All By Myself', songDesc: '在人世间踽踽独行', songImg: 'EKKSTACY - I Walk This Earth All By Myself' },
  { songName: 'なんでもないや', songDesc: '没什么大不了的', songImg: 'Lefty Hand Cream - なんでもないや' },
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

// 图片切换
const imgs=document.querySelectorAll('.xtx_panel_goods_1 img')
for(let i=0;i<3;i++){
  imgs[i].addEventListener('mouseenter',function(){
    imgs[i].src=`../Image/myphoto${i+4}.jpeg`
  })
  imgs[i].addEventListener('mouseleave',function(){
    imgs[i].src=`../Image/myphoto${i+1}.jpeg`
  })
}

// 热区功能
const areas=document.querySelectorAll('map area')
const book=document.querySelector('.book')

for(let i=0;i<3;i++){
  areas[i].addEventListener('click',function(){
    book.scrollTop=i*441
  })
}