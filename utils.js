

function calculateDiscount(price, discountPercent) {
  if (price <= 0 || discountPercent < 0) {
    return "Invalid input";
  }

  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

// Example usage
console.log(calculateDiscount(1000, 10)); // 900