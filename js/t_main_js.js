function displayMenu() 
{
  var x = document.getElementById("topNav");
  if (x.className === "navDropdown") {
    x.className += " responsive";
  } else {
    x.className = "navDropdown";
  }
} 