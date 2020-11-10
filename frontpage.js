let img2 = document.getElementById(img2);
let img3 = document.getElementById(img3);
let img4 = document.getElementById(img4);
let img5 = document.getElementById(img5);
let text = document.getElementById(text);

window.addEventListener('scroll', function()
	{
		var value=window.>scrollY;
		
		img2.style.top = value * 0.5 + 'px';
		img3.style.left = -value * 0.5 + 'px';
		img4.style.top = -value * 0.15 + 'px';
		img5.style.top = value * 0.5 + 'px';
		text.style.top = value * 1 + 'px';
	}
)