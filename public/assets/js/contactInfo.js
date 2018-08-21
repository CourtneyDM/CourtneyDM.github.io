// Define Contact elements
const contactHeader = document.createElement( 'div' );
const contactH1 = document.createElement( 'h1' );
const contactPara = document.createElement( 'p' );
const emailSection = document.createElement( 'div' );
const socialMedia = document.createElement( 'div' );
const emailLink = document.createElement( 'a' );
const linkedin = document.createElement( 'a' );
const github = document.createElement( 'a' );

const form = document.createElement( 'form' );
const nameGroup = document.createElement( 'div' );
const emailGroup = document.createElement( 'div' );
const msgGroup = document.createElement( 'div' );

const nameLabel = document.createElement( 'label' );
const emaiLabel = document.createElement( 'label' );
const msgLabel = document.createElement( 'label' );

const emailInput = document.createElement( 'input' );
const nameInput = document.createElement( 'input' );
const msgInput = document.createElement( 'textarea' );

// Set attributes
contactHeader.setAttribute( 'class', 'section-header' );
contactH1.setAttribute( 'class', 'section-title' );
contactH1.setAttribute( 'id', 'my-contact' );
contactPara.setAttribute( 'class', 'description header' );
emailSection.setAttribute( 'class', 'email-me' );
socialMedia.setAttribute( 'class', 'social-media' );
emailLink.setAttribute( 'href', 'mailto:courtdmontgomery@gmail.com' );
linkedin.setAttribute( 'href', 'https://www.linkedin.com/in/courtneydm' );
github.setAttribute( 'href', 'https://github.com/courtneydm' );

contactH1.innerText = 'Let\'s Connect...';
contactPara.innerText = 'Whether it be a job or collaboration opportunity, I would love to hear from you. Find me on the social media platforms below, or submit the form to send me an emailLink.\n\nI look forward to connecting with you!';

emailLink.innerHTML = 'CourtDMontgomery@gmail.com<br/>';
linkedin.innerHTML = 'LinkedIn.com/in/CourtneyDM<br />';
github.innerHTML = 'Github.com/CourtneyDM<br />';

contactHeader.appendChild( contactH1 );
contactHeader.appendChild( contactPara );

nameLabel.innerText = 'Your Name: ';
nameInput.setAttribute( 'placeholder', 'Johnny Appleseed' );
nameGroup.setAttribute( 'class', 'form-group' );
nameGroup.appendChild( nameLabel );
nameGroup.appendChild( nameInput );

emaiLabel.innerText = 'Your Email: ';
emailInput.setAttribute( 'placeholder', 'Johnny_Appleseed@email.com' );
emailGroup.setAttribute( 'class', 'form-group' );
emailGroup.appendChild( emaiLabel );
emailGroup.appendChild( emailInput );

msgLabel.innerText = 'Your Message: ';
msgInput.setAttribute( 'placeholder', 'Your message here...' );
msgGroup.setAttribute( 'class', 'form-group' );
msgGroup.appendChild( msgLabel );
msgGroup.appendChild( msgInput );


form.appendChild( nameGroup );
form.appendChild( emailGroup );
form.appendChild( msgGroup );
emailSection.appendChild( form );

socialMedia.appendChild( emailLink );
socialMedia.appendChild( linkedin );
socialMedia.appendChild( github );

contactContainer.appendChild( contactHeader );
contactContainer.appendChild( emailSection );
contactContainer.appendChild( socialMedia );