
function placeOrder() {
  const summaryCard = document.getElementById("orderSummary");
  summaryCard.style.display = "block";

  const name = document.getElementById("txtName").value;
  const mobile = document.getElementById("txtMobile").value;

  const menuItems = [
    { id: "optBurger", qtyId: "qtyBurger", name: "Burger", price: 120 },
    { id: "optSproll", qtyId: "qtySproll", name: "Spring Roll", price: 80 },
    { id: "optfries", qtyId: "qtyfries", name: "Fries", price: 50 },
    { id: "optPizza", qtyId: "qtyPizza", name: "Pizza", price: 450 },
    { id: "optPasta", qtyId: "qtyPasta", name: "Pasta", price: 220 },
    { id: "optcoke", qtyId: "qtycoke", name: "Coke", price: 30 },
    { id: "optmirinda", qtyId: "qtymirinda", name: "Mirinda", price: 30 },
    { id: "optCoffee", qtyId: "qtyCoffee", name: "Coffee", price: 60 },
    { id: "optBrownie", qtyId: "qtyBrownie", name: "Brownie", price: 90 },
  ];

  let subtotal = 0;
  let itemsHtml = "";
   
  menuItems.forEach((item) => {
    const isChecked = document.getElementById(item.id).checked;
    const quantity = parseInt(document.getElementById(item.qtyId).value) || 1;

    if (isChecked) {
      let itemTotal = item.price * quantity;
      subtotal += itemTotal;

      itemsHtml += `
                <div class="d-flex justify-content-between align-items-center mb-1 border-bottom pb-1">
                    <span>${item.name} <small class="text-muted">x${quantity}</small></span>
                    <span class="fw-bold">৳${itemTotal}</span>
                </div>`;
    }
  });

  const vatRate = 0.05; // 5% VAT
  const tax = subtotal * vatRate;
  const finalTotal = subtotal + tax;

  document.getElementById("lblName").innerText = name || "---";
  document.getElementById("lblMobile").innerText = mobile || "---";

  const mealLabel = document.getElementById("lblMeal");
  mealLabel.innerHTML =
    itemsHtml || '<div class="text-muted small">No items selected</div>';

  document.getElementById("lblSubtotal").innerText = "৳" + subtotal;
  document.getElementById("lblTax").innerText = "৳" + tax.toFixed(2);
  document.getElementById("lblAmount").innerText = "৳" + finalTotal.toFixed(2);

  const printBtn = document.getElementById("btnPrint");
  if (name.trim() !== "" && subtotal > 0) {
    printBtn.disabled = false;
    printBtn.classList.replace("btn-secondary", "btn-success");
  } else {
    printBtn.disabled = true;
    printBtn.classList.replace("btn-success", "btn-secondary");
  }
}
