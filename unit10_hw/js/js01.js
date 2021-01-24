
var arrImg = document.getElementsByTagName('img');

var arrSrcImg = [];

for (var i = 0; i < arrImg.length; i++) {
	arrSrcImg.push(arrImg[i].getAttribute('src'));
}

var index = 0;
arrImg[index].parentNode.style.display = "block";

var btnPrev = document.getElementsByClassName('btn-prev')[0];
var btnNext = document.getElementsByClassName('btn-next')[0];

btnPrev.addEventListener('click', fnPrev,false);
btnNext.addEventListener('click', fnNext,false);

function fnPrev(){
	if (index==0) {
		index = arrSrcImg.length -1 ;
	}
	else{
		index --;
	}

	for (var i = 0; i < arrSrcImg.length; i++) {
		arrImg[i].parentNode.style.display = 'none';
	}
	arrImg[index].parentNode.style.display = 'block';
}

function fnNext(){
	if (index == arrSrcImg.length - 1) {
		index = 0;
	}
	else{
		index ++;
	}

	for (var i = 0; i < arrSrcImg.length; i++) {
		arrImg[i].parentNode.style.display = 'none';

	}
	arrImg[index].parentNode.style.display = 'block';
}


// setInterval()