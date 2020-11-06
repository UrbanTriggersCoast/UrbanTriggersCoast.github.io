
Spry.Utils.addLoadListener(function() {

			var bar = document.getElementById("bar");

			window.onscroll = function() 	
			{
  				document.getElementById("aside1").style.width = "0";
				document.getElementById("aside2").style.width = "0";
				scrollIndicator()
			};

			function scrollIndicator() 
			{
  				var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
				var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  				var scrolled = 100;
  				if (height > 0) 
				{
    				scrolled = 4 + (winScroll / height) * 32.5;
  				}
				bar.style.height = scrolled + "%";
			}
		


			let img2 = document.getElementById("img2");
			let img3 = document.getElementById("img3");
			let img4 = document.getElementById("img4");
			let img5 = document.getElementById("img5");
			let text = document.getElementById("text");
			
			window.addEventListener('scroll', function()
				{
				var value=window.scrollY;
		
				img2.style.top = value * 0.5 + 'px';
				img3.style.left = -value * 0.5 + 'px';
				img4.style.top = -value * 0.05 + 'px';
				img5.style.top = value * 0.5 + 'px';
				text.style.top = value * 1 + 'px';
				}
			)
		


					
					function openNav() 
					{
  						document.getElementById("aside1").style.width = "96%";
  						document.getElementById("maintext").style.marginLeft = "96%";
					}
								
				


						function closeNav() 
						{
  							document.getElementById("aside1").style.width = "0";
  							document.getElementById("maintext").style.marginLeft = "0";
						}
						function openNav2() 
						{
  							document.getElementById("aside2").style.width = "96%";
  							document.getElementById("maintext").style.marginLeft = "96%";
						}
					
					


						function closeNav2() 
						{
  							document.getElementById("aside2").style.width = "0";
						}
					
					

 
       
    

});
