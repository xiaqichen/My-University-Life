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
  { songName: '夢灯籠', songDesc: '梦灯笼', songImg: 'RADWIMPS - 夢灯籠' },
  { songName: '还是分开', songDesc: '誓言是说到做到', songImg: '张叶蕾 - 还是分开' },
  { songName: '前前前世', songDesc: '哪一世的记忆', songImg: 'RADWIMPS - 前前前世 (movie ver.)' },
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


// 表单验证

// 验证的是用户名
const username = document.querySelector('[name=username]')
//使用change事件  值发生变化的时候
username.addEventListener('change', verifyName)
// verifyPhone
function verifyName() {
  const span = username.nextElementSibling
  // 定规则  
  const reg = /^[a-zA-Z0-9]{6,10}$/
  if (!reg.test(username.value)) {
    span.innerText = '输入不合法,请输入6~10位字母或数字'
    return false
  }
  // 合法的 就清空span
  span.innerText = ''
  return true
}

// 证的是密码框
// 获取密码表单
const password = document.querySelector('[name=password]')
//使用change事件  值发生变化的时候
password.addEventListener('change', verifyPwd)
// verifyPhone
function verifyPwd() {
  const span = password.nextElementSibling
  // 定规则  密码
  const reg = /^[a-zA-Z0-9-_]{6,20}$/
  if (!reg.test(password.value)) {
    span.innerText = '输入不合法,6~20位数字字母符号组成'
    return false
  }
  // 合法的 就清空span
  span.innerText = ''
  return true
}

// 验证的是性别
const gender = document.querySelectorAll('[name=gender]')
//使用change事件  值发生变化的时候
gender[0].addEventListener('change', verifyGender)
gender[1].addEventListener('change', verifyGender)
// verify
function verifyGender() {
  const span = document.querySelector('div[data-prop="gender"] .msg')
  //定规则  
  if ((!gender[0].checked)&&(!gender[1].checked)) {
    span.innerText = '请选择您的性别'
    return false
  }
  // 合法的 就清空span
  span.innerText = ''
  return true
}


// 验证的是家乡
const hometown = document.querySelector('[name=hometown]')
//使用change事件  值发生变化的时候
hometown.addEventListener('change', verifyHt)
// verify
function verifyHt() {
  const span = hometown.nextElementSibling
  //定规则  
  if (!hometown.selectedIndex) {
    span.innerText = '请选择您的家乡'
    return false
  }
  // 合法的 就清空span
  span.innerText = ''
  return true
}

// 提交模块
const submit = document.querySelector('.submit')
submit.addEventListener('click', function (e) {
  // 依次判断上面的每个框框 是否通过，只要有一个没有通过的就阻止
  e.preventDefault()
  verifyName()
  verifyPwd()
  verifyGender()
  verifyHt()
  if(verifyName()&&verifyPwd()&&verifyGender()&&verifyHt()){
    alert('提交成功')
    location.reload()
  }   
  else{
    alert('提交失败，请检查您的表单是否填写完整')    
  }
})

// 重置模块
const reset = document.querySelector('.reset')
reset.addEventListener('click', function (e) {
  location.reload()
})

