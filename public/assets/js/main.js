$(document).ready(function () {
    // alert("page loaded.");

    // Create the Navbar
    const navbar = document.createElement("nav");
    const navList = document.createElement("ul");
    const abtLink = document.createElement("li");
    const pfLink = document.createElement("li");
    const conLink = document.createElement("li");

    abtLink.innerHTML = "<a href='#about'>About</a>";
    pfLink.innerHTML = "<a href='#portfolio'>Portfolio</a>";
    conLink.innerHTML = "<a href='#contact'>Contact</a>";

    navList.setAttribute("class", "nav");
    navList.appendChild(abtLink).appendChild(pfLink).appendChild(conLink);
    navbar.appendChild(navList);

    // document.getElementById("header").appendChild(navbar);


    // Create About Me section
    let about = document.getElementById("about");
    let para = document.createElement("p");
    para.setAttribute("id", "description");

    para.innerText = "Hello, my name is Courtney. I am a CS graduate-turned IT professional-turned Web Developer. I am well-versed in front-end technologies and am on the journey of mastering most things back-end. Have a look around; if you need someone for a web development project and you like what you see, message me below or connect with me on any of the listed social media platforms.";

    about.appendChild(para);


    // Create My Work section
    let pf = document.getElementById("portfolio");
    let pfHeader = document.createElement("h1");

    pfHeader.innerText = "My Work...";

    pf.appendChild(pfHeader);


    let description = document.createElement("figurecaption");
    description.innerText = portfolioObj[0].desc;

    let pfImg = new Image(400, 200);
    pfImg.src = portfolioObj[0].img;

    pf.appendChild(pfImg);
    pf.appendChild(description);


    // Create Contact section
    let contact = document.getElementById("contact");
    let fieldset = document.createElement("fieldset");
    let form = document.createElement("form");
    let name = document.createElement("input");
    let email = document.createElement("input");
    let message = document.createElement("textarea");

    email.setAttribute("value", "email");

    let nLabel = document.createElement("label").innerText("Name:");
    // nLabel.appendChild(name);
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(message);
    fieldset.appendChild(form);
    contact.appendChild(fieldset);

});