$(document).ready(function() {
				// ẩn tất cả các tab khác ngoài tab 1
				$('#frm-account').show();

				// ..........
				// chạy các function định nghĩa các tab
				accountTab();
				// ..................

				// profile tab
				function profileTab() {
					$("#frm-account").hide();
					$("#frm-profile").show();

					var firstname = $('#firstname');
					var lastname = $("#lastname");
					var email 	= $("#email");
					var address = $("#address");
					var age = $("#age");

					$("#Previous").css ({
						background: '#2184be',
					});

					$('#profile').css({
						background: '#2184be',
					});
					$('#warning').css({
						background: 'gray',
					});
					$('#finish').css({
						background: 'gray',
					});
					$('#account').css ({
						background: 'gray',
					});



					age.blur(function() {
						if(isNaN(age.val()) || age.val() == "") {
							age.css({
								background: '#fbe3e4',
								border : '1px solid red',
							});
						}
					});

					age.focus(function() {
						age.css({
							background: '',
							border : '',
						});
					});

					firstname.focus(function() {
						firstname.css({
							background: '',
							border : '',
						});
					});

					lastname.focus(function() {
						lastname.css({
							background: '',
							border : '',
						});
					});

					email.focus(function() {
						email.css({
							background: '',
							border : '',
						});
					});

					email.blur(function() {
						var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
						if(!filter.test(email.val())) {
							email.css({
								background: '#fbe3e4',
								border : '1px solid red',
							});
						}
					});
					// next action
					$("#next").click(function() {
						if(firstname.val() != "" && lastname.val() != "" && email.val() != "" && age.val() != "" && !isNaN(age.val())) {
							$("#frm-profile").hide();
							warningTab(age.val());
						}else {

							if(firstname.val() == "") {
								firstname.css({
									background: '#fbe3e4',
									border : '1px solid red',
								});
							}

							if(lastname.val() == "") {
								lastname.css({
									background: '#fbe3e4',
									border : '1px solid red',
								});
							}

							if(email.val() == "") {
								email.css({
									background: '#fbe3e4',
									border : '1px solid red',
								});
							}
						}
					});


					$("#Previous").click(function() {

						$("#frm-profile").hide();
						accountTab();
					});

				}
				//end profile tab

				// warning tab
				function warningTab(tuoi) {
					$("#frm-profile").hide();
					$("#frm-warning").show();


					$('#profile').css({
						background: 'gray',
					});
					$('#warning').css({
						background: '#2184be',
					});
					$('#finish').css({
						background: 'gray',
					});
					$('#account').css ({
						background: 'gray',
					});




					if(parseInt(tuoi) >= 18 ) {
						$("#warning-c").hide();
						$("#continue-c").show();

						$("#next").click(function() {
							if($("#check").is(':checked')) {
								alert("SUMITED!")

								$('#profile').css({
									background: '#2184be',
									opacity: '0.5',
								});
								$('#finish').css({
									background: '#2184be',
									opacity: '0.5',
								});
								$('#warning').css({
									background: '#2184be',
									opacity: '0.5',
								});
								$('#account').css ({
									background: '#2184be',
									opacity: '0.5',
								});
							}else {
								finishTab();
							}
						});

					}else {
						$("#continue-c").hide();
						$("#warning-c").show();
					}

					$("#Previous").click(function() {
						$("#frm-warning").hide();
						profileTab();
					});
				}
				// .................... kết thức warning

				function finishTab() {

					$('#profile').css({
						background: 'gray',
					});
					$('#finish').css({
						background: 'red',
					});
					$('#warning').css({
						background: 'gray',
					});
					$('#account').css ({
						background: 'gray',
					});


					$("#Previous").click(function() {
						$("#frm-finish").hide();
						warningTab();
					});
				}
				// account tb.............................
				function accountTab() {
					$("#frm-account").show();
					$("#frm-warning").hide();

					var name = $("#username");
					var pass = $("#password");
					var cfm_pass = $("#cfm-password");


					$("#Previous").css({
						background: 'gray',
					});

					$('#profile').css({
						background: 'gray',
					});
					$('#warning').css({
						background: 'gray',
					});
					$('#finish').css({
						background: 'gray',
					});
					
					$('#account').css({
						background: '#2184be',
					});

					// kiểm tra nhập pass
					$("#cfm-password").blur(function() {
						if($("#cfm-password").val() != $("#password").val()) {
							$("#cfm-password").css({
								background : '##fbe3e4',
								border : '1px solid red',
							});
						}
					});

					$("#cfm-password").focus(function() {
						$("#cfm-password").css({
							background: '',
							border : '',
						});
					});

					$("password").blur(function() {
						if($("#cfm-password").val() != $("#password").val()) {
							$("#cfm-password").css({
								background : '#fbe3e4',
								border : '1px solid red',
							});
						}
					});

					pass.focus(function() {
						pass.css({
							background: '',
							border : '',
						});
					});
					// kết thúc kiểm tra nhập pass

					$('#username').focus(function() {
						$('#username').css({
							background: '',
							border : '',
						});
					});



					// lắng nghe nút next
					$('#next').click(function() {
						var name = $("#username").val();
						if(name != "" && pass.val() == cfm_pass.val() && cfm_pass.val() != "" && pass.val() != "") {
							$("#frm-account").hide();
							profileTab();
						}else{
							$('#username').css({
								background: '#fbe3e4',
								border : '1px solid red',
							});

							pass.css({
								background: '#fbe3e4',
								border : '1px solid red',
							});

							cfm_pass.css({
								background: '#fbe3e4',
								border : '1px solid red',
							});
						}
					});
				}
			});