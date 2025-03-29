function calculateTotalPurchaseAmount(purchaseAmounts) {
    let totalAmount = 0;
  
    purchaseAmounts.forEach(amount => {
      totalAmount += amount;
    });
  
    return totalAmount;
  }
  
  const topCustomersPurchaseAmounts = [10000, 30000, 20000];
  console.log(calculateTotalPurchaseAmount(topCustomersPurchaseAmounts));