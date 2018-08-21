// Define Portfolio elements
const portfolioHeader = document.createElement( 'div' );
const portfolioH1 = document.createElement( 'h1' );
const portfolioPara = document.createElement( 'p' );
const projectSection = document.createElement( 'div' );

// Set attributes
portfolioHeader.setAttribute( 'class', 'section-header' );
portfolioH1.setAttribute( 'class', 'section-title' );
portfolioH1.setAttribute( 'id', 'my-portfolio' );
portfolioPara.setAttribute( 'class', 'description header' );
projectSection.setAttribute( 'class', 'project' );

portfolioH1.innerText = 'My Work...';
portfolioPara.innerHTML = 'Checkout a few of my projects. Tools & technologies, as well as projects & project details can be found on my <a href="https://github.com/courtneydm">Github</a> page';

// Add elements to the DOM
portfolioHeader.appendChild( portfolioH1 );
portfolioHeader.appendChild( portfolioPara );
portfolioContainer.appendChild( portfolioHeader );

// Sort through the projects and add them to the DOM
projects.map( project => {
    // Create elements for projects
    const figure = document.createElement( 'figure' );
    const title = document.createElement( 'h5' );
    const img = document.createElement( 'img' );
    const caption = document.createElement( 'figcaption' );

    // Set project attributes
    title.setAttribute( 'class', 'section-subtitle' );
    img.setAttribute( 'class', 'project-img' );
    img.setAttribute( 'src', project.img );
    caption.setAttribute( 'class', 'caption' );

    // Assign title and caption text
    title.innerText = project.title;
    caption.innerText = project.caption;

    // Add project to the DOM
    figure.appendChild( title );
    figure.appendChild( img );
    figure.appendChild( caption );
    projectSection.appendChild( figure );

    portfolioContainer.appendChild( projectSection );
} );

