$(document).ready(function() {
	// Add smooth scrolling to all links
	$("a").on("click", function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top
				},
				800,
				function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

// Create a hamburger menu for small viewing screens
mobileNavbar = () => {
	let x = document.querySelector("#nav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
};

// Add projects and technology icons to the DOM
showImages = (elementID, myArr) => {
	// If array is portfolio, add to "Portfolio" section
	if (elementID === "portfolio") {
		myArr.map(item => {
			const div = document.createElement("div");
			const figure = document.createElement("figure");
			const title = document.createElement("h5");
			const caption = document.createElement("figcaption");
			const img = document.createElement("img");
			const url = document.createElement("a");

			title.innerText = item.title;

			caption.innerText = item.caption;

			title.className = "subheading";
			caption.className = "caption";
			img.className = "proj-img";

			div.setAttribute("class", "project flex-content");
			img.setAttribute("src", item.img);
			img.setAttribute("alt", item.title);
			url.setAttribute("href", item.url);
			url.setAttribute("target", "_blank");

			url.appendChild(img);
			figure.appendChild(title);
			figure.appendChild(url);
			figure.appendChild(caption);

			div.appendChild(figure);

			document.getElementById(elementID).appendChild(div);
		});
	}
	// Otherwise, put the technology icons where they belong
	else {
		myArr.map(icon => {
			const img = document.createElement("img");
			img.setAttribute("src", icon.img);
			img.className = "logo";
			document.getElementById(elementID).appendChild(img);
		});
	}
};

showImages("portfolio", projects);
showImages("front-end", frontEndLogos);
showImages("back-end", backEndLogos);
