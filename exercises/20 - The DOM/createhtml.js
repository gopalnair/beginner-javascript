
const ulParent = document.createElement(`ul`); //Create the parent Unordered list.
ulParent.classList.add(`gopal_border`);


// Create Child Items //
const li1 = document.createElement(`li`);       //Create 1st child element
li1.textContent = "One";                        //Add text content to list item 1.
li1.classList.add(`gopal_color_red`);           //Add a class to this element. I have defined this class in CSS to display color as red.
li1.setAttribute(`data-gopal-li1`, `Line Item 1`); //Add a custom data attribute to the node.

const li2 = document.createElement(`li`);       //Create 2nd child element
li2.textContent = "Two";                        //Add text content to list item 2.

const li3 = document.createElement(`li`);       //Create 3rd child element
li3.textContent = "Three";                      //Add text content to list item 3.

const li4 = document.createElement(`li`);       //Create 4th child element
li4.textContent = "Four";                       //Add text content to list item 4.

const li5 = document.createElement(`li`);       //Create 5th child element
li5.textContent = "Five";                       //Add text content to list item 5.


ulParent.appendChild(li1);                      //Append the child to parent.
ulParent.appendChild(li2);                      //Append the child to parent.
ulParent.appendChild(li3);                      //Append the child to parent.
ulParent.appendChild(li4);                      //Append the child to parent.
ulParent.appendChild(li5);                      //Append the child to parent.


//Finally, append the main UL element to body.
//NOTE: for body and head, we can use the readily available attribute of document. However, if this was another element in HTML,
//we would need to first grab that element with querySelector/querySelectorAll methods.
document.body.appendChild(ulParent);

