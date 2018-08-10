
function get(url,fn){
	//创建核心对象
	var xhr;
	if( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else{
		//兼容 写法
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
		//或者new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//建立连接
	xhr.open( "GET",url,true );
	
	//发送请求
	xhr.send();
	
	//接收响应的函数
	xhr.onreadystatechange = function(){
		if( xhr.readyState==4 && xhr.status==200  ){
			//回调函数
			if( fn ){
				fn( xhr.responseText );
			}
		}
	}
}


function post( url,data,fn ){
	//创建核心对象
	var xhr;
	if( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else{
		//兼容 写法
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	
	//建立连接
	xhr.open( "POST",url,true );
	
	//设置请求头
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//发送请求
	xhr.send( data );
	//接收响应的监听函数
	xhr.onreadystatechange = function(){
		if( xhr.readyState==4 && xhr.status==200 ){
			if( fn ){
				fn( xhr.responseText );
			}
		}
	}
	
}





//readyState 指请求状态
//	0：请求未初始化（还没有调用 open()）。
//	1：请求已经建立，但是还没有发送（还没有调用 send()）。
//	2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
//	3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
//	4：响应已完成；您可以获取并使用服务器的响应了。
//status 指http状态（常用的http状态码，稍微了解下即可）
//	200：ok，页面正确打开，并得到完整的响应内容。
//	301：被请求的资源已永久移动到新位置
//	302：请求的资源临时从不同的 URI响应请求
//	304：缓存
//	404：页面不存在。
//	500：常指后端代码发生错误
//	503：由于临时的服务器维护或者过载，服务器当前无法处理请求。