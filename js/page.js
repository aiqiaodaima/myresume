var btn = document.getElementsByTagName("button")[0];
var span = document.querySelectorAll(".draw span");
var page = document.querySelectorAll('header-nav li')[3]
var showCircle = function() {
var PI = Math.PI;
return {
    draw: function(r/*半径*/, _x/*x轴偏移*/, _y/*y轴偏移*/) {
            // 获得x y坐标
        var x, y;
        var j = 0;
			timer2 = setInterval(function  () {
			x = Math.cos(PI / 180 * j) * r + _x;
            y = Math.sin(PI / 180 * j) * r + _y;
            var O = document.createElement('p');
            var div = document.querySelectorAll('.draw')[0];
            div.appendChild(O);
            O.style.left = x + 'px';
            O.style.top = y + 'px';
            j+=2;
            if(j==362){
			j=0;
			clearInterval(timer2)
			}
		},30)      
    }
}
}();

btn.onclick= function  () {
	showCircle.draw(45, 45, 45);
	var pi = Math.PI;
	var i = 0;
	timer1 = setInterval(function(){
		span[1].style.transform =  "rotateZ("+i+"deg)";
		span[0].innerText =parseInt(i/360*100)+"%" ;
		i+=2;
		if(i==362){
			i=0;
			clearInterval(timer1)
		}	
	},30);
}