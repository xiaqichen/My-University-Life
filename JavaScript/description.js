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
  { songName: 'Call of Silence', songDesc: '这首歌敬自由', songImg: 'Clear Sky - Call of Silence（Clear Sky Remix）' },
  { songName: 'theDOGS', songDesc: '这首歌致未来', songImg: 'mpi - theDOGS' },
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