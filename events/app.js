document.querySelector("#paintings").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);

    if (e.target.tagName === "IMG") {
      //strict checking
      const selectedElement = e.target;
      selectedElement.remove();
    }
  },
  false
);
