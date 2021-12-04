// VARIABLES - get day of the week 0=sunday, 1=monday...
let day = new Date().getDay();

// VARIABLES - days array to display as title
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// VARIABLES - to select today's list
let s0li = document.querySelectorAll(".sunday0 li");
let m1li = document.querySelectorAll(".monday1 li");
let t2li = document.querySelectorAll(".tuesday2 li");
let w3li = document.querySelectorAll(".wednesday3 li");
let t4li = document.querySelectorAll(".thursday4 li");
let f5li = document.querySelectorAll(".friday5 li");
let s6li = document.querySelectorAll(".saturday6 li");

let day_list = [s0li, m1li, t2li, w3li, t4li, f5li, s6li];

// VARIABLES - object to use to display list of the day
let this_day = {
  0: ".sunday0",
  1: ".monday1",
  2: ".tuesday2",
  3: ".wednesday3",
  4: ".thursday4",
  5: ".friday5",
  6: ".saturday6",
};

// VARIABLES 
const addText = document.querySelector(".add-item-text");
const addButton = document.querySelector(".add-item-btn");
const WEEKDAY = days[day]; // Monday, Tuesday, ..
let showOnlyToday = this_day[day]; // class ".monday1", ".tuesday2"..
let listForToday = day_list[day]; // list items for today

// DISPLAY - Weekday & List of the day
document.querySelector(".today").innerHTML = WEEKDAY;
document.querySelector(showOnlyToday).style.display = "block";

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

// function item_toggle_color() {
//   for (let i = 0; i < day_list[day].length; i++){
//     if (day_list[day][i].style.color === "var(--nero)") {
//       day_list[day][i].style.color = "lightgrey";
//     } else if (day_list[day][i].style.color === "lightgrey") {
//       day_list[day][i].style.color = "var(--nero)";
//     }
//   }
// }

// FUNCTION to Clear Button - Input
function reset() {
  let line_check = false;
  for (let i = 0; i < listForToday.length; i++) {
    if (listForToday[i].style.color === "lightgrey") {
      line_check = true;
    }
  }
  if (line_check === true) {
    for (let i = 0; i < w3li.length; i++) {
      listForToday[i].style.color = "var(--nero)";
    }
  }
}

// FUNCTION to Add Item to List Element
function addItem() {
  const ul = document.querySelector(showOnlyToday);
  const li = document.createElement("li");
  li.innerHTML = addText.value;
  addText.value = "";
  ul.appendChild(li);
}

// FUNCTION CALLS:
// to Toggle Items States
item_toggle_color(listForToday);

// CALLS EVENT LISTENERS
addButton.addEventListener("click", addItem);
document.querySelector(".reset-btn").addEventListener("click", reset);
// this_day[day].addEventListener("click", item_toggle_color);

