const container = document.querySelector("#container");
//  const btn = document.querySelector(".btn")
let btn = document.getElementsByClassName("btn");

let cell;
let gridsize = 10;

function randomRBG() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return (RGBColor = "rgb(" + x + "," + y + "," + z + ")");
}

function makeGrid(size) {
  container.style.setProperty("--grid-column", size);
  container.style.setProperty("--grid-rows", size);

  for (let i = 0; i < size * size; i++) {
    cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add("box");
  }
}

gameInit();

function mouseOverColorful() {
  container.addEventListener("mouseover", (event) => {
    return (event.target.style.background = randomRBG());
  });
}

function mouseOverBlack() {
  container.addEventListener("mouseover", (event) => {
    return (event.target.style.background = "black");
  });
}

btn[0].addEventListener("click", () => {
  container.textContent = "";
  gridsize = prompt("enter a grid size between 1 and 100");
  if (gridsize > 100 || gridsize < 1) {
    alert("inavalid size! try again");
    makeGrid(5);
  } else {
    makeGrid(gridsize);
  }
});

btn[1].addEventListener("click", () => {
  container.textContent = "";
  container.style.background = "white";
});
btn[2].addEventListener("click", () => {
  mouseOverBlack();
});
btn[3].addEventListener("click", () => {
  mouseOverColorful();
});

function gameInit() {
  mouseOverColorful();
  makeGrid(5);
}
