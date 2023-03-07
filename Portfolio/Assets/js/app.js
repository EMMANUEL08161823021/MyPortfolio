AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const searchButton = document.getElementById("searchButton");
const search = document.getElementById("search");
const contentWrapper = document.querySelector(".content-wrapper");
// const searchDiv = document.getElementById("search-Div");

search.addEventListener("keyup", searchContainer);


// function display(e) {
    // console.log(search.value);
    
// }      
function searchContainer(e) {

    console.log(e.target.value);
    e.preventDefault();
} 

const contactEmail = document.getElementById("email");
const contactName = document.getElementById("name");
const contactSubject = document.getElementById("subject");
const textArea = document.getElementById("query");
const form = document.getElementById("form");
const send = document.getElementById("send");
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e)=> {
    // let messages = [];
    // if(contactEmail.value === '' || contactEmail.value == null) {
    //     alert('Email is required');
    // }
    // if(contactName.value === '' || contactName.value == null) {
    //     alert('Name is required');
    // } 
    // if(textArea.value === '' || textArea.value == null) {
    //     alert('Remember to drop a text');
    // } 

})
send.addEventListener('click', ()=> {
    if(contactEmail.value === '' || contactName.value === '' || textArea.value === '' ) {
        alert('Fill the informations below');
    } else {
        alert('You have successfully submitted');
    }

})


// function emailFunction() {
//     if(contactEmail.value <= 6 ) {
//         alert('Password is less than 6 characters')
//     }
// }



