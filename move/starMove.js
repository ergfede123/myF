//圆周运动函数封装
function circleMove( arr,item, r){
	// 如果是让item围绕一个元素旋转，大小不一的话，需要给item和这个元素都设置translateX、translateY-50%
	//r 是半径
	var x = arr[0];//arr是圆心arr[0]是X  arr[y]是y
	var y = arr[1];
	var jd = 0;	//角度
	var timer = setInterval( ()=>{
		jd++;
		var hd = Math.PI/180*jd;//弧度
		var BC = Math.sin(hd)*r;
		var AB = Math.cos(hd)*r;
		item.style.left = x+AB+"px";
		item.style.top = y-BC+"px";
	},20);
	
}

function startMove(elem, json, cb){	
	// 每次开启运动时，先把上一个定时器关闭掉
	clearInterval(elem.timer);
	elem.timer = setInterval(()=>{
		var flag = true; // 假设所有属性，都达到了目标值
		for( var attr in json ){	
			// 获取目标值（终点）
			var target = json[attr];
			// 获取当前值（每一次运行时的起点）
			var v = getComputedStyle(elem)[attr];
			if(attr == "opacity"){  // 0-1    target=100时，完全显示；target=0时透明；
				v = Math.round(v*100);
			}else{
				v = parseInt(v);
			}
			
			var step = (target-v)/6;// 求这一次运行时的步长：差值/2，缓冲运动
			
			if( step<0 ){
				step = Math.floor(step);
			}else{
				step = Math.ceil(step);
			}
			// 更新
			if(attr == "opacity"){
				elem.style[attr] = (v+step)/100;
			}else{
				elem.style[attr] = v+step+"px";
			}
			// 判断是否更新到了目标值
			if( v != target ){
				// 众多的属性中，至少有1个属性没有到达目标值
				flag = false;
			}
		}
		// 判断是否所有属性均到了目标值
		if( flag ){
			clearInterval(elem.timer);
			// 回调函数
			if( cb ){
				cb();
			}
		}
	}, 10);	
}




























