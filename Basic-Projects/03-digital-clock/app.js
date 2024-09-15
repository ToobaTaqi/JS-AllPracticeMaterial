setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleDateString());
  const hour = date.getHours();
  //   console.log(hour);
  const min = date.getMinutes();
  //   console.log(min);
  const sec = date.getSeconds();
  //   console.log(sec);
  const milisec = date.getMilliseconds();
  //   console.log(milisec);
  document.querySelector(
    "#time"
  ).innerHTML = `${hour} : ${min} : ${sec} : ${milisec}`;
}, 100);



// +++++ very professional way +++++
// setInterval(function () {
//     const date = new Date();
//    const time=date.toLocaleTimeString()
//     document.querySelector(
//       "#time"
//     ).innerHTML = `${time}`;
//   }, 100);
  
  