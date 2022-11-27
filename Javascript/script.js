const $iconHover = "rgba(211, 211, 211, 0.184)";
const $iconBorder = "1px solid lightgray";

// start button
const start = document.querySelector("#start");

// menu div
const menu = document.querySelector(".menu");

// App display
// notepad display
const notePad = document.querySelector(".notePad");

// files display
const filesDisplay = document.querySelector(".files");

// bin display
const binDisplay = document.querySelector(".bin");

// msn display
const msnDisplay = document.querySelector(".msn");

// Icons
// bin
const bin = document.querySelector("#bin");

// MSN
const msn = document.querySelector("#msn");

// Important Files
const files = document.querySelector("#files");

// Note Pad
const note = document.querySelector("#note");

// close btns
// close btn files
const closeBtnFile = document.querySelector("#close--file");

// close btn note
const closeBtnNote = document.querySelector("#close--note");

// close btn bin
const closeBtnBin = document.querySelector("#close--bin");

// close btn msn
const closeBtnMsn = document.querySelector("#close--msn");

// Extra menus off main
// Photo menu
const photos = document.querySelector(".menu__photos");

// applications menu
const apps = document.querySelector(".menu__applications");

// games menu
const games = document.querySelector(".menu__games");

// photos btn
const photoBtn = document.querySelector("#photos");

// Extra menu btns
// application btn
const appsBtn = document.querySelector("#applications");

// Games btn
const gamesBtn = document.querySelector("#games");

// MSN app
// Submit btn
const submitBtn = document.querySelector(".submit");

// messageArea
const messageArea = document.querySelector("#messageArea");

// messageTxt
const messageTxt = document.querySelector("#messageTxt");

// msn event listener
submitBtn.addEventListener("click", () => {
  if (messageTxt.value === "") {
    return alert("No message to send");
  }
  createElement("p", messageTxt.value, messageArea);

  messageTxt.value = "";
});

// Menu event listener
start.addEventListener("click", () => {
  menu.classList.toggle("menu--hidden");
});

// Photos menu close
photoBtn.addEventListener("click", () => {
  photos.style.display = "none";
});

// Photos menu close
photoBtn.addEventListener("dblclick", () => {
  photos.style.display = "flex";
  menuToggle(photos, apps, games);
});

// Applications menu close
appsBtn.addEventListener("click", () => {
  apps.style.display = "none";
});

// Applications menu open
appsBtn.addEventListener("dblclick", () => {
  apps.style.display = "flex";
  menuToggle(apps, games, photos);
});

// Games menu close
gamesBtn.addEventListener("click", () => {
  games.style.display = "none";
});

// Games menu open
gamesBtn.addEventListener("dblclick", () => {
  games.style.display = "flex";
  menuToggle(games, apps, photos);
});

// Close button event listener
// close files
closeBtnFile.addEventListener("click", () => {
  filesDisplay.style.display = "none";
});

// close notepad
closeBtnNote.addEventListener("click", () => {
  notePad.style.display = "none";
});

// close recycling bin
closeBtnBin.addEventListener("click", () => {
  binDisplay.style.display = "none";
});

// close MSN
closeBtnMsn.addEventListener("click", () => {
  msnDisplay.style.display = "none";
});

// Icon event listeners

// Important files
// files card one click
files.addEventListener("click", () => {
  files.style.backgroundColor = $iconHover;
  files.style.border = $iconBorder;
  iconToggle(files, note, bin, msn);
});
// Important Files display open
files.addEventListener("dblclick", () => {
  filesDisplay.style.display = "block";
  files.style.backgroundColor = "transparent";
  files.style.border = "none";
});

// notepad
// notepad one click
note.addEventListener("click", () => {
  note.style.backgroundColor = $iconHover;
  note.style.border = $iconBorder;
  iconToggle(note, files, bin, msn);
});

// notepad display open
note.addEventListener("dblclick", () => {
  notePad.style.display = "block";
  note.style.backgroundColor = "transparent";
  note.style.border = "none";
});

//Recycling bin
// Recycling bin one click
bin.addEventListener("click", () => {
  bin.style.backgroundColor = $iconHover;
  bin.style.border = $iconBorder;
  iconToggle(bin, files, note, msn);
});

// Recycling bin display open
bin.addEventListener("dblclick", () => {
  binDisplay.style.display = "block";
  bin.style.backgroundColor = "transparent";
  bin.style.border = "none";
});

// MSN display
// MSN display one click
msn.addEventListener("click", () => {
  msn.style.backgroundColor = $iconHover;
  msn.style.border = $iconBorder;
  iconToggle(msn, files, note, bin);
});

// msn display open
msn.addEventListener("dblclick", () => {
  msnDisplay.style.display = "block";
  msn.style.backgroundColor = "transparent";
  msn.style.border = "none";
});

// Functions

// Element input function
const createElement = (elementType, text, parent) => {
  const newElement = document.createElement(elementType);

  const textNode = document.createTextNode("Crazy_Chicken23: " + text);

  newElement.appendChild(textNode);

  parent.appendChild(newElement);
};

// menu function
const menuToggle = (menuName1, menuName2, menuName3) => {
  if (menuName1.style.display === "flex") {
    //apps
    menuName2.style.display = "none"; //games
    menuName3.style.display = "none"; //photos
  } else if (menuName2.style.display === "flex") {
    //games
    menuName1.style.display = "none"; //apps
    menuName3.style.display = "none"; //photos
  } else if (menuName3.style.display === "flex") {
    //photos
    menuName1.style.display = "none"; //apps
    menuName2.style.display = "none"; //games
  }
};

//icon event listener function
const iconToggle = (icon1, icon2, icon3, icon4) => {
  if (icon1.style.border === $iconBorder) {
    icon2.style.border = "none";
    icon2.style.backgroundColor = "transparent";
    icon3.style.border = "none";
    icon3.style.backgroundColor = "transparent";
    icon4.style.border = "none";
    icon4.style.backgroundColor = "transparent";
  } else if (icon2.style.border === $iconBorder) {
    icon1.style.border = "none";
    icon1.style.backgroundColor = "transparent";
    icon3.style.border = "none";
    icon3.style.backgroundColor = "transparent";
    icon4.style.border = "none";
    icon4.style.backgroundColor = "transparent";
  } else if (icon3.style.border === $iconBorder) {
    icon1.style.border = "none";
    icon1.style.backgroundColor = "transparent";
    icon2.style.border = "none";
    icon2.style.backgroundColor = "transparent";
    icon4.style.border = "none";
    icon4.style.backgroundColor = "transparent";
  } else if (icon4.style.border === $iconBorder) {
    icon1.style.border = "none";
    icon1.style.backgroundColor = "transparent";
    icon2.style.border = "none";
    icon2.style.backgroundColor = "transparent";
    icon3.style.border = "none";
    icon3.style.backgroundColor = "transparent";
  }
};
