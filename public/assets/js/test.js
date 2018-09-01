$( document ).ready( function () {
    // Add smooth scrolling to all links
    $( "a" ).on( 'click', function ( event ) {

        // Make sure this.hash has a value before overriding default behavior
        if ( this.hash !== "" ) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $( 'html, body' ).animate( {
                scrollTop: $( hash ).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            } );
        } // End if
    } );
} );

// Add projects and technology icons to the DOM
showProjects = ( elementID, myArr ) => {
    // If array is portfolio, add to "My Skills..." section
    if ( elementID === 'portfolio' ) {
        myArr.map( item => {
            const figure = document.createElement( 'figure' );
            const title = document.createElement( 'h5' );
            const caption = document.createElement( 'figcaption' );
            const img = document.createElement( 'img' );

            title.innerText = item.title;
            caption.innerText = item.caption;

            title.className = 'subheading';
            caption.className = 'caption';


            img.setAttribute( 'src', item.img );
            img.setAttribute( 'alt', item.title );

            figure.appendChild( title );
            figure.appendChild( img );
            figure.appendChild( caption );

            document.getElementById( elementID ).appendChild( figure );
        } );
    }
    // Otherwise, put the technology icons where they belong
    else {
        myArr.map( icon => {
            const img = document.createElement( 'img' );
            img.setAttribute( 'src', icon.img );
            img.className = 'dev-logo';
            document.getElementById( elementID ).appendChild( img );
        } );
    }
}

showProjects( 'portfolio', projects );
showProjects( 'front-end', frontEndLogos );
showProjects( 'back-end', backEndLogos );