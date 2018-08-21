// Define elements for About section
const aboutH1 = document.createElement( 'h1' );
const profileHeader = document.createElement( 'div' );
const img = document.createElement( 'img' );
const bioDiv = document.createElement( 'div' );
const p1 = document.createElement( 'p' );
const p2 = document.createElement( 'p' );
const p3 = document.createElement( 'p' );

// Set H1 attributes
aboutH1.setAttribute( 'class', 'section-title' );
aboutH1.setAttribute( 'id', 'my-bio' );
aboutH1.innerText = 'Hello, my name is Courtney and I\'m a MERN Stack Developer!';

// Set IMG attributes
profileHeader.setAttribute( 'class', 'section-header' );
img.setAttribute( 'id', 'profile-pic' );
img.setAttribute( 'src', './public/assets/images/profile.jpg' );
img.setAttribute( 'alt', 'Courtney\'s profile pic' );

// Add profile picture to DOM
profileHeader.appendChild( aboutH1 );
profileHeader.appendChild( img );


// Set Bio DIV attributes
bioDiv.setAttribute( 'id', 'bio' );
p1.setAttribute( 'class', 'description' );
p2.setAttribute( 'class', 'description' );
p3.setAttribute( 'class', 'description' );

p1.innerText = 'I am an IT professional-turned Front-End developer who is on a journey of becoming a Full-Stack Web Developer.'

p2.innerText = 'My passion for development started during my teenage years, where the first languages I learned were Pascal and C. The desire to deepen my knowledge grew stronger; I went on to receive a CS degree from the University of North Texas.';

p3.innerText = 'I have an extensive background in the IT industry; the past ten-plus years have allowed me to strengthen my communication, collaborative and leadership skills. I am an avid learner of all things web development, and am eager to knowledge share with others.';

// Add bio descriptions to the DOM
bioDiv.appendChild( p1 );
bioDiv.appendChild( p2 );
bioDiv.appendChild( p3 );

// Add defined elements to the DOM
aboutContainer.appendChild( profileHeader );
aboutContainer.appendChild( bioDiv );