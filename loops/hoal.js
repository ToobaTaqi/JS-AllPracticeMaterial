// higher order array loops

// for of loop
// [ "" , "" , "" ]
// [ {} , {} , {} ]

const arr = [6, 7, 8, 9, 10];

for (const i of arr) {
  // console.log(i)
}

const str = "tooba Taqi";
for (const i of str) {
  if (i == " ") {
    continue;
  }
  //   console.log(i);
}

// Maps -ye b object ki trha hote heyn

const map = new Map();
map.set("name", "Tooba");
map.set("roll", "dev");
map.set("degree", "CS");

for (const [key, val] of map) {
  //   console.log(key);
}

// for of on object doesnt works.. obj k lye "for in loops use krte heyn"
const cartoon = {
  fav: "Doraemon",
  princess: "Rapunzel",
  queen: "Elsa",
};

for (const key in cartoon) {
//   console.log(`key :${key} - Value :${cartoon[key]}`);
//   console.log(`key :${key} - Value :${cartoon.key}`);

}

// "for in" on array
const progLangs=['py','js','cpp','rb']
for (const key in progLangs) {
//    console.log(progLangs[key])
}

// "for in" loop on maps
const m = new Map();
map.set("name", "Tooba");
map.set("roll", "dev");
map.set("degree", "CS");

for (const [key] in m) {
   console.log(key) //noting will print
} //forin is not for maps