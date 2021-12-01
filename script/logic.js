// get day of the week 0=sunday, 1=monday...
let day = new Date().getDay();

// days array to display as title
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// display correct day of the week
today = document.querySelector(".today").innerHTML = days[day];

// object to use to display list of the day
let this_day = {
  0: ".sunday7",
  1: ".monday1",
  2: ".tuesday2",
  3: ".wednesday3",
  4: ".thursday4",
  5: ".friday5",
  6: ".saturday6",
};

// display list of the day
let w3 = (document.querySelector(this_day[day]).style.display = "block");

// FUNCTION to toggle item color
function item_toggle_color(list_items) {
  for (let i = 0; i < list_items.length; i++) {
    list_items[i].addEventListener("click", function () {
      if (list_items[i].style.color === "var(--nero)") {
        list_items[i].style.color = "lightgrey";
      } else if ((list_items[i].style.color = "lightgrey")) {
        list_items[i].style.color = "var(--nero)";
      }
    });
  }
}

// Variables to select today's list
let m1li = document.querySelectorAll("li.monday");
let t2li = document.querySelectorAll("li.tuesday");
let w3li = document.querySelectorAll("li.wednesday");
let t4li = document.querySelectorAll("li.thursday");
let f5li = document.querySelectorAll("li.friday");
let s6li = document.querySelectorAll("li.saturday");
let s7li = document.querySelectorAll("li.sunday");

// FUNCTION CALLS to Display TODAY's LIST
item_toggle_color(m1li);
item_toggle_color(t2li);
item_toggle_color(w3li);
item_toggle_color(t4li);
item_toggle_color(f5li);
item_toggle_color(s6li);
item_toggle_color(s7li);

// MONDAY LOGIC
document
  .querySelector(".monday-reset-btn")
  .addEventListener("click", function () {
    let line_check1 = false;
    for (let i = 0; i < m1li.length; i++) {
      if ((m1li[i].style.color = "lightgrey")) {
        line_check1 = true;
      }
    }

    if (line_check1 === true) {
      for (let i = 0; i < m1li.length; i++) {
        m1li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput1 = document.querySelector(".monday-input");
const addButton1 = document.querySelector(".monday-add");

addButton1.addEventListener("click", () => {
  const ul = document.querySelector(".monday1");
  const li = document.createElement("li");
  li.innerHTML = addInput1.value;
  addInput1.value = "";
  ul.appendChild(li);
});

// TUESDAY LOGIC
document
  .querySelector(".tuesday-reset-btn")
  .addEventListener("click", function () {
    let line_check2 = false;
    for (let i = 0; i < t2li.length; i++) {
      if ((t2li[i].style.color = "lightgrey")) {
        line_check2 = true;
      }
    }

    if (line_check2 === true) {
      for (let i = 0; i < t2li.length; i++) {
        t2li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput2 = document.querySelector(".tuesday-input");
const addButton2 = document.querySelector(".tuesday-add");

addButton2.addEventListener("click", () => {
  const ul = document.querySelector(".tuesday2");
  const li = document.createElement("li");
  li.innerHTML = addInput2.value;
  addInput2.value = "";
  ul.appendChild(li);
});

// WEDNESDAY LOGIC
document
  .querySelector(".wednesday-reset-btn")
  .addEventListener("click", function () {
    let line_check3 = false;
    for (let i = 0; i < w3li.length; i++) {
      if ((w3li[i].style.color = "lightgrey")) {
        line_check3 = true;
      }
    }

    if (line_check3 === true) {
      for (let i = 0; i < w3li.length; i++) {
        w3li[i].style.color = "var(--nero)";
      }
    }
  });
// create variables for adding items
const addInput3 = document.querySelector(".wednesday-input");
const addButton3 = document.querySelector(".wednesday-add");

addButton3.addEventListener("click", () => {
  const ul = document.querySelector(".wednesday3");
  const li = document.createElement("li");
  li.innerHTML = addInput3.value;
  addInput3.value = "";
  ul.appendChild(li);
});

// THURSDAY LOGIC

document
  .querySelector(".thursday-reset-btn")
  .addEventListener("click", function () {
    let line_check4 = false;
    for (let i = 0; i < t4li.length; i++) {
      if ((t4li[i].style.color = "lightgrey")) {
        line_check4 = true;
      }
    }

    if (line_check4 === true) {
      for (let i = 0; i < t4li.length; i++) {
        t4li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput4 = document.querySelector(".thursday-input");
const addButton4 = document.querySelector(".thursday-add");

addButton4.addEventListener("click", () => {
  const ul = document.querySelector(".thursday4");
  const li = document.createElement("li");
  li.innerHTML = addInput4.value;
  addInput4.value = "";
  ul.appendChild(li);
});

// FRIDAY LOGIC
document
  .querySelector(".friday-reset-btn")
  .addEventListener("click", function () {
    let line_check5 = false;
    for (let i = 0; i < f5li.length; i++) {
      if ((f5li[i].style.color = "lightgrey")) {
        line_check5 = true;
      }
    }

    if (line_check5 === true) {
      for (let i = 0; i < f5li.length; i++) {
        f5li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput5 = document.querySelector(".friday-input");
const addButton5 = document.querySelector(".friday-add");

addButton5.addEventListener("click", () => {
  const ul = document.querySelector(".friday5");
  const li = document.createElement("li");
  li.innerHTML = addInput5.value;
  addInput5.value = "";
  ul.appendChild(li);
});

// SATURDAY LOGIC
// let s6li = document.querySelectorAll("li.saturday");

for (let i = 0; i < s6li.length; i++) {
  s6li[i].addEventListener("click", function () {
    s6li[i].style.color = "lightgrey";
  });
}

document
  .querySelector(".saturday-reset-btn")
  .addEventListener("click", function () {
    let line_check6 = false;
    for (let i = 0; i < s6li.length; i++) {
      if ((s6li[i].style.color = "lightgrey")) {
        line_check6 = true;
      }
    }

    if (line_check6 === true) {
      for (let i = 0; i < s6li.length; i++) {
        s6li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput6 = document.querySelector(".saturday-input");
const addButton6 = document.querySelector(".saturday-add");

addButton6.addEventListener("click", () => {
  const ul = document.querySelector(".saturday6");
  const li = document.createElement("li");
  li.innerHTML = addInput6.value;
  addInput6.value = "";
  ul.appendChild(li);
});

// SUNDAY LOGIC
// let s7li = document.querySelectorAll("li.sunday");

for (let i = 0; i < s7li.length; i++) {
  s7li[i].addEventListener("click", function () {
    s7li[i].style.color = "lightgrey";
  });
}

document
  .querySelector(".sunday-reset-btn")
  .addEventListener("click", function () {
    let line_check7 = false;
    for (let i = 0; i < s7li.length; i++) {
      if ((s7li[i].style.color = "lightgrey")) {
        line_check7 = true;
      }
    }

    if (line_check7 === true) {
      for (let i = 0; i < s7li.length; i++) {
        s7li[i].style.color = "var(--nero)";
      }
    }
  });

// create variables for adding items
const addInput7 = document.querySelector(".sunday-input");
const addButton7 = document.querySelector(".sunday-add");

addButton7.addEventListener("click", () => {
  const ul = document.querySelector(".sunday7");
  const li = document.createElement("li");
  li.className = "sunday";
  li.innerHTML = addInput7.value;
  addInput7.value = "";
  ul.appendChild(li);
  li.addEventListener("click", function () {
    li.style.color = "lightgrey";
  });
});
