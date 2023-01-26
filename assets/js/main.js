/*
	Parallelism by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

const modal0 = document.getElementById(`myModal0`);
const btn0 = document.getElementById(`myBtn0`);

const modal1 = document.getElementById(`myModal1`);
const btn1 = document.getElementById(`myBtn1`);

const modal2 = document.getElementById(`myModal2`);
const btn2 = document.getElementById(`myBtn2`);

const modal3 = document.getElementById(`myModal3`);
const btn3 = document.getElementById(`myBtn3`);

const modal4 = document.getElementById(`myModal4`);
const btn4 = document.getElementById(`myBtn4`);

const modal5 = document.getElementById(`myModal5`);
const btn5 = document.getElementById(`myBtn5`);


let btn0Width;
let btn0Height;
let typer1;
let typer2;
let typer3;

let aText = new Array(
	"Test",
	"Me"
	);
let iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

const disableButtons = () => {
	console.log("disabled")
	for (let i=0;i<6; i++) {
		eval('btn' + i).disabled = true
	}
}

const enableButtons = () => {
	console.log("im enabling")
	for (let i=0;i<6; i++) {
		eval('btn' + i).disabled = false
	}
}

// adapted from: https://css-tricks.com/snippets/css/typewriter-effect/ by Geoff Graham
const typewriter = (id) =>
{
 destination = document.getElementById(`${id}`);
 destination.innerText=" "
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);

 while ( iRow < iIndex ) {
	sContents += aText[iRow++] + '<br /> <br />';
 }
 if (aText[iIndex]) destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if (aText[iIndex].substring(iTextPos-1, iTextPos) === "<" ) {

}
 if ( iTextPos++ == iArrLength ) {
	iTextPos = 0;
	iIndex++;
	if ( aText[iIndex] && iIndex != aText.length ) {
	 iArrLength = aText[iIndex].length;
	 typer1= setTimeout(() => typewriter(`${id}`), 100);
	} else {
		destination.innerHTML = sContents + aText[iRow++]
	}
 } else {
	typer2 = setTimeout(() => typewriter(`${id}`), iSpeed);
 }
}


btn0.onclick = function() {
	disableButtons()
	destination = document.getElementById("typedtext0");
	destination.innerText=" "
	 aText = new Array(
			"Instant messaging <b>WebSockets API</b>",
			"Scalable image hosting <b>AWS 3</b>",
			"Cohesive <b>CSS<b> transitions"
			);
			iSpeed = 50; // time delay of print out
		iIndex = 0; // start printing array at this posision
		iArrLength = aText[0].length; // the length of the text array
		iScrollAt = 20; // start scrolling up at this many lines
		iTextPos = 0; // initialise text position
		sContents = ''; // initialise contents variable
		let iRow; // initialise current row

	typer3 = setTimeout(() => typewriter("typedtext0"), 1000); //start timer
	setTimeout(() => enableButtons(), 1000);
	modal0.style.display = "block";
}


btn1.onclick = function (e) {
	disableButtons()
	destination = document.getElementById("typedtext1");
	destination.innerText=" "

	 aText = new Array(
		 "Search and focus <b>Office Javascript API</b>",
		 "Single space detection",
		 "Fun UI <b>React.js</b>",
		);
		iSpeed = 50; // time delay of print out
		iIndex = 0; // start printing array at this posision
		iArrLength = aText[0].length; // the length of the text array
		iScrollAt = 20; // start scrolling up at this many lines
		iTextPos = 0; // initialise text position
		sContents = ''; // initialise contents variable
		let iRow; // initialise current row

	typer3 = setTimeout(() => typewriter("typedtext1"), 1000); //start timer
	setTimeout(()=> enableButtons(), 1000)

	modal1.style.display = "block";
	}


btn2.onclick = function() {
	disableButtons()
	destination = document.getElementById("typedtext2");
	destination.innerText=" "
	 aText = new Array(
			"Drag and drop <b>jQuery UI</b> ",
			"DSP <b>Web Audio API</b>",
			"Dynamic modular routing",
			"Boingy cables <b>Matter.js</b> physics engine"
		);
		iSpeed = 50; // time delay of print out
		iIndex = 0; // start printing array at this posision
		iArrLength = aText[0].length; // the length of the text array
		iScrollAt = 20; // start scrolling up at this many lines
		iTextPos = 0; // initialise text position
		sContents = ''; // initialise contents variable
		let iRow; // initialise current row

	typer3 = setTimeout(() => typewriter("typedtext2"), 1000); //start timer
	setTimeout(()=> enableButtons(), 1000)

	modal2.style.display = "block";
}



btn3.onclick = function() {
	disableButtons()
	destination = document.getElementById("typedtext3");
	destination.innerText=" "

	 aText = new Array(
			"Instant messaging <b>WebSockets API</b>",
			"Channels",
			"Resizable components",
			"Scalable image hosting <b>AWS 3</b>"

	);
	iSpeed = 50; // time delay of print out
	iIndex = 0; // start printing array at this posision
	iArrLength = aText[0].length; // the length of the text array
	iScrollAt = 20; // start scrolling up at this many lines
	iTextPos = 0; // initialise text position
	sContents = ''; // initialise contents variable
	let iRow; // initialise current row

	typer3 = setTimeout(() => typewriter("typedtext3"), 1000); //start timer
	setTimeout(()=> enableButtons(), 1000)

	modal3.style.display = "block";
}

btn4.onclick = function() {
	disableButtons()
	destination = document.getElementById("typedtext4");
	destination.innerText=" "
	 aText = new Array(
			"New ASP + AI paradigm <b>DDSP</b>",
			"Denoising autoencoder <b>TensorFlow</b>",
			"> 250,000 steps <b>Greene supercomputer</b> ",
			"Sick UI <b>Max/MSP</b>"
		);
		iSpeed = 50; // time delay of print out
		iIndex = 0; // start printing array at this posision
		iArrLength = aText[0].length; // the length of the text array
		iScrollAt = 20; // start scrolling up at this many lines
		iTextPos = 0; // initialise text position
		sContents = ''; // initialise contents variable
		let iRow; // initialise current row

	typer3 = setTimeout(() => typewriter("typedtext4"), 1000); //start timer
	setTimeout(()=> enableButtons(), 1000)

	modal4.style.display = "block";
}

btn5.onclick = function() {

	modal5.style.display = "block";
}


const clearTimeouts = () => {
	clearTimeout(typer1)
	clearTimeout(typer2)
	clearTimeout(typer3)

}
// When the user clicks anywhere outside of modal, close it
window.onclick = function(event) {
	if (event.target == modal0) {
		clearTimeouts();
		modal0.style.display = "none";

	}

	if (event.target == modal1 ) {
		clearTimeouts();
		modal1.style.display = "none";
	}

	if (event.target == modal2 ) {
		clearTimeouts();
		modal2.style.display = "none";
	}
	if (event.target == modal3 ) {
		clearTimeouts();
		modal3.style.display = "none";
	}
	if (event.target == modal4 ) {
		clearTimeouts();
		modal4.style.display = "none";
	}
	if (event.target == modal5 ) {
		clearTimeouts();
		modal5.style.display = "none";
	}
}




	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		settings = {

			// Keyboard shortcuts.
				keyboardShortcuts: {

					// If true, enables scrolling via keyboard shortcuts.
						enabled: true,

					// Sets the distance to scroll when using the left/right arrow keys.
						distance: 50

				},

			// Scroll wheel.
				scrollWheel: {

					// If true, enables scrolling via the scroll wheel.
						enabled: true,

					// Sets the scroll wheel factor. (Ideally) a value between 0 and 1 (lower = slower scroll, higher = faster scroll).
						factor: 1

				},

			// Scroll zones.
				scrollZones: {

					// If true, enables scrolling via scroll zones on the left/right edges of the scren.
						enabled: true,

					// Sets the speed at which the page scrolls when a scroll zone is active (higher = faster scroll, lower = slower scroll).
						speed: 15

				}

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Tweaks/fixes.

		// Mobile: Revert to native scrolling.
			if (browser.mobile) {

				// Disable all scroll-assist features.
					settings.keyboardShortcuts.enabled = false;
					settings.scrollWheel.enabled = false;
					settings.scrollZones.enabled = false;

				// Re-enable overflow on main.
					$main.css('overflow-x', 'auto');

			}

		// IE: Fix min-height/flexbox.
			if (browser.name == 'ie')
				$wrapper.css('height', '100vh');

		// iOS: Compensate for address bar.
			if (browser.os == 'ios')
				$wrapper.css('min-height', 'calc(100vh - 30px)');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Items.

		// Assign a random "delay" class to each thumbnail item.
			$('.item.thumb').each(function() {
				$(this).addClass('delay-' + Math.floor((Math.random() * 6) + 1));
			});

		// IE: Fix thumbnail images.
			if (browser.name == 'ie')
				$('.item.thumb').each(function() {

					var $this = $(this),
						$img = $this.find('img');

					$this
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('opacity', '0');

				});

	// Poptrox.
		$main.poptrox({
			onPopupOpen: function() { $body.addClass('is-poptrox-visible'); },
			onPopupClose: function() { $body.removeClass('is-poptrox-visible'); },
			overlayColor: '#1a1f2c',
			overlayOpacity: 0.75,
			popupCloserText: '',
			popupLoaderText: '',
			selector: '.item.thumb a.image',
			caption: function($a) {
				return $a.prev('h2').html();
			},
			usePopupDefaultStyling: false,
			usePopupCloser: false,
			usePopupCaption: true,
			usePopupNav: true,
			windowMargin: 50
		});

		breakpoints.on('>small', function() {
			$main[0]._poptrox.windowMargin = 50;
		});

		breakpoints.on('<=small', function() {
			$main[0]._poptrox.windowMargin = 0;
		});

	// Keyboard shortcuts.
		if (settings.keyboardShortcuts.enabled)
			(function() {

				$window

					// Keypress event.
						.on('keydown', function(event) {

							var scrolled = false;

							if ($body.hasClass('is-poptrox-visible'))
								return;

							switch (event.keyCode) {

								// Left arrow.
									case 37:
										$main.scrollLeft($main.scrollLeft() - settings.keyboardShortcuts.distance);
										scrolled = true;
										break;

								// Right arrow.
									case 39:
										$main.scrollLeft($main.scrollLeft() + settings.keyboardShortcuts.distance);
										scrolled = true;
										break;

								// Page Up.
									case 33:
										$main.scrollLeft($main.scrollLeft() - $window.width() + 100);
										scrolled = true;
										break;

								// Page Down, Space.
									case 34:
									case 32:
										$main.scrollLeft($main.scrollLeft() + $window.width() - 100);
										scrolled = true;
										break;

								// Home.
									case 36:
										$main.scrollLeft(0);
										scrolled = true;
										break;

								// End.
									case 35:
										$main.scrollLeft($main.width());
										scrolled = true;
										break;

							}

							// Scrolled?
								if (scrolled) {

									// Prevent default.
										event.preventDefault();
										event.stopPropagation();

									// Stop link scroll.
										$main.stop();

								}

						});

			})();

	// Scroll wheel.
		if (settings.scrollWheel.enabled)
			(function() {

				// Based on code by @miorel + @pieterv of Facebook (thanks guys :)
				// github.com/facebook/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
					var normalizeWheel = function(event) {

						var	pixelStep = 10,
							lineHeight = 40,
							pageHeight = 800,
							sX = 0,
							sY = 0,
							pX = 0,
							pY = 0;

						// Legacy.
							if ('detail' in event)
								sY = event.detail;
							else if ('wheelDelta' in event)
								sY = event.wheelDelta / -120;
							else if ('wheelDeltaY' in event)
								sY = event.wheelDeltaY / -120;

							if ('wheelDeltaX' in event)
								sX = event.wheelDeltaX / -120;

						// Side scrolling on FF with DOMMouseScroll.
							if ('axis' in event
							&&	event.axis === event.HORIZONTAL_AXIS) {
								sX = sY;
								sY = 0;
							}

						// Calculate.
							pX = sX * pixelStep;
							pY = sY * pixelStep;

							if ('deltaY' in event)
								pY = event.deltaY;

							if ('deltaX' in event)
								pX = event.deltaX;

							if ((pX || pY)
							&&	event.deltaMode) {

								if (event.deltaMode == 1) {
									pX *= lineHeight;
									pY *= lineHeight;
								}
								else {
									pX *= pageHeight;
									pY *= pageHeight;
								}

							}

						// Fallback if spin cannot be determined.
							if (pX && !sX)
								sX = (pX < 1) ? -1 : 1;

							if (pY && !sY)
								sY = (pY < 1) ? -1 : 1;

						// Return.
							return {
								spinX: sX,
								spinY: sY,
								pixelX: pX,
								pixelY: pY
							};

					};

				// Wheel event.
					$body.on('wheel', function(event) {

						// Disable on <=small.
							if (breakpoints.active('<=small'))
								return;

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Stop link scroll.
							$main.stop();

						// Calculate delta, direction.
							var	n = normalizeWheel(event.originalEvent),
								x = (n.pixelX != 0 ? n.pixelX : n.pixelY),
								delta = Math.min(Math.abs(x), 150) * settings.scrollWheel.factor,
								direction = x > 0 ? 1 : -1;

						// Scroll page.
							$main.scrollLeft($main.scrollLeft() + (delta * direction));

					});

			})();

	// Scroll zones.
		if (settings.scrollZones.enabled)
			(function() {

				var	$left = $('<div class="scrollZone left"></div>'),
					$right = $('<div class="scrollZone right"></div>'),
					$zones = $left.add($right),
					paused = false,
					intervalId = null,
					direction,
					activate = function(d) {

						// Disable on <=small.
							if (breakpoints.active('<=small'))
								return;

						// Paused? Bail.
							if (paused)
								return;

						// Stop link scroll.
							$main.stop();

						// Set direction.
							direction = d;

						// Initialize interval.
							clearInterval(intervalId);

							intervalId = setInterval(function() {
								$main.scrollLeft($main.scrollLeft() + (settings.scrollZones.speed * direction));
							}, 25);

					},
					deactivate = function() {

						// Unpause.
							paused = false;

						// Clear interval.
							clearInterval(intervalId);

					};

				$zones
					.appendTo($wrapper)
					.on('mouseleave mousedown', function(event) {
						deactivate();
					});

				$left
					.css('left', '0')
					.on('mouseenter', function(event) {
						activate(-1);
					});

				$right
					.css('right', '0')
					.on('mouseenter', function(event) {
						activate(1);
					});

				$body
					.on('---pauseScrollZone', function(event) {

						// Pause.
							paused = true;

						// Unpause after delay.
							setTimeout(function() {
								paused = false;
							}, 500);

					});

			})();

})(jQuery);