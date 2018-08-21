// Define elements for Skills section
const skillsHeader = document.createElement( 'div' );
const skillsH1 = document.createElement( 'h1' );
const skillsPara = document.createElement( 'p' );

// Set Skills DIV attributes
skillsHeader.setAttribute( 'class', 'section-header' );

// Set H1 attributes
skillsH1.setAttribute( 'class', 'section-title' );
skillsH1.setAttribute( 'id', 'my-skills' );
skillsH1.innerText = 'My Skills...';

// Set P attributes
skillsPara.setAttribute( 'class', 'description header' );
skillsPara.innerText = 'I am proficient in the following Web Development technologies, along with a foundation in lower-level Object-Oriented programming languages such as C, C++ and C-Sharp (C#).';

// Adding H1 and P to Header parent
skillsHeader.appendChild( skillsH1 );
skillsHeader.appendChild( skillsPara );


// Define the Front-End Container
const frontEndContainer = document.createElement( 'div' );
const frontEndHeader = document.createElement( 'h5' );
frontEndContainer.setAttribute( 'class', 'frontend-container' );
frontEndHeader.setAttribute( 'class', 'section-subtitle' );
frontEndHeader.innerText = 'Front-End Technologies';
frontEndContainer.appendChild( frontEndHeader );

// Loop through an object that contains an image/logo for each front-end technologies
frontEndLogos.map( logo => {
    const img = document.createElement( 'img' );
    img.setAttribute( 'src', logo.img );
    img.setAttribute( 'alt', logo.name );
    img.setAttribute( 'class', 'dev-logo' );
    frontEndContainer.appendChild( img );
} );

// Define the Back-End Container
const backEndContainer = document.createElement( 'div' );
const backEndHeader = document.createElement( 'h5' );
backEndContainer.setAttribute( 'class', 'backend-container' );
backEndHeader.setAttribute( 'class', 'section-subtitle' );
backEndHeader.innerText = 'Back-End Technologies';
backEndContainer.appendChild( backEndHeader );

// Loop through an object that contains an image/logo for each back-end technologies
backEndLogos.map( logo => {
    const img = document.createElement( 'img' );
    img.setAttribute( 'src', logo.img );
    img.setAttribute( 'alt', logo.name );
    img.setAttribute( 'class', 'dev-logo' );
    backEndContainer.appendChild( img );
} );

// addLogos = (logos, img) => {
//     if(logos === frontEndLogos){
//         img.setAttribute( 'src', logo.img );
//         img.setAttribute( 'alt', logo.name );
//         frontEndContainer.appendChild( img );
//     }
//     else{
//         img.setAttribute( 'src', logo.img );
//         img.setAttribute( 'alt', logo.name );
//         backEndContainer.appendChild( img );
//     }
//     return;
// }

// Add elements to the DOM
skillsContainer.appendChild( skillsHeader );
skillsContainer.appendChild( frontEndContainer );
skillsContainer.appendChild( backEndContainer );