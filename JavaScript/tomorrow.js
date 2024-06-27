


//音乐播放器的实现
const lf=document.querySelectorAll('.lf img')
const ps=document.querySelectorAll('.lf p')
const audio = document.getElementById('mp3Btn')
const songsPic = document.getElementById('songsPic')
const lyricsContainer = document.getElementById("lyrics");

//播放完毕(未完成)
// audio.addEventListener('ended',function(){
//   this.src='../Image/播放.png'
// })
let songsNum=0
const songs=[
  { songName: '花の塔', songDesc: '花之塔 (TV动画《莉可丽丝》片尾曲)', songImg: 'さユり - 花の塔' ,lrc:`[00:00.000] 作词 : さユり
[00:01.000] 作曲 : さユり
[00:02.000] 编曲 : 宮田“レフティ”リョウ
[00:13.996]君が持ってきた漫画
[00:16.130]くれた知らない名前のお花
[00:19.790]今日はまだ来ないかな？
[00:22.169]初めての感情知ってしまった
[00:25.358]
[00:25.896]窓に飾った絵画をなぞってひとりで宇宙を旅して
[00:31.474]それだけでいいはずだったのに
[00:36.991]
[00:37.781]君の手を握ってしまったら
[00:43.093]孤独を知らないこの街には
[00:49.493]もう二度と帰ってくることはできないのでしょう
[01:00.165]君が手を差し伸べた　光で影が生まれる
[01:11.310]歌って聞かせて　この話の続き
[01:17.177]連れて行って見たことない星まで
[01:26.488]
[01:34.481]誰の手も声も届かない
[01:36.865]高く聳え立った塔の上へ
[01:39.801]飛ばすフウセンカズラ
[01:42.708]僕は君に笑って欲しいんだ
[01:45.896]
[01:46.435]満たされない穴は惰性の会話や澄ましたポーズで
[01:52.032]これまでは埋めてきたけど
[01:57.234]
[01:57.234]退屈な日々を蹴散らして
[02:02.221]君と二人でこの街中を泳げたら
[02:10.132]それはどれだけ素敵なことでしょう？
[02:19.176]出したことないほど大きな声でやっと君に伝わる
[02:30.609]歪なくらいがさ　きっとちょうどいいね
[02:36.217]世界の端と端を結んで
[02:45.501]
[02:54.267]窓に飾った絵画をなぞってひとりで宇宙を旅して
[02:59.850]それだけでも不自由ないけど
[03:05.184]僕は選んでみたいの
[03:07.767]高鳴る心　謎だらけの空を
[03:11.229]安全なループを今、書き換えて！
[03:19.192]
[03:19.995]君の手を握ってしまったら
[03:25.578]孤独を知らないこの街にはもう二度と
[03:33.491]帰ってくることはできないのでしょう
[03:42.549]いくらでも迷いながら光も影も見に行こう
[03:53.919]歌って聞かせてこの話の続き
[03:59.503]連れて行って見たことない星まで
[04:11.188]世界の端と端を結んで
`},
  { songName: 'I Really Want to Stay At Your House', songDesc: '动画《赛博朋克》插曲', songImg: 'Samuel Kim,Lorien - I Really Want to Stay at Your House' ,lrc:`
[00:01.420]I couldn't wait for you to come clear the cupboards
[00:09.070]But now you're going to leave with nothing but a sign
[00:16.610]Another evening I'll be sitting reading in between your lines
[00:24.350]Because I miss you all the time
[00:29.240]
[00:30.530]So, get away
[00:32.720]Another way to feel what you didn't want yourself to know
[00:37.150]And let yourself go
[00:39.750]You know you didn't lose your self-control
[00:43.870]Let's start at the rainbow
[00:46.720]Turn away
[00:47.840]Another way to be where you didn't want yourself to go
[00:52.670]Let yourself go
[00:55.170]Is that a compromise
[00:59.520]
[01:00.460]So what do you wanna do, what's your point-of-view
[01:04.420]There's a party soon, do you wanna go
[01:08.280]A handshake with you, what's your point-of-view
[01:12.159]I'm on top of you, I don't wanna go
[01:15.500]'Cause I really wanna stay at your house
[01:19.730]And I hope this works out
[01:23.170]But you know how much you broke me apart
[01:26.049]I'm done with you, I'm ignoring you
[01:29.379]I don't wanna know
[01:32.319]
[01:41.180]And I'm aware that you were lying in the gutter
[01:48.870]'Cause I did everything to be there by your side-ide
[01:56.530]So when you tell me I'm the reason I just can't believe the lies
[02:04.299]And why do I so want to call you
[02:08.780]
[02:09.639]So what do you wanna do, what's your point-of-view
[02:13.599]There's a party soon, do you wanna go
[02:17.530]A handshake with you, what's your point-of-view
[02:21.300]I'm on top of you, I don't wanna go
[02:24.680]'Cause I really wanna stay at your house
[02:28.900]And I hope this works out
[02:32.340]But you know how much you broke me apart
[02:35.110]I'm done with you, I'm ignoring you
[02:38.539]I don't wanna know
[02:41.280]
[02:41.400]You
[02:48.210]Oh-oh-oh
[02:50.960]I don't know why I'm no-one
[02:56.400]So, get away
[02:56.657]
[02:58.370]Another way to feel what you didn't want yourself to know
[03:02.860]And let yourself go
[03:05.710]You know you didn't lose your self-control
[03:09.680]Let's start at the rainbow
[03:12.620]Turn away
[03:13.840]Another way to be where you didn't want yourself to go
[03:18.379]Let yourself go
[03:20.970]Is that a compromise
[03:23.879]
[03:30.220]So what do you wanna do, what's your point-of-view
[03:34.120]There's a party soon, do you wanna go
[03:38.060]A handshake with you, what's your point-of-view
[03:41.860]I'm on top of you, I don't wanna go
[03:45.289]'Cause I really wanna stay at your house
[03:49.440]And I hope this works out
[03:52.960]But you know how much you broke me apart
[03:55.759]I'm done with you, I'm ignoring you
[03:59.199]I don't wanna know
`},
  { songName: '5:20AM', songDesc: '我在5:20睡觉13:14准时起', songImg: '刀酱 - 5_20AM' ,lrc:`[00:00.00] 制作人 : 果妹/田碧川
[00:01.00] 编曲 : 马海昕
[00:02.00] 作曲 : soldier
[00:03.00] 作词 : soldier
[00:07.71]监制 EXECUTIVE PRODUCER: LIL王哥
[00:08.73]推广 MUSIC MARKETING:蜜糖/杰里米
[00:11.73]推广协力 MARKETING ASSISTENCE:易超
[00:12.42]统筹 COORDINATION：苏文嫒
[00:13.02]艺人经纪 ARTIST AGENT: ATONEVOOM
[00:15.06]企划:果妹/蜜糖
[00:15.48]出品人:如风/糖糖
[00:15.81] OP:网易子弹/青云 LAB
[00:16.38] SP:网易子弹/青云 LAB
[00:16.89]本作品经过原词曲作者以及版权公司授权
[00:18.18]我在5:20睡觉13:14准时起
[00:18.81]主打个浪漫沉溺在爱河不上岸
[00:21.09]爱你在本职里
[00:22.32]碎花洋裙站在我的面前
[00:24.36]那时候帅的就像闪电
[00:26.25]外面的乌云深深浅浅
[00:28.05]我说留在我房间吃碗面
[00:29.97]然后你的双手搭在我的胸口
[00:32.04]开始控制不住牵你手
[00:33.81]每天下班后带你转郑州
[00:35.91]我们一起走过的每个街口
[00:37.83]死去的回忆开始攻击我
[00:39.63]你的香味又袭来了
[00:41.64]为谁被谁变成了傀儡
[00:43.65]发现再也没有什么我所期待的
[00:46.17]我感觉躲不掉像云朵躲不过风
[00:50.07]我们被吹的越来越远变得如此陌生
[00:53.85]乌云在阴天里偷偷的经过
[00:57.06]怎么越遥远的看的越清澈
[00:58.98]得了忘不掉记不清的病
[01:00.84]我越难过这 beat越顶
[01:02.70]众人皆醉我独醒
[01:04.65]我看透人心百毒不侵
[01:06.42]却再也看不清那张合影
[01:08.49]我的心大部分时间是冰的
[01:10.53]曾经和死神有过一*情
[01:12.33]我是最热烈最纯粹的星座
[01:14.37]脑子里除了金钱就是性
[01:16.41]我在5:20睡觉13:14准时起
[01:20.10]主打个浪漫沉溺在爱河不上岸
[01:22.56]爱你在本职里
[01:23.82]碎花洋裙站在我的面前
[01:25.80]那时候帅的就像闪电
[01:27.69]外面的乌云深深浅浅
[01:29.49]我说留在我房间吃碗面
[01:31.41]然后你的双手搭在我的胸口
[01:33.48]开始控制不住牵你手
[01:35.25]每天下班后带你转郑州
[01:37.35]我们一起走过的每个街口
[01:39.24]死去的回忆开始攻击我
[01:41.07]你的香味又袭来了
[01:43.08]为谁被谁变成了傀儡
[01:45.06]发现再也没有什么我所期待的
[01:47.19]没有任何期待没有意外
[01:48.93]不会再轻易对谁产生依赖
[01:51.06]屋里一片狼藉脑海中的亡妻
[01:52.98]漫步在她给我留下的灰色地带
[01:54.90]别用分开来证明分不开
[01:56.79]别到结束了才认为真不该
[01:58.83]Here's to the past, dance all night
[02:02.85]俺是河南嘞河南洛阳嘞
[02:06.48]从平顶山带你转到许昌
[02:08.34]再从开封转到新乡
[02:10.47]俺是河南嘞河南洛阳嘞
[02:13.86]带你转信阳南阳濮阳安阳
[02:16.23]做你嘞小太阳，
[02:18.15]俺是河南嘞河南洛阳嘞
[02:21.81]从鹤壁转到焦作三门峡到驻马店
[02:23.94]带你转漯河
[02:25.86]俺是河南嘞河南洛阳嘞
[02:29.16]带你转周口带你转商丘
[02:31.14]恁咋不早说咱俩某以后
`},
]
let lrcContent = `[00:00.000] 作词 : さユり
[00:01.000] 作曲 : さユり
[00:02.000] 编曲 : 宮田“レフティ”リョウ
[00:13.996]君が持ってきた漫画
[00:16.130]くれた知らない名前のお花
[00:19.790]今日はまだ来ないかな？
[00:22.169]初めての感情知ってしまった
[00:25.358]
[00:25.896]窓に飾った絵画をなぞってひとりで宇宙を旅して
[00:31.474]それだけでいいはずだったのに
[00:36.991]
[00:37.781]君の手を握ってしまったら
[00:43.093]孤独を知らないこの街には
[00:49.493]もう二度と帰ってくることはできないのでしょう
[01:00.165]君が手を差し伸べた　光で影が生まれる
[01:11.310]歌って聞かせて　この話の続き
[01:17.177]連れて行って見たことない星まで
[01:26.488]
[01:34.481]誰の手も声も届かない
[01:36.865]高く聳え立った塔の上へ
[01:39.801]飛ばすフウセンカズラ
[01:42.708]僕は君に笑って欲しいんだ
[01:45.896]
[01:46.435]満たされない穴は惰性の会話や澄ましたポーズで
[01:52.032]これまでは埋めてきたけど
[01:57.234]
[01:57.234]退屈な日々を蹴散らして
[02:02.221]君と二人でこの街中を泳げたら
[02:10.132]それはどれだけ素敵なことでしょう？
[02:19.176]出したことないほど大きな声でやっと君に伝わる
[02:30.609]歪なくらいがさ　きっとちょうどいいね
[02:36.217]世界の端と端を結んで
[02:45.501]
[02:54.267]窓に飾った絵画をなぞってひとりで宇宙を旅して
[02:59.850]それだけでも不自由ないけど
[03:05.184]僕は選んでみたいの
[03:07.767]高鳴る心　謎だらけの空を
[03:11.229]安全なループを今、書き換えて！
[03:19.192]
[03:19.995]君の手を握ってしまったら
[03:25.578]孤独を知らないこの街にはもう二度と
[03:33.491]帰ってくることはできないのでしょう
[03:42.549]いくらでも迷いながら光も影も見に行こう
[03:53.919]歌って聞かせてこの話の続き
[03:59.503]連れて行って見たことない星まで
[04:11.188]世界の端と端を結んで
`;

// 歌词同步滚动效果

// Parse LRC file content
function parseLRC(data) {
  const lines = data.split('\n');
  const lyrics = [];
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  lines.forEach(line => {
      const match = timeRegExp.exec(line);
      if (match) {
          const minutes = parseInt(match[1], 10);
          const seconds = parseInt(match[2], 10);
          const milliseconds = parseInt(match[3], 10);
          const time = minutes * 60 + seconds + milliseconds / 1000;
          const text = line.replace(timeRegExp, '').trim();
          if (text) {
              lyrics.push({ time, text });
          }
      }
  });

  return lyrics;
}
let lyrics = parseLRC(lrcContent);
let isPausedOnHover = false; // 标记是否因为悬停而暂停滚动
function f2(){     
  const currentTime = audio.currentTime;
  for (let i = 0; i < lyrics.length; i++) {         
    if (currentTime >= lyrics[i].time && (!lyrics[i + 1] || currentTime < lyrics[i + 1].time)) {
        document.querySelectorAll('.lyric-line').forEach(line => {
            line.classList.remove('highlight');
        });
        const currentLine = document.getElementById('lyric-' + i);
        currentLine.classList.add('highlight');
        if (isPausedOnHover) break; // 如果因为悬停而暂停，则直接返回
        lyricsContainer.scrollTop = currentLine.offsetTop-70;
        break;
    }
  }
}
function f1(){
  displayLyrics(lyrics);
  syncLyrics(lyrics);
  // 在容器中显示歌词
  function displayLyrics(lyrics) {
      lyricsContainer.innerHTML = '';

      // 在容器首部添加一个空行
      const emptyLineStart = document.createElement('div');
      emptyLineStart.classList.add('lyric-line');
      emptyLineStart.style.height = '21px';
      lyricsContainer.appendChild(emptyLineStart);

      // 遍历每一行歌词
      lyrics.forEach((lyric, index) => {
          const line = document.createElement('div');
          line.classList.add('lyric-line');
          line.id = 'lyric-' + index;
          line.textContent = lyric.text;
          lyricsContainer.appendChild(line);
      });

      // 在容器尾部添加一个空行
      const emptyLineEnd = document.createElement('div');
      emptyLineEnd.classList.add('lyric-line');
      emptyLineEnd.style.height = '21px';
      lyricsContainer.appendChild(emptyLineEnd);
  }
  lyricsContainer.scrollTop=0
  // 同步歌词与音频播放
  function syncLyrics(lyrics) {
    
    // 鼠标悬停时暂停滚动
    lyricsContainer.addEventListener('mouseenter', function() {
        isPausedOnHover = true;
    });
    // 鼠标移出时恢复滚动
    lyricsContainer.addEventListener('mouseleave', function() {
        isPausedOnHover = false;
    });
    
    audio.addEventListener('timeupdate', f2);
  }
}

document.addEventListener("DOMContentLoaded", f1);

// 点击事件
lf[0].addEventListener('click',function(){
  songsNum=(songsNum+2)%songs.length
  ps[0].innerText=songs[songsNum].songName
  ps[1].innerText=songs[songsNum].songDesc
  songsPic.src=`../Image/${songs[songsNum].songImg}.jpg`
  audio.src=`../Sound/${songs[songsNum].songImg}.mp3`
  lf[1].src='../Image/暂停.png'
  lrcContent=songs[songsNum].lrc
  lyrics = parseLRC(lrcContent);
  audio.removeEventListener('timeupdate', f2)
  f1()
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
  lf[1].src='../Image/暂停.png'
  lrcContent=songs[songsNum].lrc
  lyrics = parseLRC(lrcContent);
  audio.removeEventListener('timeupdate', f2)
  f1()
})