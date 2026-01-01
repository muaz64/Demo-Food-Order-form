function placeOrder() {
    // Reveal the summary
    document.getElementById("orderSummary").style.display = "block";

    // Data Fetching
    const name = document.getElementById("txtName").value;
    const mobile = document.getElementById("txtMobile").value;
    
    const burger = document.getElementById("optBurger");
    const spRoll = document.getElementById("optSproll");
    const fries = document.getElementById("optfries");
    const coke = document.getElementById("optcoke");
    const mirinda = document.getElementById("optmirinda");

    let subtotal = 0;
    let mealName = [];
    let addons = [];

    // 1. Meal Selection
    if (burger.checked) { subtotal += 120; mealName.push("Burger"); }
    if (spRoll.checked) { subtotal += 80; mealName.push("Spring Roll"); }
    if (fries.checked) { subtotal += 50; mealName.push("Fries"); }

    // 2. Add-ons Selection
    if (coke.checked) { subtotal += 30; addons.push("Coke"); }
    if (mirinda.checked) { subtotal += 30; addons.push("Mirinda"); }

    // 3. Tax Calculation
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    // 4. Update UI
    document.getElementById("lblName").innerText = name || "---";
    document.getElementById("lblMobile").innerText = mobile || "---";
    document.getElementById("lblMeal").innerText = mealName;
    document.getElementById("lblAdd").innerHTML = addons.length > 0 ? addons.join(", ") : "None";
    
    document.getElementById("lblSubtotal").innerText = "৳" + subtotal;
    document.getElementById("lblTax").innerText = "৳" + tax.toFixed(2);
    document.getElementById("lblAmount").innerText = "৳" + total.toFixed(2);

    // 5. Validation for Print Button
    const btn = document.getElementById("btnPrint");
    if (name.trim() !== "" && subtotal > 0) {
        btn.disabled = false;
        btn.classList.replace("btn-secondary", "btn-success");
    } else {
        btn.disabled = true;
        btn.classList.replace("btn-success", "btn-secondary");
    }
}