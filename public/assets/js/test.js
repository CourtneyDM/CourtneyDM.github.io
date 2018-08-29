const figure = document.createElement( 'figure' );
let title = document.createElement( 'h5' );
const caption = document.createElement( 'figcaption' );
const img = document.createElement( 'img' );

for ( let i = 0; i < projects.length; i++ ) {
    title.innerText = projects[ i ].title;
    console.log( `Title: ${ projects[ i ].title }` );
}