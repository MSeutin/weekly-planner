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
weekdayy.innerHTML = "Friday";
  f5.style.display = "block";
} else {
  weekday.innerHTML = "Saturday";
  s6.style.display = "block";
}

// MONDAY LOGIC
let m1li = document.querySelectorAll("li.monday");

for (let i = 0; i < m1li.length; i++) {
  m1li[i].addEventListener("click", function () {
    m1li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".monday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < m1li.length; i++) {
    if (m1li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < m1li.length; i++) {
      m1li[i].style.textDecoration = "none";
    }
  }
});

// TUESDAY LOGIC
let t2li = document.querySelectorAll("li.tuesday");

for (let i = 0; i < t2li.length; i++) {
  t2li[i].addEventListener("click", function () {
    t2li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".tuesday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < t2li.length; i++) {
    if (t2li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < t2li.length; i++) {
      t2li[i].style.textDecoration = "none";
    }
  }
});

// WEDNESDAY LOGIC
let w3li = document.querySelectorAll("li.wednesday");

for (let i = 0; i < w3li.length; i++) {
  w3li[i].addEventListener("click", function () {
    w3li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".wednesday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < w3li.length; i++) {
    if (w3li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < w3li.length; i++) {
      w3li[i].style.textDecoration = "none";
    }
  }
});


// THURSDAY LOGIC
let t4li = document.querySelectorAll("li.thursday");

for (let i = 0; i < t4li.length; i++) {
  t4li[i].addEventListener("click", function () {
    t4li[i].style.textDecoration = "line-through";
    // t4li[i].style.display = 'none';
  });
}

document.querySelector(".thursday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < t4li.length; i++) {
    if (t4li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < t4li.length; i++) {
      t4li[i].style.textDecoration = "none";
    }
  }
});

// FRIDAY LOGIC
let f5li = document.querySelectorAll("li.friday");

for (let i = 0; i < f5li.length; i++) {
  f5li[i].addEventListener("click", function () {
    f5li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".friday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < f5li.length; i++) {
    if (f5li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < f5li.length; i++) {
      f5li[i].style.textDecoration = "none";
    }
  }
});

// SATURDAY LOGIC
let s6li = document.querySelectorAll("li.saturday");

for (let i = 0; i < s6li.length; i++) {
  s6li[i].addEventListener("click", function () {
    s6li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".saturday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < s6li.length; i++) {
    if (s6li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < s6li.length; i++) {
      s6li[i].style.textDecoration = "none";
    }
  }
});

// SUNDAY LOGIC
let s7li = document.querySelectorAll("li.sunday");

for (let i = 0; i < s7li.length; i++) {
  s7li[i].addEventListener("click", function () {
    s7li[i].style.textDecoration = "line-through";
  });
}

document.querySelector(".sunday-btn").addEventListener("click", function () {
  let line_check4 = false;
  for (let i = 0; i < s7li.length; i++) {
    if (s7li[i].style.textDecoration == "line-through") {
      line_check4 = true;
    }
  }

  if (line_check4 === true) {
    for (let i = 0; i < s7li.length; i++) {
      s7li[i].style.textDecoration = "none";
    }
  }
});
