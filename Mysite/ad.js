// const tagContainer = document.querySelector('.tag-container');
// const input = document.querySelector('.tag-container input');

// let tags = [];

// function createTag(label) {
//   const div = document.createElement('div');
//   div.setAttribute('class', 'tag');
//   const span = document.createElement('span');
//   span.innerHTML = label;
//   const closeIcon = document.createElement('i');
//   closeIcon.innerHTML = 'close';
//   closeIcon.setAttribute('class', 'material-icons');
//   closeIcon.setAttribute('data-item', label);
//   div.appendChild(span);
//   div.appendChild(closeIcon);
//   return div;
// }

// function clearTags() {
//   document.querySelectorAll('.tag').forEach(tag => {
//     tag.parentElement.removeChild(tag);
//   });
// }

// function addTags() {
//   clearTags();
//   tags.slice().reverse().forEach(tag => {
//     tagContainer.prepend(createTag(tag));
//   });
// }

// input.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//       e.target.value.split(',').forEach(tag => {
//         tags.push(tag);  
//       });
      
//       addTags();
//       input.value = '';
//     }
// });
// document.addEventListener('click', (e) => {
//   console.log(e.target.tagName);
//   if (e.target.tagName === 'I') {
//     const tagLabel = e.target.getAttribute('data-item');
//     const index = tags.indexOf(tagLabel);
//     tags = [...tags.slice(0, index), ...tags.slice(index+1)];
//     addTags();    
//   }
// })

// input.focus();



// const ul = document.querySelector("ul"),
// input = document.querySelector(".content input"),
// tagNumb = document.querySelector(".details span");
// let maxTags = 10,
// tags = ["coding", "kerala"];
// countTags();
// createTag();
// function countTags(){
//     input.focus();
//     tagNumb.innerText = maxTags - tags.length;
// }
// function createTag(){
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//     });
//     countTags();
// }
// function remove(element, tag){
//     let index  = tags.indexOf(tag);
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
//     element.parentElement.remove();
//     countTags();
// }
// function addTag(e){
//     if(e.key == "Enter"){
//         let tag = e.target.value.replace(/\s+/g, ' ');
//         if(tag.length > 1 && !tags.includes(tag)){
//             if(tags.length < 10){
//                 tag.split(',').forEach(tag => {
//                     tags.push(tag);
//                     createTag();
//                 });
//             }
//         }
//         e.target.value = "";
//     }
// }
// input.addEventListener("keyup", addTag);
// const removeBtn = document.querySelector(".details button");
// removeBtn.addEventListener("click", () =>{
//     tags.length = 0;
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     countTags();
// });


// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);