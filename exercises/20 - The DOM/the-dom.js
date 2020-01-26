// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imginsideDiv = document.querySelectorAll('body>img');


// const heading = document.querySelector('h2');
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);





const image = document.querySelector(".nice");  //Selects the first DOM element which has a class "nice"
console.log(image.classList);                   //Lists all classes in the above selected element, since this may have additional classes.

function toggleRound() {
    image.classList.toggle("round");
}


image.addEventListener("click", toggleRound);
