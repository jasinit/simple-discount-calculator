const originalPriceInput = document.getElementById("original-price");
const discountPercentageInput = document.getElementById("discount-percentage");
const calculateButton = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

// Function to calculate discount and final price
function calculateDiscount(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;

  return {
    discountAmount,
    finalPrice,
  };
}

// Event handler for calculate button click
function handleCalculateClick() {
  const originalPrice = parseFloat(originalPriceInput.value);
  const discountPercentage = parseFloat(discountPercentageInput.value);

  if (Number.isNaN(originalPrice) || Number.isNaN(discountPercentage)) {
    resultDiv.textContent = "Please enter valid numbers for both fields.";
    return;
  }

  const { discountAmount, finalPrice } = calculateDiscount(
    originalPrice,
    discountPercentage,
  );

  // Display the results
  resultDiv.innerHTML = `
    <div class="result-container">
      <div class="result-row">
        <span>Discounted Amount:</span>
        <span>-$${discountAmount.toFixed(2)}</span>
      </div>
      <div class="result-row final">
        <span>Final Price:</span>
        <span>$${finalPrice.toFixed(2)}</span>
      </div>
    </div>
  `;
}
calculateButton.addEventListener("click", handleCalculateClick);
