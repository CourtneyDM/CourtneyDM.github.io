// Page Styling
const body = document.body;
body.setAttribute( 'class', 'animated slideInLeft' );

// Define Header Section
const header = document.createElement( 'header' );
header.setAttribute( 'class', 'header' );

// Define Navbar & Elements
const navbar = document.createElement( 'nav' );
const navLogo = document.createElement( 'span' );
const navbarUL = document.createElement( 'ul' );

// Define Navbar Logo
navLogo.setAttribute( 'class', 'navbar-logo' );
navLogo.innerText = 'Courtney Montgomery';

// Define Navbar Link to Bio Section
const bioListItem = document.createElement( 'li' );
const bioLink = document.createElement( 'a' );
bioLink.setAttribute( 'href', '#my-bio' );
bioLink.innerText = 'About';
bioListItem.appendChild( bioLink );

// Define Navbar Link to Skills Section
const skillsListItem = document.createElement( 'li' );
const skillsLink = document.createElement( 'a' );
skillsLink.setAttribute( 'href', '#my-skills' );
skillsLink.innerText = 'Skills';
skillsListItem.appendChild( skillsLink );

// Define Navbar Link to Porftolio Section
const portfolioListItem = document.createElement( 'li' );
const portfolioLink = document.createElement( 'a' );
portfolioLink.setAttribute( 'href', '#my-portfolio' );
portfolioLink.innerText = 'Portfolio';
portfolioListItem.appendChild( portfolioLink );

// Define Navbar Link to Contact Section
const contactListItem = document.createElement( 'li' );
const contactLink = document.createElement( 'a' );
contactLink.setAttribute( 'href', '#my-contact' );
contactLink.innerText = 'Contact';
contactListItem.appendChild( contactLink );

// Create Navbar
navbar.setAttribute( 'class', 'navbar' );
navbarUL.setAttribute( 'class', 'nav' );
navbarUL.appendChild( bioListItem );
navbarUL.appendChild( skillsListItem );
navbarUL.appendChild( portfolioListItem );
navbarUL.appendChild( contactListItem );
navbar.appendChild( navLogo );
navbar.appendChild( navbarUL );

// Add Navbar to the Header element
header.appendChild( navbar );

// Add Header to the Body element
body.appendChild( header );