// Define Div Containers
const pageContainer = document.createElement( 'div' );
const aboutContainer = document.createElement( 'div' );
const skillsContainer = document.createElement( 'div' );
const portfolioContainer = document.createElement( 'div' );
const contactContainer = document.createElement( 'div' );

pageContainer.setAttribute( 'class', 'page-container' );
aboutContainer.setAttribute( 'class', 'about-container' );
skillsContainer.setAttribute( 'class', 'skills-container' );
portfolioContainer.setAttribute( 'class', 'portfolio-container' );
contactContainer.setAttribute( 'class', 'contact-container' );

// Append sub-containers to the main page container
pageContainer.appendChild( aboutContainer );
pageContainer.appendChild( skillsContainer );
pageContainer.appendChild( portfolioContainer );
pageContainer.appendChild( contactContainer );

// Add containers to the DOM
body.appendChild( pageContainer );