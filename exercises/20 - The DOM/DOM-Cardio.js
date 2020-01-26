'use strict';

// Make a div
const eleDiv = document.createElement(`div`);

// add a class of wrapper to it
eleDiv.classList.add(`wrapper`);


// put it into the body
document.body.appendChild(eleDiv)

// make an unordered list
const eleUl = document.createElement(`ul`);

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const eleLi1 = document.createElement(`li`);
eleLi1.textContent = `One`;
const eleLi2 = document.createElement(`li`);
eleLi2.textContent = `Two`;
const eleLi3 = document.createElement(`li`);
eleLi3.textContent = `Three`;

eleUl.appendChild(eleLi1).appendChild(eleLi2).appendChild(eleLi3);
eleDiv.appendChild(eleUl);

// create an image
const eleImage = document.createElement(`img`);
// set the source to an image
eleImage.src = "https://picsum.photos/500";
// set the width to 250
eleImage.width = '250'
// add a class of cute
eleImage.classList.add(`cute`);
// add an alt of Cute Puppy
eleImage.alt = `Cute Puppy`
// Append that image to the wrapper
eleDiv.appendChild(eleImage);


// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const strHtml = `<div>
                    <p>Hello</p>
                    <p></p>
                </div>`;
eleUl.insertAdjacentHTML(`beforebegin`, strHtml);

// add a class to the second paragraph called warning
eleDiv.querySelectorAll(`p`)[1].classList.add(`warning`);;

// remove the first paragraph
eleDiv.querySelector(`p`).remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
    return `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 5}. That would be a tall dog!</p>
            <button type="button" onClick="this.parentElement.remove()">Delete</button>
        </div>
    `;
}


// make a new div with a class of cards
const eleDivCards = document.createElement(`div`);
eleDivCards.classList.add(`cards`);
// Have that function make 4 cards
const strCard1 = generatePlayerCard(`Gopal`, 40, `5, 11`)
const strCard2 = generatePlayerCard(`Shalini`, 40, `5, 6`)
const strCard3 = generatePlayerCard(`Nandini`, 6, `3, 11`)
const strCard4 = generatePlayerCard(`Maya`, 5, `2, 11`)
// append those cards to the div
eleDivCards.insertAdjacentHTML(`beforeend`, strCard1);
eleDivCards.insertAdjacentHTML(`beforeend`, strCard2);
eleDivCards.insertAdjacentHTML(`beforeend`, strCard3);
eleDivCards.insertAdjacentHTML(`beforeend`, strCard4);


// put the div into the DOM just before the wrapper element
eleDiv.insertAdjacentElement(`beforebegin`, eleDivCards);


// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
