// weight/(height^2)

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  //   console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === " " || height <= 0 || isNaN(height)) {
    // const r=document.createTextNode="enter valid height";
    // result.appendChild(r)
    result.innerHTML = "enter valid height";
  } else if (weight === " " || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "enter valid weight";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const msg = document.querySelector("#msg");
    if (bmi <= 18.6) {
      msg.innerHTML = "You are under weight";
    //   console.log("You are under weight");
    } else if (bmi > 18.6 && bmi <= 24.9) {
      msg.innerHTML = "Your weight is normal";
    //   console.log("Your weight is normal");
    } else if (bmi > 24.9) {
      msg.innerHTML = "You are over weight";
    //   console.log("You are over weight");
    }
  }
});
