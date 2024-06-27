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
  { songName: 'My Dearest', songDesc: '樱花满地集于我心', songImg: 'supercell - My Dearest' },
  { songName: 'Dehors', songDesc: '马六甲海峡进行曲', songImg: 'JORDANN - Dehors' },
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

// 导航列表的实现
const guidance=document.querySelector('.guidance')
const nowList=document.querySelector('.nowList')
const banner=document.querySelector('.banner')
const List=document.querySelectorAll('.nowList li')

for(let i=0;i<List.length;i++){
  List[i].style.display='none'
}

guidance.addEventListener('mouseenter',function(){
  for(let i=0;i<List.length;i++){
    List[i].style.display=''
  }
})
nowList.addEventListener('mouseleave',function(){
  for(let i=0;i<List.length;i++){
    List[i].style.display='none'
  }
})

nowList.addEventListener('click',function(e){
  if(e.target.tagName==='A'){
    banner.scrollTop=(+e.target.dataset.num)*420
    nowList.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
  }
})

// 返回按钮的实现
const returns=document.querySelectorAll('.nowContent li .return')
for(let i=0;i<returns.length;i++){
  returns[i].addEventListener('click',function(){
    banner.scrollTop=0
    nowList.querySelector('.active').classList.remove('active')
    List[0].children[0].classList.add('active')
  })
}

