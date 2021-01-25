var fullName 		= document.getElementById('fullName');
var email  			= document.getElementById('mail');
var phoneBumber 	= document.getElementById('phoneNumb');
var password 		= document.getElementById('pass');
var confirmPassword = document.getElementById('confirmPass');
var btn			= document.getElementById('btn-login');

fullName.addEventListener('blur', checkNameBlur);
fullName.addEventListener('focus', checkNameForcus);

email.addEventListener('blur', checkMailBlur);
email.addEventListener('focus', checkMailForcus);

phoneBumber.addEventListener('blur', checkPhoneBlur);
phoneBumber.addEventListener('focus', checkPhoneForcus);

password.addEventListener('blur', checkPassBlur);
password.addEventListener('focus', checkPassForcus);

confirmPassword.addEventListener('blur', checkConfirmPassBlur);
confirmPassword.addEventListener('focus', checkConfirmPassForcus);

function submit() {
	if(checkNameBlur()) {
		alert("dsfdfdf");
	}
}



//event feild họ và tên
function checkNameBlur() {
	if(fullName.value.length < 8) {
		fullName.style.border="1px solid red";
		document.getElementsByTagName('i')[0].style.display="block";

		document.getElementsByTagName('i')[0].addEventListener('click', function() {
			document.querySelectorAll('.frm-row p')[0].style.display="block";
			document.querySelectorAll('.frm-row p')[0].innerHTML="Tên không được để trống và phải lớn hơn 8 ký tự";
		});

		return false;
	}else {
		document.getElementById('fullName').style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[0].style.display="none";
		document.querySelectorAll('.frm-row p')[0].style.display="none";

		return true;
	}
}

function checkNameForcus() {
	fullName.style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[0].style.display="none";
	document.querySelectorAll('.frm-row p')[0].style.display="none";
}

// ket thúc xu ly voi feild ho ten

//.............................................................................................
// xu ly voi truong emai

function checkMailBlur() {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(email.value == "" || !filter.test(email.value)) {
		document.getElementById('mail').style.border="1px solid red";
		document.getElementsByTagName('i')[1].style.display="block";

		document.getElementsByTagName('i')[1].addEventListener('click', function() {
			document.querySelectorAll('.frm-row p')[1].style.display="block";
			document.querySelectorAll('.frm-row p')[1].innerHTML="Bạn vui lòng nhập lại Email";
		});
	}else {
		document.getElementById('mail').style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[1].style.display="none";
		document.querySelectorAll('.frm-row p')[1].style.display="none";
	}
}

function checkMailForcus() {
	document.getElementById('mail').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[1].style.display="none";
	document.querySelectorAll('.frm-row p')[1].style.display="none";
}


//.................................................................................
// xu ly voi sdt

function checkPhoneBlur() {
	var filter = /[0-9]/;

	if(phoneBumber.value == "" || !filter.test(phoneBumber.value)) {
		phoneBumber.style.border="1px solid red";
		document.getElementsByTagName('i')[2].style.display="block";

		document.getElementsByTagName('i')[2].addEventListener('click', function() {
			document.querySelectorAll('.frm-row p')[2].style.display="block";
			document.querySelectorAll('.frm-row p')[2].innerHTML="Vui lòng nhập lại số điện thoại";
		});
	}else {
		phoneBumber.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[2].style.display="none";
	}
}

function checkPhoneForcus() {
	document.getElementById('phoneNumb').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[2].style.display="none";
	document.querySelectorAll('.frm-row p')[2].style.display="none";
}

// xu ly voi mk
/*.............mật khẩu .............*/

function checkPassBlur() {
	if(password.value == '' || password.value.length < 6) {
		password.style.border="1px solid red";
		document.getElementsByTagName('i')[3].style.display="block";

		document.getElementsByTagName('i')[3].addEventListener('click', function() {
			document.querySelectorAll('.frm-row p')[3].style.display="block";
			document.querySelectorAll('.frm-row p')[3].innerHTML="Vui lòng nhập mật khẩu lớn hơn 6 ký tự";
		});
	}else {
		password.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[3].style.display="none";
	}
}

function checkPassForcus() {
	document.getElementById('pass').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[3].style.display="none";
	document.querySelectorAll('.frm-row p')[3].style.display="none";
}


/* .......... xác nhận mật khẩu..........*/
function checkConfirmPassBlur() {
	if(confirmPassword.value != password.value) {
		confirmPassword.style.border="1px solid red";
		document.getElementsByTagName('i')[4].style.display="block";

		document.getElementsByTagName('i')[4].addEventListener('click', function() {
			document.querySelectorAll('.frm-row p')[4].style.display="block";
			document.querySelectorAll('.frm-row p')[4].innerHTML="Mật khẩu không khớp";
		});
	}else {
		confirmPassword.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[4].style.display="none";
	}
}

function checkConfirmPassForcus() {
	document.getElementById('confirmPass').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[4].style.display="none";
	document.querySelectorAll('.frm-row p')[4].style.display="none";
}

/*.............Button......................*/