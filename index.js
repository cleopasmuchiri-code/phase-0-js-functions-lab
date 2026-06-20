function calculateTax(amount) {
  const tax = (10 / 100) * amount;

  return tax;
}

function convertToUpperCase(text) {
  const uppercase = text.toUpperCase();

  return uppercase;
}

function findMaximum(num1, num2) {
  const max = Math.max(num1, num2);

  return max;
}

function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedWord = cleanWord.split("").reverse().join("");

  return cleanWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
  const discountedPrice = (discountedPercentage / 100) * originalPrice;

  const total = originalPrice - discountedPrice;

  return total;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
