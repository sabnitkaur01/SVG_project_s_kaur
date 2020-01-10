// this is a self-invoking anonymous function
// also called an IIFE
// also called a module
(() => {

  console.log("some message - from JavaScript");

  // find the button element on the page by its ID with javaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgGraphic");

  //this function changes the heading text
  function changeText() {
  theHeading.textContent = "Hello there from the console";
}

//log the id of the SVG to the console when a user hovers on interval
function logoSVG() {
  console.log(this.id);
}

  theButton.addEventListener("click", changeText);
  theButton.addEventListener("click", logoSVG);
  //document.querySelector('h1').textContent = "Hello there from the console";

})();
