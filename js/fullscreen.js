window.onload = function  () {
	function fullScreen () {
		var box = document.getElementById('box');
		var nav = document.getElementById('nav');
		var lis = document.querySelectorAll('.header-nav .container ul li');
		lis[0].className = 'active2'
		var iW = window.innerWidth;
		var iH = window.innerHeight;
		console.log(iH);
		for(var i=0;i<6;i++){
//			box.innerHTML += '<div></div>';
			nav.innerHTML += "<span></span>";
		}
		var divs = box.querySelectorAll('.page');
		var spans = nav.getElementsByTagName('span');
		for(var i=0;i<divs.length;i++){
			divs[i].style.width = iW + 'px';
			divs[i].style.height = iH + 'px';
		}
		spans[0].className = 'active';
		
		
		wheel(box,fnDown,fnUp);
		
		var num = 0;
		var onoff = true;
		
		
		
		function hit () {
			for(var j=0;j<6;j++){
				spans[j].index = j;
				lis[j].index = j;
				spans[j].onclick = function  () {
					num = -this.index
					box.style.top = num * iH + 'px';
					setBg()
					location.reload();
				}
				lis[j].onclick = function  () {
					num = -this.index
					box.style.top = num * iH + 'px';
					setBg()
					location.reload();
				}
			}
		}
		hit()
		
		
		
		
		
		function fnDown(){
			if(onoff){
				num--;
				console.log(num);
				if(num <-(divs.length-1)){
					num = 0;
				}	
				box.style.top = num * iH + 'px';
				onoff = !onoff;
				setBg();
				setTimeout(function(){
					onoff = !onoff;
				},1500)			
			}		
		}
		
		function fnUp(){
			if(onoff){
				num++;
				if(num>0){
					num=0;
				}
				box.style.top = num * iH + 'px';
				onoff = !onoff;
				setBg();
				setTimeout(function(){
					onoff = !onoff;
				},1500)		
			}
		}
		
		
		function setBg(){
			for(var i=0;i<spans.length;i++){
				spans[i].className = '';
				lis[i].className = '';
			}
//			console.log(num);
			spans[-num].className = 'active';
			lis[-num].className ='active2'
		}
		
		function wheel(obj,fnDown,fnUp){
			var use = window.navigator.userAgent.toLowerCase();
			if(use.indexOf('firefox') == '-1'){
					obj.addEventListener('mousewheel',fn)
			}else{
				obj.addEventListener('DOMMouseScroll',fn)
			}
			function fn(ev){//兼容
				var down = true;
				if(ev.detail){				
					down = ev.detail>0?false:true;
				}else{	
					down = ev.wheelDelta<0?false:true;
				}
				if(down){
					//console.log('上')
					fnUp();
				}else{
					//console.log("下")
					fnDown();
				}
			}
		}
	}
	fullScreen();
}