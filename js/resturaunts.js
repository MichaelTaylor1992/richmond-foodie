carousel text
<!-- carousel attempt -->
<!-- 		<div class="slideshow-container">
				<div class="mySlides fade">
					<div class="numbertext">1 / 3</div>
					<img height="220" width="360" src="images/paella.jpg" alt="Paella from Oceano" style='float: left;'/>
					<div class="text">Paella from Oceano</div>
				</div>
					
				<div class="mySlides fade">
					<div class="numbertext">2 / 3</div>
					<img height="220" width="260" src="images/ceviche.jpg" alt="Picture of ceviche from Oceano" style='float: left;'/>
					<div class="text">Ceviche from Oceano</div>
				</div>
					
				<div class="mySlides fade">
					<div class="numbertext">3 / 3</div>
					<img height="120" width="160" src="images/oceano-nystrip.jpg" alt="Picture of NY Strip from Oceano">
					<div class="text">NY Strip from Oceano
				</div>
					
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
			</div>
		<div style="text-align:center">
		<span class="dot" onclick="currentSlide(1)"></span>
		<span class="dot" onclick="currentSlide(2)"></span>
		<span class="dot" onclick="currentSlide(3)"></span>
		</div>
					</div>
					
	<script>
		let slideIndex = 1;
			showSlides(slideIndex);

		function plusSlides(n) {
			showSlides(slideIndex += n);
			}

		function currentSlide(n) {
			showSlides(slideIndex = n);
			}

		function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";
			}
	</script>		 -->		
					
					<!-- carousel attempt end -->