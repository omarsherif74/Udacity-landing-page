//define global variables

const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

//End Global Variables

// build the nav

const navBuilder = () => {
  //start with empty ul
  let ulContent = "";

  // loop over all sections one by one
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    console.log(sectionDataNav);

    ulContent += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });
  // append all elements to navigation
  nav.innerHTML = ulContent;
};

navBuilder();

function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}


// Add class 'active' to section when near top of viewport

// get section offset
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// add the active class
const addActive = (condition, section) => {
    if(condition){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgb(186, 78, 21);";
    };
};


//activate section when near top of viewport
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inViewPort = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inViewPort(),section);
    });
};

//listen to scroll event and fire action to activate section
window.addEventListener('scroll' ,sectionActivation);


// Scroll to anchor ID using scrollTO event
function sectionScroll(link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
}


const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections.length ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();
