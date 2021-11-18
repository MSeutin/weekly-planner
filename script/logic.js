let day = new Date().getDay();

if (day == 0) {
  display.innerHTML = "Sunday";
  document.getElementById("monday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("thursday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
} else if (day == 1) {
  display.innerHTML = "Monday";
  document.getElementById("sunday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("thursday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
} else if (day == 2) {
  display.innerHTML = "Tuesday";
  document.getElementById("monday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("thursday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
  document.getElementById("sunday").style.display = "none";
} else if (day == 3) {
  display.innerHTML = "Wednesday";
  // show wednesday list
  document.getElementById("monday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("thursday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
  document.getElementById("sunday").style.display = "none";
} else if (day == 4) {
  display.innerHTML = "Thursday";
  document.getElementById("monday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
  document.getElementById("sunday").style.display = "none";
} else if (day == 5) {
  display.innerHTML = "Friday";
  document.getElementById("monday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("thusday").style.display = "none";
  document.getElementById("saturday").style.display = "none";
  document.getElementById("sunday").style.display = "none";
} else {
  display.innerHTML = "Saturday";
  document.getElementById("monday").style.display = "none";
  document.getElementById("tuesday").style.display = "none";
  document.getElementById("wednesday").style.display = "none";
  document.getElementById("thursday").style.display = "none";
  document.getElementById("friday").style.display = "none";
  document.getElementById("sunday").style.display = "none";
}
