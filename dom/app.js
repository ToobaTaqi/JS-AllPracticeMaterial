const title = document.getElementById("title");
console.log(title);
title.style.backgroundColor = "green";

// difference between innerContent and innerText
// innterContent= shows only visible content
// innerText= shows all text even it's hidden or not
// innerHTML= shows all the text including the html tags/code in that specified tag

// query selectors
console.log(document.querySelector("h1"));
//  querySelectorAll() returns "NodeList" which is not purely array but works as a list