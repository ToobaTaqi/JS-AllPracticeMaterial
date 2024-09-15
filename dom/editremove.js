function addLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  const ul = document.getElementsByClassName("language")[0].appendChild(li);
  //   console.log(ul);
}

addLanguage("python");
addLanguage("typescript");

// edit node in dom
const secondChild = document.querySelector("li:nth-child(2)");
// console.log(`Second child firstlt: ${secondChild}`);
const newli = document.createElement("li");
newli.textContent = "Node.js";
secondChild.replaceWith(newli);
// console.log(secondChild)

// 2nd example
const firstChild = document.querySelector("li:first-child");
console.log(firstChild);
const newchild = document.createElement("li");
newchild.appendChild(document.createTextNode("React.js"));
firstChild.replaceWith(newchild);
console.log(newchild);

// 3rd example - not recommended
const thirdlang = document.querySelector("li:nth-child(3)");
thirdlang.outerHTML = "<li> Express.js </li>";
console.log(thirdlang);

// remove
// document.querySelector('li:last-child').remove()
const lastlang = document.querySelector("li:last-child");
lastlang.remove();
