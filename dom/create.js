const parent = document.querySelector(".parent");
// console.log(parent);
const children = parent.children;
// console.log(children); //return HTMLCollection i.e array like property but not array
// console.log(children[1].innerHTML);

// for (let i = 0; i < children.length; i++) {
//   const element = children[i];
//   console.log(element.innerHTML);
// }

children[1].style.color = "blue";

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayone = document.querySelector('.day');
// console.log(dayone)
// console.log(dayone.parentElement)
// console.log(dayone.nextElementSibling)

console.log(parent.childNodes)

const div=document.createElement('div')
// console.log(div.innerHTML="hi")
console.log(div)
div.className="day"
div.id=Math.round(Math.random()*10) //by default attributes
div.setAttribute('title','denerated attribute') // self generated attributes
div.style.color='green'

const day=document.createTextNode("friday")
parent.appendChild(day) 
console.log(parent)
// 
const newdiv=document.createElement('div')
const newtext=document.createTextNode('This is new child')
newdiv.appendChild(newtext)
console.log(newdiv)
document.body.appendChild(newdiv)
// is poore process ko function k andr wrap bhi kr skte