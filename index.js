function placeOrder() {
  // Show summary as soon as user interacts
  document.getElementById("orderSummary").style.display = "block";

  // Select Elements
  var uname = document.getElementById("txtName").value;
  var mobile = document.getElementById("txtMobile").value;

  var burger = document.getElementById("optBurger");
  var springRoll = document.getElementById("optSproll");
  var fries = document.getElementById("optfries");

  var coke = document.getElementById("optcoke");
  var mirinda = document.getElementById("optmirinda");

  var totalCost = 0;
  var mealName = "None Selected";
  var addonsList = "";

  // 1. Calculate Meal Cost (Radio Buttons)
  if (burger.checked) {
    totalCost = 120;
    mealName = "Burger";
  } else if (springRoll.checked) {
    totalCost = 80;
    mealName = "Spring Roll";
  } else if (fries.checked) {
    totalCost = 50;
    mealName = "Fries";
  }

  // 2. Calculate Add-ons (Checkboxes)
  if (coke.checked) {
    totalCost += 30;
    addonsList += "Coke<br>";
  }
  if (mirinda.checked) {
    totalCost += 30;
    addonsList += "Mirinda<br>";
  }

  // 3. Update the UI
  document.getElementById("lblName").innerHTML = uname || "---";
  document.getElementById("lblMobile").innerHTML = mobile || "---";
  document.getElementById("lblMeal").innerHTML = mealName;
  document.getElementById("lblAdd").innerHTML = addonsList || "No Add-ons";
  document.getElementById("lblAmount").innerHTML = "৳" + totalCost;

  const printBtn = document.querySelector('input[value="Print Bill"]');
  if (uname.trim() !== "" && totalCost > 0) {
    printBtn.disabled = false;
  } else {
    printBtn.disabled = true;
  }
}
