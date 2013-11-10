function cambio(){
	var div2=document.getElementById('main');
	div2.setAttribute('class','bounceOut animated');


	var div=document.getElementById('content')
	div.setAttribute('class',' join bounceIn animated');


	setTimeout(function(){
		div2.style.display='none';
	},1100);
	return false;
}