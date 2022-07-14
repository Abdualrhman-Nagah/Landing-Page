
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 * Start Helper Functions
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
const navList = document.querySelector("#navbar__list");
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Scroll to section on link click

function createListItem(){
  for (const sec of sections){

      listItem = document.createElement("li");
      listItem.innerHTML = `<li><a class="menu__link" href="#${sec.id}">${sec.dataset.nav}</a></li>`;
      navList.appendChild(listItem);

  }

}
createListItem();

// Add class 'active' to section when near top of viewport

const offset = (section) =>{
  return Math.floor(section.getBoundingClientRect().top);
};
const removeActive = (section) =>{
  section.classList.remove('your-active-class');

};
const addActive = (conditional, section) =>{
  if (conditional){
      section.classList.add('your-active-class');
  };
};
const sectionActivation = () =>{
  sections.forEach(section =>{
      const elementOffset = offset(section);
      inviewport = () => elementOffset <= 150 && elementOffset >= -150;

      removeActive(section);
      addActive(inviewport(),section);
  });
};
window.addEventListener('scroll' ,sectionActivation);

/**
 * End Main Functions
*/
