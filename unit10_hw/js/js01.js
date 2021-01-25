window.onload = function(){
				document.getElementById('slide-show').addEventListener('mouseover', function() {
					document.getElementById('prev').style.display="block";
					document.getElementById('next').style.display="block";
				});
				document.getElementById('slide-show').addEventListener('mouseout', function() {
					document.getElementById('prev').style.display="none";
					document.getElementById('next').style.display="none";
				});

				var imgSlide 	= document.getElementsByClassName("img-slide");
				var prev 		= document.getElementById('prev');
				var next		= document.getElementById('next');
				var numbSide = 0;

				amimationSlide();

				// button

				prev.addEventListener('click', function() {
					numbSide--;
					showSlide();
				});

				next.addEventListener('click', function() {
					numbSide++;
					showSlide();
				});
				// end button

				function amimationSlide() {
					for(var i = 0; i < imgSlide.length; i++) {
						imgSlide[i].style.display="none";
					}

					numbSide++;
					if(numbSide < 0) {
						numbSide = imgSlide.length - 1;
					}
					if(numbSide > imgSlide.length) {
						numbSide = 1;
					}

					imgSlide[numbSide-1].style.display="block";

					setTimeout(amimationSlide, 5000);
				}

				function showSlide() {
					for(var i = 0; i < imgSlide.length; i++) {
						imgSlide[i].style.display="none";
					}

					if(numbSide < 1) {
						numbSide = imgSlide.length;
					}
					if(numbSide > imgSlide.length) {
						numbSide = 1;
					}

					imgSlide[numbSide-1].style.display="block";
				}
			}

			function elementSlide(n) {
				for(var i = 0; i < document.getElementsByClassName("img-slide").length; i++) {
					document.getElementsByClassName("img-slide")[i].style.display="none";
				}
				document.getElementsByClassName("img-slide")[n].style.display="block";
			}