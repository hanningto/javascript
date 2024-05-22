
document.addEventListener('DOMContentLoaded', function() {
  const priceInput = document.getElementById('price');
  const quantityInput = document.getElementById('quantity');
  const quantityLabel = document.getElementById('quantity-label');
  const totalDiv = document.getElementById('total');

  function calculateTotal() {
    const price = parseFloat(priceInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 1;
    const total = price * quantity;
    totalDiv.textContent = `${total.toFixed(2)}`;
  }

  quantityInput.addEventListener('input', function() {
    quantityLabel.textContent = quantityInput.value;
    calculateTotal();
  });

  priceInput.addEventListener('input', calculateTotal);

  calculateTotal(); // Initial calculation
});