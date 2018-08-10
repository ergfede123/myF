function peng(box1,box2){
	var a = getPosition(box1).right > getPosition(box2).left;
	var b = getPosition(box1).left < getPosition(box2).right;
	var c=  getPosition(box1).bottom > getPosition(box2).top;
	var d = getPosition(box1).top < getPosition(box2).bottom;
	if( a && b && c && d ){
		return true;
	}else{
		return false;
	}
}