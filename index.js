var worker = new Worker('cal.js')
var i = 100
var ele = document.getElementById('btn')
// 点击按钮执行计算
ele.addEventListener('click', function(){
	worker.postMessage(i) // 发送内容
	worker.onmessage = function(e) {
		alert(e.data)
	}
})