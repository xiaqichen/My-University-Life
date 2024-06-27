
// 实现elevator导航功能
const elevatorList=document.querySelector('.elevator ul')
const target =document.querySelector('.target')
const iframe=target.querySelector('iframe')

iframe.height=1527

elevatorList.addEventListener('click',function(e){
  if(e.target.tagName==='A'){
    elevatorList.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    iframe.src=`./${e.target.dataset.name}.html`
    iframe.height=+e.target.dataset.ht // 自动调整iframe高度
    document.documentElement.scrollTop=0
  }
})











