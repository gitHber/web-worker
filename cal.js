var onmessage = function(e){
	var data = e.data
	for(let i =0; i<data; i++){
		// 计算的代码
		console.log(i)
	}
	postMessage(data) // 返回数据
}