$(document).ready(function () {
    // alert("page loaded.");

    // Create the Navbar
    // const navbar = document.createElement("nav");
    // const navList = document.createElement("ul");
    // const abtLink = document.createElement("li");
    // const pfLink = document.createElement("li");
    // const conLink = document.createElement("li");

    // abtLink.innerHTML = "<a href='#about'>About</a>";
    // pfLink.innerHTML = "<a href='#portfolio'>Portfolio</a>";
    // conLink.innerHTML = "<a href='#contact'>Contact</a>";

    // navList.setAttribute("class", "nav");
    // navList.appendChild(abtLink).appendChild(pfLink).appendChild(conLink);
    // navbar.appendChild(navList);

    // document.getElementById("contactInfo").appendChild(navbar);


    // // Create About Me section
    // let about = document.getElementById("about");
    // let para = document.createElement("p");
    // para.setAttribute("id", "description");

    // para.innerText = "Hello, my name is Courtney. I am a CS graduate-turned IT professional-turned Web Developer. I am well-versed in front-end technologies and am on the journey of mastering most things back-end. Have a look around; if you need someone for a web development project and you like what you see, message me below or connect with me on any of the listed social media platforms.";

    // about.appendChild(para);


    // TODO: Create Event Handler for when Portfolio link is clicked

    // TODO: Create Event Handler for when Contact link is clicked

    // Display Portfolio
    const portfolio = document.getElementById("portfolio");
    const work = document.createElement("h1");
    work.innerText = "My Work...";
    portfolio.appendChild(work);

    // Use handlebars to iterate through Portfolio Object and display image and description


    // Display Contact Fields
    const br = document.createElement("br");
    const contact = document.getElementById("contact");
    const contactInfo = document.createElement("h1");
    contactInfo.innerText = "How to Reach Me...";
    contact.appendChild(contactInfo);

    const form = document.createElement("form");
    contact.appendChild(form);

    const fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    const legend = document.createElement("legend");
    legend.innerText = "Contact Details";
    fieldset.appendChild(legend);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Your Name: ";
    fieldset.appendChild(nameLabel);

    const fullName = document.createElement("input");
    fullName.setAttribute("placeholder", "First & Last Name");
    fullName.setAttribute("id", "name");
    fieldset.appendChild(fullName);
    fieldset.appendChild(br);

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email: ";
    emailLabel.appendChild(br);
    fieldset.appendChild(emailLabel);

    const email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Example@email.com");
    fieldset.appendChild(email);

    const textLabel = document.createElement("label");
    textLabel.setAttribute("for", "message");
    textLabel.innerText = "Your Message Here";
    fieldset.appendChild(textLabel);

    const textarea = document.createElement("textarea");
    textarea.setAttribute("name", "message");
    textarea.setAttribute("id", "message");
    fieldset.appendChild(textarea);
});