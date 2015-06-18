function handleStickyHeader() {

	var b = document.documentElement,
    	e = false,
   		a = 100; // the sticky menu trigger point, in pixels


	function c() {
		
		return window.pageYOffset || b.scrollTop;
		
	}
	
	function d() {
		
		var h = c();
		
		if (h >= a) {
			$('#header').show();
		} else {
			$('#header').hide();
		}
		
		e = false;
	}
	
	function f() {
		
		window.addEventListener("scroll", function (h) {
			
			if (!e) {
				e = true;
				setTimeout(d(), 250);
			}
		}, false);
		
		window.addEventListener("load", function (h) {
			
			if (!e) {
				e = true;
				setTimeout(d(), 250);
			}
		}, false);
	}


	var stickyHeader = false;
	
	if ($('body').hasClass('sticky-header')){
		stickyHeader = true;
	}
	
	if(stickyHeader && ($(window).width() > 1024)){ 
	
		f();

	}
	
}