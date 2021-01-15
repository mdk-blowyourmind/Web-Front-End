// alert('Hello world')


// var identify;
// identify = confirm('Ban co phai hoc vien cua Zent khong ?');
// console.log('Ban co phai Zenter ko ?', identify); 
// var age = prompt('Nhap so tuoi cua ban ? ','25');
// console.log('Tuoi cua ban la: ',age);
// document.write(age);
// document.write("<br>");

// var a = 20;
// var b = 18;



// document.write(++a);
// document.write("<br>");
// document.write(--b);
// document.write("<br>");


// document.write("<br>");

// console.log('==', a==b);
// console.log('!=', a!=b);

// var depzai = false;
// var nhagiau = true ;




// console.log('||', depzai || nhagiau);
// console.log('&&', depzai && nhagiau);
// console.log('!', !(depzai && nhagiau));

// if (depzai&&nhagiau){
// 	document.write('Yes');
// }
// else {
// 	document.write('No');
// }
// document.write("<br>");

var thu = prompt('Nhap thu: ');
thu = parseInt(thu);

switch (thu){
	case 2:
		document.write('Monday');
		break;

	case 3:
		document.write('Tuesday');
		break;

	case 4:
		document.write('wednesday');
		break;

	case 5:
		document.write('Thursday');
		break;

	case 6:
		document.write('Friday');
		break;

	case 7:
		document.write('Saturday');
		break;

	case 8:
		document.write('Sunday');
		break;

	default:
	document.write('nhap sai moi nhap lai');
}

document.write("<br>");

for (var i = 0; i < 10; i++){
	document.write('Chep phat lan thu '+ (i+1));
	document.write("<br>");
}
document.write("<br>");

var j = 0;
var S = 0;
while(S<200){
	document.write('Chep phat lan thu '+(j+1));
	S = S + j;
	j++ ; 
	document.write("<br>");
}
document.write(S);
document.write("<br>");
document.write("<br>");


var k = 1;
var S2 = 0;
do{
	document.write('Chep phat lan thu '+(k+1));
	S2 = S2 + k;
	k++;
	document.write("<br>");
}while (S2<0);
document.write(S2)
document.write("<br>");
document.write("<br>");


var a = 5;
a = parseInt(a);
var b = 10;
b= parseInt(b);
function TT(a,b){
	var tong = a + b;
	return tong;
}

console.log(TT(a,b));
document.write(TT(a,b));