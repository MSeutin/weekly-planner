let day = new Date().getDay();

// hide all 7 days
let m1 = document.querySelector(".monday1");
let t2 = document.querySelector(".tuesday2");
let w3 = document.querySelector(".wednesday3");
let t4 = document.querySelector(".thursday4");
let f5 = document.querySelector(".friday5");
let s6 = document.querySelector(".saturday6");
let s7 = document.querySelector(".sunday7");
m1.style.display = "none";
t2.style.display = "none";
w3.style.display = "none";
t4.style.display = "none";
f5.style.display = "none";
s6.style.display = "none";
s7.style.display = "none";

if (day == 0) {
  weekday.innerHTML = "Sunday";
  s7.style.display = "block";
} else if (day == 1) {
  weekday.innerHTML = "Monday";
  m1.style.display = "block";
} else if (day == 2) {
  weekday.innerHTML = "Tuesday";
  t2.style.display = "block";
} else if (day == 3) {
  weekday.innerHTML = "Wednesday";
  w3.style.display = "block";
} else if (day == 4) {
  weekday.innerHTML = "Thursday";
  t4.style.display = "block";
} else if (day == 5) {
  weekday.innerHTML = "Friday";
  f5.style.display = "block";
} else {
  weekday.innerHTML = "Saturday";
  s6.style.display = "block";
}

// MONDAY LOGIC
let m1li = document.querySelectorAll("li.monday");

for (let i = 0; i < m1li.length; i++) {
  m1li[i].addEventListener("click", function () {
    m1li[i].style.color = "lightgrey";
  });
}

document.querySelector(".monday-btn").addEventListener("click", function () {
  let line_check3 = false;
  for (let i = 0; i < m1li.length; i++) {
    if (m1li[i].style.color = "lightgrey") {
      line_check3 = true;
    }
  }

  if (line_check3 === true) {
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
let t2li = document.querySelectorAll("li.tuesday");

for (let i = 0; i < t2li.length; i++) {
  t2li[i].addEventListener("click", function () {
    t2li[i].style.color = "lightgrey";
  });
}

document.querySelector(".tuesday-btn").addEventListener("click", function () {
  let line_check3 = false;
  for (let i = 0; i < t2li.length; i++) {
    if (t2li[i].style.color = "lightgrey") {
      line_check3 = true;
    }
  }

  if (line_check3 === true) {
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
let w3li = document.querySelectorAll("li.wednesday");

for (let i = 0; i < w3li.length; i++) {
  w3li[i].addEventListener("click", function () {
    w3li[i].style.color = "lightgrey";
  });
}

document.querySelector(".wednesday-btn").addEventListener("click", function () {
  let line_check3 = false;
  for (let i = 0; i < w3li.length; i++) {
    if (w3li[i].style.color = "lightgrey") {
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
let t4li = document.querySelectorAll("li.thursday");

for (let i = 0; i < t4li.length; i++) {
  t4li[i].addEventListener("click", function () {
    t4li[i].style.color = "lightgrey";
    // t4li[i].style.color = "green";
    // t4li[i].style.display = 'none';
  });
}

document.querySelector(".thursday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < t4li.length; i++) {
    if (t4li[i].style.color = "lightgrey") {
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
let f5li = document.querySelectorAll("li.friday");

for (let i = 0; i < f5li.length; i++) {
  f5li[i].addEventListener("click", function () {
    // f5li[i].style.textDecoration = "line-through";
    f5li[i].style.color = "lightgrey";
  });
}

document.querySelector(".friday-btn").addEventListener("click", function () {
  let line_check5 = false;
  for (let i = 0; i < f5li.length; i++) {
    if (f5li[i].style.color = "lightgrey") {
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
let s6li = document.querySelectorAll("li.saturday");

for (let i = 0; i < s6li.length; i++) {
  s6li[i].addEventListener("click", function () {
    s6li[i].style.color = "lightgrey";
  });
}

document.querySelector(".saturday-btn").addEventListener("click", function () {
  let line_check6 = false;
  for (let i = 0; i < s6li.length; i++) {
    if (s6li[i].style.color = "lightgrey") {
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
let s7li = document.querySelectorAll("li.sunday");

for (let i = 0; i < s7li.length; i++) {
  s7li[i].addEventListener("click", function () {
    s7li[i].style.color = "lightgrey";
  });
}

document.querySelector(".sunday-btn").addEventListener("click", function () {
  let line_check7 = false;
  for (let i = 0; i < s7li.length; i++) {
    if (s7li[i].style.color = "lightgrey") {
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
  li.innerHTML = addInput7.value;
  addInput7.value = "";
  ul.appendChild(li);
});
