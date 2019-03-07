function displayMenu() {
  var x = index.getElementById("topNav");
  if (x.className === "navDropdown") {
    x.className += " responsive";
  } else {
    x.className = "navDropdown";
  }
} 